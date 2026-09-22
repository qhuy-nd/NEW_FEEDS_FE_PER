import type { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type TBackendUser = {
  id?: string;
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
}

type TBackendAuthData = {
  user?: TBackendUser;
  accessToken?: string;
  token?: string;
  refreshToken?: string;
}

type TBackendAuthResponse = {
  data?: TBackendAuthData;
  accessToken?: string;
  token?: string;
  refreshToken?: string;
  user?: TBackendUser;
}

type TAuthUser = User & {
  username?: string;
  accessToken: string;
  refreshToken?: string;
}

const backendBaseUrl = process.env.AUTH_BACKEND_URL ?? "https://mangox-test.mangoads.com.vn/api/v1";

const getAuthData = (raw: TBackendAuthResponse): TBackendAuthData => {
  return {
    user: raw.data?.user ?? raw.user,
    accessToken: raw.data?.accessToken ?? raw.data?.token ?? raw.accessToken ?? raw.token,
    refreshToken: raw.data?.refreshToken ?? raw.refreshToken,
  };
}

const normalizeUser = (data: TBackendAuthData): TAuthUser => {
  const user = data.user ?? {};
  const id = user._id ?? user.id ?? user.email ?? "";

  if (!data.accessToken || !id) {
    throw new Error("Invalid auth response");
  }

  return {
    id,
    name: user.name ?? user.username ?? user.email,
    username: user.username,
    email: user.email,
    accessToken: data.accessToken,
    refreshToken: data.refreshToken,
  };
}

const changeTenant = async (accessToken: string): Promise<Partial<TBackendAuthData>> => {
  const response = await fetch(`${backendBaseUrl}/auth/change-tenant`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: "application/json",
    },
  });

  if (!response.ok) return {};

  const raw = await response.json() as TBackendAuthResponse;
  return getAuthData(raw);
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const response = await fetch(`${backendBaseUrl}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        if (!response.ok) {
          return null;
        }

        const raw = await response.json() as TBackendAuthResponse;
        const data = getAuthData(raw);

        if (data.accessToken) {
          const tenantData = await changeTenant(data.accessToken);
          data.accessToken = tenantData.accessToken ?? data.accessToken;
          data.refreshToken = tenantData.refreshToken ?? data.refreshToken;
        }

        return normalizeUser(data);
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        const authUser = user as TAuthUser;
        token.id = authUser.id;
        token.username = authUser.username;
        token.accessToken = authUser.accessToken;
        token.refreshToken = authUser.refreshToken;
      }

      return token;
    },
    session({ session, token }) {
      session.user = {
        ...session.user,
        id: String(token.id ?? ""),
        username: typeof token.username === "string" ? token.username : undefined,
        accessToken: typeof token.accessToken === "string" ? token.accessToken : undefined,
        refreshToken: typeof token.refreshToken === "string" ? token.refreshToken : undefined,
      };
      session.accessToken = typeof token.accessToken === "string" ? token.accessToken : undefined;
      session.refreshToken = typeof token.refreshToken === "string" ? token.refreshToken : undefined;

      return session;
    },
  },
};

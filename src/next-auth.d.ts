import type { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user?: DefaultSession["user"] & {
      id?: string;
      username?: string;
      accessToken?: string;
      refreshToken?: string;
    };
  }

  interface User {
    username?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    username?: string;
    accessToken?: string;
    refreshToken?: string;
  }
}

import { createContext } from "react";
import type { IMeResponse } from "../../services/auth/me/me.type";
import type { TAuthTokens } from "../../services/auth/token";

export type TAuthStatus = "checking" | "authenticated" | "guest";

export type TAuthContext = {
  profile: IMeResponse | null;
  user: IMeResponse | null;
  status: TAuthStatus;
  isChecking: boolean;
  isAuthenticated: boolean;
  login: (tokens: TAuthTokens) => Promise<IMeResponse | null>;
  logout: () => void;
  refreshUser: () => Promise<IMeResponse | null>;
}

export const AuthContext = createContext<TAuthContext | null>(null);

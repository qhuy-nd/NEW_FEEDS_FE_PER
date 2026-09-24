"use client";

import { signOut, useSession } from "next-auth/react";
import { useCallback, useEffect, useMemo, type ReactNode } from "react";
import type { IMeResponse } from "../../services/auth/me/me.type";
import { clearAuthTokens, saveAuthTokens } from "../../services/auth/token";
import { AuthContext, type TAuthContext, type TAuthStatus } from "./auth.context";

const getProfileFromSession = (session: ReturnType<typeof useSession>["data"]): IMeResponse | null => {
  if (!session?.user) return null;

  return {
    id: session.user.id ?? session.user.email ?? "",
    username: session.user.username ?? session.user.name ?? session.user.email ?? "",
    email: session.user.email ?? "",
  };
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status: sessionStatus, update } = useSession();
  const profile = getProfileFromSession(session);

  useEffect(() => {
    if (sessionStatus === "loading") return;

    if (session?.accessToken) {
      saveAuthTokens({
        accessToken: session.accessToken,
        refreshToken: session.refreshToken,
      });
      return;
    }

    clearAuthTokens();
  }, [session?.accessToken, session?.refreshToken, sessionStatus]);

  const status = useMemo<TAuthStatus>(() => {
    if (sessionStatus === "loading") return "checking";
    if (profile) return "authenticated";
    return "guest";
  }, [profile, sessionStatus]);

  const logout = useCallback(() => {
    clearAuthTokens();
    void signOut({ callbackUrl: "/" });
  }, []);

  const refreshUser = useCallback(async () => {
    const nextSession = await update();
    return getProfileFromSession(nextSession);
  }, [update]);

  const login = useCallback(async () => {
    return refreshUser();
  }, [refreshUser]);

  const value = useMemo<TAuthContext>(() => ({
    profile,
    user: profile,
    status,
    isChecking: status === "checking",
    isAuthenticated: status === "authenticated",
    login,
    logout,
    refreshUser,
  }), [login, logout, profile, refreshUser, status]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

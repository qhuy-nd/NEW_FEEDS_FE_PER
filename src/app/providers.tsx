"use client";

import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/auth/AuthProvider";
import Toaster from "../atoms/toast";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </SessionProvider>
  );
}

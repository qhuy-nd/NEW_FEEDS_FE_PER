import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.scss";

export const metadata: Metadata = {
  title: "My YTB Social",
  description: "Social feed application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "iNeedCodes | Autonomous CLI AI agent",
  description: "Tell iNeedCodes what you want. It figures out how to do it. A general-purpose autonomous CLI AI agent for technical work.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

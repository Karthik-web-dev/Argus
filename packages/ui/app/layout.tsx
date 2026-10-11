import type { Metadata } from "next";
import { Inter_Tight, Roboto_Mono } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-code", display: "swap" });

export const metadata: Metadata = { title: "Argus — Evidence-backed QA", description: "Autonomous QA that explores, tests, and reports with proof." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${interTight.variable} ${robotoMono.variable}`}>{children}</body></html>;
}

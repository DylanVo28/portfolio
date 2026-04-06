import type { Metadata } from "next";
import { Iceland, Orbitron } from "next/font/google";
import "./globals.css";

const iceland = Iceland({
  variable: "--font-iceland",
  weight: "400",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DINH VO | Frontend Developer",
  description:
    "Frontend developer with 4 years of experience building polished web interfaces with React, Next.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${iceland.variable} ${orbitron.variable}`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Big_Shoulders, Iceland } from "next/font/google";
import "./globals.css";

const iceland = Iceland({
  variable: "--font-iceland",
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

const bigShoulders = Big_Shoulders({
  axes: ["opsz"],
  display: "swap",
  subsets: ["latin", "vietnamese"],
  variable: "--font-big-shoulders",
  weight: "variable",
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
      <body className={`${iceland.variable} ${bigShoulders.variable}`}>
        {children}
      </body>
    </html>
  );
}

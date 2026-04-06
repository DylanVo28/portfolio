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

const siteUrl = "https://portfolio-six-rosy-90.vercel.app";
const siteTitle = "DINH VO | Frontend Developer";
const siteDescription =
  "Frontend developer with 4 years of experience building polished web interfaces with React, Next.js, and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "DINH VO Portfolio",
    type: "website",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1725,
        height: 1084,
        alt: "DINH VO portfolio thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/images/thumbnail.png",
        alt: "DINH VO portfolio thumbnail",
      },
    ],
  },
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

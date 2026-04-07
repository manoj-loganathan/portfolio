import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manoj Loganathan | Portfolio",
  description: "Results-driven Full Stack Developer with 3+ years of expertise in MERN stack and Next.js, specializing in building scalable web applications and real-time dashboards.",
};

import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased font-sans`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-black text-white selection:bg-zinc-800">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

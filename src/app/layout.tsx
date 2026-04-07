import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Manoj Loganathan | Full Stack Developer & Mobile App Engineer",
  description: "Portfolio of Manoj Loganathan, a Full Stack Developer specializing in MERN stack, Next.js, and Native Mobile Apps. I build scalable web software, real-time dashboards, and premium cross-platform mobile applications.",
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

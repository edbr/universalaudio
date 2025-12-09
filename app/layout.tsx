import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universal Audio – Growth Dashboard",
  description:
    "A data-driven prototype exploring conversion, retention, and subscription insights for Universal Audio.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "icon", type: "image/png", url: "/favicon.png" },
      { rel: "icon", type: "image/avif", url: "/favicon.avif" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[#0d0d0e]            /* Universal Audio dark background */
          text-white               /* High legibility on dark mode */
          min-h-screen
        `}
      >
         <Sidebar />
        <div className="ml-60  px-6 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: {
    default: "Git Engine",
    template: "%s — Git Engine",
  },
  description:
    "Master Git and version control through an interactive terminal-inspired learning platform built for students.",
  authors: [{ name: "Git Engine" }],
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  openGraph: {
    title: "Git Engine — Learn Git & Version Control",
    description:
      "Master Git and version control through an interactive terminal-inspired learning platform built for students.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gitengine",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

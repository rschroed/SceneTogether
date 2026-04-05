import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";

import "./globals.css";

const display = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../node_modules/@fontsource/oswald/files/oswald-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/oswald/files/oswald-latin-700-normal.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const body = localFont({
  variable: "--font-body",
  src: [
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-600-normal.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/manrope/files/manrope-latin-800-normal.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "SceneTogether",
  description: "A structured decision surface for picking the movie and time together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}

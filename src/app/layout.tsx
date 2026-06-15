import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

// Bundled, self-hosted Geist — no runtime Google Fonts fetch.
// Both define --font-geist-sans / --font-geist-mono used in globals.css.

export const metadata: Metadata = {
  title: "Paradosxia Cars — The World of the Hypercar",
  description:
    "A study of the rarest hypercars and ultra-luxury machines on earth — Bugatti, Pagani, Koenigsegg, Ferrari — and the world that surrounds them.",
  openGraph: {
    title: "Paradosxia Cars",
    description: "The world of the hypercar.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

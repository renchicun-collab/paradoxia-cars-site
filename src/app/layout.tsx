import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "Paradosxia Cars — ハイパーカーの世界",
  description:
    "ブガッティ、パガーニ、ケーニグセグ、フェラーリ。世界で最も希少な車と、それを取り巻く世界を深く掘り下げるメディア。",
  openGraph: {
    title: "Paradosxia Cars",
    description: "ハイパーカーの世界へ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        {/* Noto Serif JP — 日本語セリフ体。Vercel上でフェッチされます */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}

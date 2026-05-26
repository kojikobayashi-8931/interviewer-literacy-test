import type { Metadata } from "next";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  icons: {
    icon: "https://nodia.co.jp/assets/favicon.ico",
    shortcut: "https://nodia.co.jp/assets/favicon.ico",
  },
  title: "面接NG発言チェッカー | NODIA",
  description:
    "その質問、アウトかもしれません。採用面接官に必要な知識・リテラシーを23問で診断。NGな質問・発言を理解して、リスクのない面接を実現しましょう。",
  openGraph: {
    title: "面接NG発言チェッカー | NODIA",
    description: "その質問、アウトかもしれません。23問で面接リテラシーを診断。",
    type: "website",
    siteName: "面接NG発言チェッカー | NODIA",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "面接NG発言チェッカー | NODIA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/api/og"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-base">
        <header className="bg-white border-b border-border shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="https://nodia.co.jp/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="NODIA"
                className="h-8 w-auto"
              />
            </a>
            <span className="text-xs font-body font-semibold text-accent bg-accent bg-opacity-10 px-3 py-1 rounded-full">
              面接NG発言チェッカー
            </span>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-0 bg-main py-10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm font-body font-bold text-white mb-1">面接NG発言チェッカー</p>
            <p className="text-xs font-body text-white opacity-50 mb-4">Powered by NODIA</p>
            <p className="text-xs font-body">
              <a
                href="https://nodia.co.jp/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:underline mr-4"
              >
                プライバシーポリシー
              </a>
              <a
                href="https://nodia.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-light hover:underline"
              >
                NODIAサイトへ
              </a>
            </p>
            <p className="text-xs text-white opacity-30 font-body mt-4">
              © 2026 NODIA Inc. All Rights Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

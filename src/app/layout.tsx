import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "採用面接官リテラシー診断 | NODIA",
  description:
    "面接官としての知識・リテラシーを29問で診断。段位でレベルを判定します。NODIAが提供する採用担当者向け無料診断ツール。",
  openGraph: {
    title: "採用面接官リテラシー診断 | NODIA",
    description: "面接官としての知識を29問で診断。段位でレベルを判定します。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
        <header className="bg-main shadow-sm">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center">
            <a href="https://nodia.co.jp/" target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="NODIA"
                className="h-8 w-auto brightness-0 invert"
              />
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-border py-8">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <p className="text-xs text-text font-body">
              © 2026 NODIA Inc. All Rights Reserved.
            </p>
            <p className="text-xs text-text font-body mt-2">
              <a
                href="https://nodia.co.jp/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline mr-4"
              >
                プライバシーポリシー
              </a>
              <a
                href="https://nodia.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                NODIAサイトへ
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}

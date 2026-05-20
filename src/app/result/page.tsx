import type { Metadata } from "next";
import { headers } from "next/headers";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";
import ResultContent from "./ResultContent";

type Props = {
  searchParams: { correct?: string; total?: string; rank?: string; name?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const rankId = searchParams.rank ?? "egg";
  const score = searchParams.correct ?? "0";
  const rawName = searchParams.name ?? "";

  // リクエストのホストから絶対URLを構築（metadataBaseに依存しない最確実な方法）
  const headersList = headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto = headersList.get("x-forwarded-proto")
    ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const rank = RANK_THRESHOLDS.find((r) => r.id === rankId);
  const rankLabel = rank ? `${rank.label}（${rank.grade}）` : "要研修（D）";

  const title = rawName
    ? `${rawName}さんの診断結果：${rankLabel} | 面接NG発言チェッカー`
    : `診断結果：${rankLabel} | 面接NG発言チェッカー`;
  const description = `${score}/23問正解 | 面接NG発言チェッカー by NODIA`;

  // OG画像URL（絶対パス）
  const ogImageUrl = `${baseUrl}/api/og?rank=${encodeURIComponent(rankId)}&score=${encodeURIComponent(score)}&name=${encodeURIComponent(rawName)}`;
  // ページURL（og:url用）
  const pageUrl = `${baseUrl}/result?correct=${encodeURIComponent(score)}&total=23&rank=${encodeURIComponent(rankId)}&name=${encodeURIComponent(rawName)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: pageUrl,
      type: "website",
      siteName: "面接NG発言チェッカー | NODIA",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: rankLabel,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function ResultPage() {
  return <ResultContent />;
}

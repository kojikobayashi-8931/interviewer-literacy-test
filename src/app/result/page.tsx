import type { Metadata } from "next";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";
import ResultContent from "./ResultContent";

type Props = {
  searchParams: { correct?: string; total?: string; rank?: string; name?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const rankId = searchParams.rank ?? "egg";
  const score = searchParams.correct ?? "0";
  const rawName = searchParams.name ?? "";

  const rank = RANK_THRESHOLDS.find((r) => r.id === rankId);
  const rankLabel = rank ? `${rank.label}（${rank.grade}）` : "要研修（D）";
  const title = rawName
    ? `${rawName}さんの診断結果：${rankLabel} | 面接NG発言チェッカー`
    : `診断結果：${rankLabel} | 面接NG発言チェッカー`;
  const description = `${score}/23問正解 | 面接NG発言チェッカー by NODIA`;
  const ogImageUrl = `/api/og?rank=${encodeURIComponent(rankId)}&score=${encodeURIComponent(score)}&name=${encodeURIComponent(rawName)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: rankLabel }],
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

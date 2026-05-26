import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

// Noto Sans JP（日本語フォント）をjsDelivrから取得
async function loadJapaneseFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-jp@5.0.12/files/noto-sans-jp-japanese-700-normal.woff2",
      { cache: "force-cache" }
    );
    if (!res.ok) return null;
    return res.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const rankId = url.searchParams.get("rank") ?? "egg";
  const score = parseInt(url.searchParams.get("score") ?? "0", 10);
  const name = url.searchParams.get("name") ?? "";

  const rank =
    RANK_THRESHOLDS.find((r) => r.id === rankId) ??
    RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

  const total = 23;
  const rate = Math.round((score / total) * 1000) / 10;
  const riskColor = rank.riskColor;

  // 日本語フォント読み込み（失敗しても続行）
  const fontData = await loadJapaneseFont();
  const fonts = fontData
    ? [{ name: "NotoSansJP", data: fontData, weight: 700 as const, style: "normal" as const }]
    : [];
  const ff = fontData ? "NotoSansJP, sans-serif" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2C3E50",
          fontFamily: ff,
          padding: "0 80px",
        }}
      >
        {/* サービス名 */}
        <div
          style={{
            color: "#A8D8DC",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "20px",
          }}
        >
          面接NG発言チェッカー | NODIA
        </div>

        {/* 炎上リスクバッジ */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            border: `2px solid ${riskColor}`,
            borderRadius: "999px",
            padding: "10px 28px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: riskColor,
            }}
          />
          <span style={{ color: riskColor, fontSize: "24px", fontWeight: 700 }}>
            {`面接炎上リスク：${rank.riskLevel}`}
          </span>
        </div>

        {/* ユーザー名 */}
        {name !== "" && (
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "18px",
            }}
          >
            {`${name}さんの診断結果`}
          </div>
        )}

        {/* グレード円 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "60px",
            backgroundColor: riskColor,
            marginBottom: "20px",
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: "60px", fontWeight: 700 }}>
            {rank.grade}
          </span>
        </div>

        {/* ランク称号 */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "40px",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          {rank.label}
        </div>

        {/* スコア */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 700 }}>
            {`${score} / ${total}問正解`}
          </span>
          <span style={{ color: "#A8D8DC", fontSize: "28px" }}>|</span>
          <span style={{ color: riskColor, fontSize: "32px", fontWeight: 700 }}>
            {`${rate}%`}
          </span>
        </div>

        {/* タグライン */}
        <div style={{ color: "#A8D8DC", fontSize: "18px" }}>
          あなたも炎上リスクを診断してみよう →
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts,
    }
  );
}

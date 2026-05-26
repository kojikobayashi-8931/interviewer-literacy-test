import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

/**
 * Noto Sans JP サブセットフォント（Base64埋め込み）
 * 対象文字（OGPテンプレートで使用する全日本語文字）:
 *   面接発言炎上リスクチェッカーNODIA低めやや高め普通診断結果水準最高上位標準要強化研修問正解
 *   あなたもをしてみよう→さんのリテラシー：
 * ファイルサイズ: ~13KB (woff2) → ~17KB (base64)
 * 外部ネットワーク不要・edge runtime対応
 */
const NOTO_SANS_JP_B64 =
  "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";

function base64ToArrayBuffer(b64: string): ArrayBuffer {
  const bin = atob(b64);
  const buf = new ArrayBuffer(bin.length);
  const arr = new Uint8Array(buf);
  for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
  return buf;
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

  const fontData = base64ToArrayBuffer(NOTO_SANS_JP_B64);
  const fonts = [
    {
      name: "NotoSansJP",
      data: fontData,
      weight: 700 as const,
      style: "normal" as const,
    },
  ];

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
          fontFamily: "NotoSansJP, sans-serif",
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

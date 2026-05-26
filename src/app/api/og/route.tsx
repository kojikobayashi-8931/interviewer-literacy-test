import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

// Noto Sans JP サブセット（日本語OGP用文字のみ）をBase64で埋め込み
// 対象文字: 面接NG発言チェッカーNODIA炎上リスク低めやや高め普通診断結果水準最高上位標準要強化研修問正解あなたも→さんの
// ファイルサイズ: ~10KB (woff2)
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

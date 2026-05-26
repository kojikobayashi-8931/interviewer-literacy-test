// next/og ではなく @vercel/og を直接使用
// （WAMSバンドルをVercelのビルドパイプラインに正しく認識させるため）
import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  // デバッグモード
  if (url.searchParams.get("debug") === "1") {
    return new Response(
      JSON.stringify({ NEXT_RUNTIME: process.env.NEXT_RUNTIME, ok: true }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  const rankId = url.searchParams.get("rank") ?? "egg";
  const score = parseInt(url.searchParams.get("score") ?? "0", 10);
  const name = url.searchParams.get("name") ?? "";

  const rank =
    RANK_THRESHOLDS.find((r) => r.id === rankId) ??
    RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

  const total = 23;
  const rate = Math.round((score / total) * 1000) / 10;
  const riskColor = rank.riskColor;

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
          fontFamily: "sans-serif",
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
          Interview NG Checker | NODIA
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
            Risk: {rank.riskLevel}
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
            {name}
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

        {/* ランク称号（ASCII） */}
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
          }}
        >
          <span style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 700 }}>
            {score} / {total}
          </span>
          <span style={{ color: "#A8D8DC", fontSize: "28px" }}>|</span>
          <span style={{ color: riskColor, fontSize: "32px", fontWeight: 700 }}>
            {rate}%
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

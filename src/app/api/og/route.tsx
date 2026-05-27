import { ImageResponse } from "next/og";

export const runtime = "edge";

// ランク情報（日本語なし・外部fetch不要）
const RANK_INFO: Record<string, { grade: string; color: string }> = {
  grandmaster: { grade: "S", color: "#27AE60" },
  master:      { grade: "A", color: "#2D8B92" },
  path:        { grade: "B", color: "#E67E22" },
  step:        { grade: "C", color: "#E74C3C" },
  egg:         { grade: "D", color: "#C0392B" },
};

const TOTAL = 23;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rankId  = searchParams.get("rank")  ?? "egg";
  const scoreRaw = searchParams.get("score") ?? "0";

  const rank     = RANK_INFO[rankId] ?? RANK_INFO.egg;
  const scoreNum = Math.min(Math.max(parseInt(scoreRaw, 10) || 0, 0), TOTAL);
  const pct      = Math.round((scoreNum / TOTAL) * 100);

  const image = new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#2C3E50",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* NODIA ロゴ（小） */}
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: "8px" }}>
          <span style={{ fontSize: 32, fontWeight: 900, color: "white",   fontFamily: "sans-serif", letterSpacing: "-1px" }}>NOD</span>
          <span style={{ fontSize: 32, fontWeight: 900, color: "#2D8B92", fontFamily: "sans-serif", letterSpacing: "-1px" }}>I</span>
          <span style={{ fontSize: 32, fontWeight: 900, color: "white",   fontFamily: "sans-serif", letterSpacing: "-1px" }}>A</span>
        </div>

        {/* 細い区切り線 */}
        <div style={{ width: "60px", height: "2px", backgroundColor: "rgba(255,255,255,0.2)", marginBottom: "20px", display: "flex" }} />

        {/* ランクグレード（大） */}
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            color: rank.color,
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          {rank.grade}
        </div>

        {/* スコア表示 */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "12px",
            marginTop: "8px",
          }}
        >
          <span style={{ fontSize: 52, fontWeight: 700, color: "white", fontFamily: "sans-serif" }}>
            {scoreNum}
          </span>
          <span style={{ fontSize: 28, color: "rgba(255,255,255,0.45)", fontFamily: "sans-serif" }}>
            / {TOTAL}
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: rank.color,
              fontFamily: "sans-serif",
              marginLeft: "4px",
            }}
          >
            ({pct}%)
          </span>
        </div>

        {/* ブランドタグ */}
        <div
          style={{
            marginTop: "32px",
            padding: "10px 28px",
            borderRadius: "40px",
            backgroundColor: "rgba(45,139,146,0.2)",
            border: "1px solid rgba(45,139,146,0.4)",
            display: "flex",
          }}
        >
          <span
            style={{
              color: "#A8D8DC",
              fontSize: "18px",
              letterSpacing: "3px",
              fontFamily: "sans-serif",
            }}
          >
            INTERVIEW NG CHECKER
          </span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );

  const buffer = await image.arrayBuffer();
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

import { ImageResponse } from "next/og";

export const runtime = "edge";

const RANK_INFO: Record<string, { grade: string; color: string }> = {
  grandmaster: { grade: "S", color: "#27AE60" },
  master:      { grade: "A", color: "#2D8B92" },
  path:        { grade: "B", color: "#E67E22" },
  step:        { grade: "C", color: "#E74C3C" },
  egg:         { grade: "D", color: "#C0392B" },
};

const TOTAL = 23;
// ロゴは本番URLを固定参照（プレビューデプロイでも安定してfetchできる）
const LOGO_URL = "https://interviewer-literacy-test.vercel.app/logo.png";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const rankId   = searchParams.get("rank")  ?? "egg";
  const scoreRaw = searchParams.get("score") ?? "0";

  const rank     = RANK_INFO[rankId] ?? RANK_INFO.egg;
  const scoreNum = Math.min(Math.max(parseInt(scoreRaw, 10) || 0, 0), TOTAL);
  const pct      = Math.round((scoreNum / TOTAL) * 100);

  // --- ロゴ画像あり版（本番URL fetch） ---
  try {
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
          {/* NODIAロゴ：白背景ボックス */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px 56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            {/* ロゴ 1201×408 → 440×149 に縮小 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} width={440} height={149} alt="NODIA" />
          </div>

          {/* ランクグレード */}
          <div
            style={{
              fontSize: "160px",
              fontWeight: 900,
              color: rank.color,
              fontFamily: "sans-serif",
              lineHeight: "1",
            }}
          >
            {rank.grade}
          </div>

          {/* スコア */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              marginTop: "8px",
            }}
          >
            <span
              style={{
                fontSize: "44px",
                fontWeight: 700,
                color: "#FFFFFF",
                fontFamily: "sans-serif",
              }}
            >
              {scoreNum}
            </span>
            <span
              style={{
                fontSize: "24px",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "sans-serif",
                marginLeft: "6px",
              }}
            >
              / {TOTAL}
            </span>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: rank.color,
                fontFamily: "sans-serif",
                marginLeft: "10px",
              }}
            >
              ({pct}%)
            </span>
          </div>

          {/* ブランドタグ */}
          <div
            style={{
              marginTop: "24px",
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
  } catch {
    // ロゴfetch失敗時はCSSテキスト版にフォールバック
    const fallback = new ImageResponse(
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
          {/* CSS版ロゴ（白背景ボックス） */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px 56px",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "20px",
            }}
          >
            <span style={{ fontSize: "72px", fontWeight: 900, color: "#2C3E50", fontFamily: "sans-serif", letterSpacing: "-2px" }}>NOD</span>
            <span style={{ fontSize: "72px", fontWeight: 900, color: "#2D8B92", fontFamily: "sans-serif", letterSpacing: "-2px" }}>I</span>
            <span style={{ fontSize: "72px", fontWeight: 900, color: "#2C3E50", fontFamily: "sans-serif", letterSpacing: "-2px" }}>A</span>
          </div>

          <div style={{ fontSize: "160px", fontWeight: 900, color: rank.color, fontFamily: "sans-serif", lineHeight: "1" }}>
            {rank.grade}
          </div>

          <div style={{ display: "flex", alignItems: "baseline", marginTop: "8px" }}>
            <span style={{ fontSize: "44px", fontWeight: 700, color: "#FFFFFF", fontFamily: "sans-serif" }}>{scoreNum}</span>
            <span style={{ fontSize: "24px", color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif", marginLeft: "6px" }}>/ {TOTAL}</span>
            <span style={{ fontSize: "24px", fontWeight: 700, color: rank.color, fontFamily: "sans-serif", marginLeft: "10px" }}>({pct}%)</span>
          </div>

          <div style={{ marginTop: "24px", padding: "10px 28px", borderRadius: "40px", backgroundColor: "rgba(45,139,146,0.2)", border: "1px solid rgba(45,139,146,0.4)", display: "flex" }}>
            <span style={{ color: "#A8D8DC", fontSize: "18px", letterSpacing: "3px", fontFamily: "sans-serif" }}>
              INTERVIEW NG CHECKER
            </span>
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );

    const buf = await fallback.arrayBuffer();
    return new Response(buf, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=60",
      },
    });
  }
}

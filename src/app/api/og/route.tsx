import { ImageResponse } from "next/og";

export const runtime = "edge";

// 本番URLを固定参照（プレビューデプロイでも安定してfetch可能）
const LOGO_URL = "https://interviewer-literacy-test.vercel.app/logo.png";

// 常に静的なOGP画像を返す（ランク・スコアは表示しない）
export async function GET() {
  // ロゴ画像あり版
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
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 装飾円（右上）― トップページヒーローと同じ */}
          <div
            style={{
              position: "absolute",
              top: "-130px",
              right: "-130px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              backgroundColor: "rgba(45,139,146,0.15)",
              display: "flex",
            }}
          />
          {/* 装飾円（左下） */}
          <div
            style={{
              position: "absolute",
              bottom: "-90px",
              left: "-90px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: "rgba(45,139,146,0.12)",
              display: "flex",
            }}
          />

          {/* NODIAロゴ：白背景ボックス */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "32px 72px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "48px",
            }}
          >
            {/* ロゴ 1201×408 → 440×149 に縮小 */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LOGO_URL} width={440} height={149} alt="NODIA" />
          </div>

          {/* ブランドタグ */}
          <div
            style={{
              padding: "14px 40px",
              borderRadius: "40px",
              backgroundColor: "rgba(45,139,146,0.22)",
              border: "1px solid rgba(45,139,146,0.45)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                color: "#A8D8DC",
                fontSize: "22px",
                fontWeight: 600,
                letterSpacing: "4px",
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
        "Cache-Control": "public, max-age=86400, s-maxage=86400, immutable",
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
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-130px",
              right: "-130px",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              backgroundColor: "rgba(45,139,146,0.15)",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-90px",
              left: "-90px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              backgroundColor: "rgba(45,139,146,0.12)",
              display: "flex",
            }}
          />

          <div
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "20px",
              padding: "32px 72px",
              display: "flex",
              alignItems: "baseline",
              marginBottom: "48px",
            }}
          >
            <span style={{ fontSize: "72px", fontWeight: 900, color: "#2C3E50", fontFamily: "sans-serif", letterSpacing: "-2px" }}>NOD</span>
            <span style={{ fontSize: "72px", fontWeight: 900, color: "#2D8B92", fontFamily: "sans-serif", letterSpacing: "-2px" }}>I</span>
            <span style={{ fontSize: "72px", fontWeight: 900, color: "#2C3E50", fontFamily: "sans-serif", letterSpacing: "-2px" }}>A</span>
          </div>

          <div
            style={{
              padding: "14px 40px",
              borderRadius: "40px",
              backgroundColor: "rgba(45,139,146,0.22)",
              border: "1px solid rgba(45,139,146,0.45)",
              display: "flex",
            }}
          >
            <span style={{ color: "#A8D8DC", fontSize: "22px", fontWeight: 600, letterSpacing: "4px", fontFamily: "sans-serif" }}>
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

import { ImageResponse } from "next/og";

export const runtime = "edge";

// 外部画像fetch不要・日本語フォント不要・CSS純粋実装
// → Satorがクラッシュする要因をゼロにする
export async function GET() {
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
        {/* NODIA ロゴ（CSS テキスト版） */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "white",
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
            }}
          >
            NOD
          </span>
          <span
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "#2D8B92",
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
            }}
          >
            I
          </span>
          <span
            style={{
              fontSize: 120,
              fontWeight: 900,
              color: "white",
              fontFamily: "sans-serif",
              letterSpacing: "-2px",
            }}
          >
            A
          </span>
        </div>

        {/* アクセントライン */}
        <div
          style={{
            width: "200px",
            height: "4px",
            backgroundColor: "#2D8B92",
            marginTop: "16px",
            display: "flex",
          }}
        />

        {/* プロダクト名 */}
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            padding: "14px 40px",
            borderRadius: "40px",
            backgroundColor: "rgba(45,139,146,0.2)",
            border: "1px solid rgba(45,139,146,0.4)",
          }}
        >
          <span
            style={{
              color: "#A8D8DC",
              fontSize: "24px",
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

  // Content-Type を明示的に image/png に設定（Facebook要件）
  const buffer = await image.arrayBuffer();
  return new Response(buffer, {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}

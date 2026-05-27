import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { origin } = new URL(request.url);
  // 同一オリジンからロゴを取得（base64埋め込みを避けてSatoriの互換性を確保）
  const logoUrl = `${origin}/logo.png`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "linear-gradient(135deg, #1a2a3a 0%, #2C3E50 60%, #1f3a4a 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* 装飾円（左下） */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(45,139,146,0.12)",
            display: "flex",
          }}
        />
        {/* 装飾円（右上） */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "360px",
            height: "360px",
            borderRadius: "50%",
            background: "rgba(45,139,146,0.12)",
            display: "flex",
          }}
        />

        {/* NODIAロゴ（1201x408px → 480x163pxに縮小） */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          width={480}
          height={163}
          alt="NODIA"
        />

        {/* アクセントライン */}
        <div
          style={{
            marginTop: "36px",
            width: "160px",
            height: "3px",
            background: "#2D8B92",
            borderRadius: "2px",
            display: "flex",
          }}
        />

        {/* ブランドタグ */}
        <div
          style={{
            marginTop: "24px",
            background: "rgba(45,139,146,0.20)",
            border: "1px solid rgba(45,139,146,0.45)",
            borderRadius: "999px",
            padding: "10px 32px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#2D8B92",
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#A8D8DC",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              fontFamily: "sans-serif",
            }}
          >
            INTERVIEW NG CHECKER
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

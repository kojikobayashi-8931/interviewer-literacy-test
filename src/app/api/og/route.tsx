import { ImageResponse } from "next/og";

export const runtime = "edge";

// logo.png は実体がJPEGファイル（拡張子のみ.png）
// SatoriはContent-Typeを見てデコードするため、fetchして正しいMIMEタイプのdata URLを構築する
const LOGO_URL = "https://interviewer-literacy-test.vercel.app/logo.png";

async function fetchLogoAsDataUrl(): Promise<string | null> {
  try {
    const res = await fetch(LOGO_URL);
    if (!res.ok) return null;
    const buffer = await res.arrayBuffer();
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    // 拡張子はpngだが中身はJPEG → image/jpeg で正しくデコードされる
    return `data:image/jpeg;base64,${btoa(binary)}`;
  } catch {
    return null;
  }
}

export async function GET() {
  const logoDataUrl = await fetchLogoAsDataUrl();

  // ─── ロゴ画像あり版 ──────────────────────────────────────
  if (logoDataUrl) {
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
              {/* ロゴ 1201×408 → 440×149 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logoDataUrl} width={440} height={149} alt="NODIA" />
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
      // ロゴdata URLのSatoriレンダリングに失敗 → CSSテキスト版へフォールバック
    }
  }

  // ─── CSSテキスト版（ロゴfetch失敗 or Satoriレンダリング失敗時） ──
  try {
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

          {/* CSS版ロゴ（白背景ボックス） */}
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
            <span style={{ fontSize: "80px", fontWeight: 900, color: "#2C3E50", fontFamily: "sans-serif", letterSpacing: "-3px" }}>NOD</span>
            <span style={{ fontSize: "80px", fontWeight: 900, color: "#2D8B92", fontFamily: "sans-serif", letterSpacing: "-3px" }}>I</span>
            <span style={{ fontSize: "80px", fontWeight: 900, color: "#2C3E50", fontFamily: "sans-serif", letterSpacing: "-3px" }}>A</span>
          </div>

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
        "Cache-Control": "public, max-age=86400, s-maxage=86400",
      },
    });
  } catch {
    return new Response("OG image generation failed", { status: 500 });
  }
}

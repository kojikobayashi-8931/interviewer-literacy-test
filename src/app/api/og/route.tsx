import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

// Node.js runtimeを使用（edge runtimeより安定）
// export const runtime = "edge"; // 意図的にコメントアウト

// Noto Sans JPのサブセットをGoogle Fontsから取得
async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const response = await fetch(
      "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap&subset=japanese",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    );
    const css = await response.text();
    const match = css.match(/src: url\((.+?)\) format\('woff2'\)/);
    if (!match) return null;
    const fontRes = await fetch(match[1]);
    return fontRes.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const rankId = url.searchParams.get("rank") ?? "egg";
    const score = parseInt(url.searchParams.get("score") ?? "0", 10);
    const name = url.searchParams.get("name") ?? "";

    const rank =
      RANK_THRESHOLDS.find((r) => r.id === rankId) ??
      RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

    const total = 23;
    const rate = total > 0 ? Math.round((score / total) * 1000) / 10 : 0;

    // フォント読み込み（失敗しても続行）
    const fontData = await loadFont();
    const fonts = fontData
      ? [
          {
            name: "NotoSansJP",
            data: fontData,
            weight: 700 as const,
            style: "normal" as const,
          },
        ]
      : [];
    const ff = fontData ? "NotoSansJP, sans-serif" : "sans-serif";

    // リスクカラーは8桁hexを使わず直接指定
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
            <span
              style={{
                color: riskColor,
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              {`面接炎上リスク：${rank.riskLevel}`}
            </span>
          </div>

          {/* ユーザー名（あれば表示） */}
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

          {/* ランクアイコン：グレード文字を大きな円で表示 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: riskColor,
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "60px",
                fontWeight: 700,
                lineHeight: "1",
              }}
            >
              {rank.grade}
            </span>
          </div>

          {/* ランク称号 */}
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: "44px",
              fontWeight: 700,
              marginBottom: "18px",
              textAlign: "center",
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
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "28px",
                fontWeight: 700,
              }}
            >
              {`${score} / ${total}問正解`}
            </span>
            <span
              style={{
                color: "#A8D8DC",
                fontSize: "28px",
              }}
            >
              |
            </span>
            <span
              style={{
                color: riskColor,
                fontSize: "32px",
                fontWeight: 700,
              }}
            >
              {`${rate}%`}
            </span>
          </div>

          {/* タグライン */}
          <div
            style={{
              display: "flex",
              color: "#A8D8DC",
              fontSize: "18px",
            }}
          >
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
  } catch (err) {
    // エラー時は500でエラー内容を返す（デバッグ用）
    return new Response(
      JSON.stringify({ error: String(err) }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

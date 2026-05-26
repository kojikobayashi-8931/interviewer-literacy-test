import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

// Google FontsからNoto Sans JP（日本語対応）を取得
async function loadJapaneseFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700&display=swap",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      }
    ).then((r) => r.text());

    // woff2 URLを正規表現で抽出
    const match = css.match(/src: url\((.+?)\) format\('woff2'\)/);
    if (!match) return null;

    return fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
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
  const rate = total > 0 ? Math.round((score / total) * 1000) / 10 : 0;

  // 日本語フォントを読み込む
  const fontData = await loadJapaneseFont();

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

  const fontFamily = fontData ? "NotoSansJP, sans-serif" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2C3E50",
          fontFamily,
          padding: "56px 80px",
          gap: "0px",
          position: "relative",
        }}
      >
        {/* 背景装飾（右上） */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            backgroundColor: "#2D8B92",
            opacity: 0.08,
          }}
        />
        {/* 背景装飾（左下） */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            backgroundColor: "#2D8B92",
            opacity: 0.08,
          }}
        />

        {/* サービス名バッジ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: "rgba(45, 139, 146, 0.15)",
            border: "1px solid rgba(168, 216, 220, 0.4)",
            borderRadius: "999px",
            padding: "7px 20px",
            marginBottom: "22px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#2D8B92",
            }}
          />
          <span
            style={{
              color: "#A8D8DC",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            面接NG発言チェッカー | NODIA
          </span>
        </div>

        {/* 炎上リスクバッジ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            border: `2px solid ${rank.riskColor}`,
            borderRadius: "999px",
            padding: "9px 24px",
            marginBottom: "28px",
            backgroundColor: `${rank.riskColor}18`,
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: rank.riskColor,
            }}
          />
          <span
            style={{
              color: rank.riskColor,
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            面接炎上リスク：{rank.riskLevel}
          </span>
        </div>

        {/* ユーザー名 */}
        {name !== "" && (
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "18px",
              opacity: 0.8,
            }}
          >
            {name}さんの診断結果
          </div>
        )}

        {/* ランクアイコン（グレードレターを大きな円で表示） */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: rank.riskColor,
            border: "4px solid rgba(255,255,255,0.15)",
            marginBottom: "18px",
            boxShadow: `0 0 40px ${rank.riskColor}60`,
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {rank.grade}
          </span>
        </div>

        {/* ランク称号 */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "44px",
            fontWeight: 700,
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          {rank.label}
        </div>

        {/* スコア・正答率 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "26px",
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              fontWeight: 700,
              opacity: 0.85,
            }}
          >
            {score} / {total}問正解
          </span>
          <span style={{ color: "#A8D8DC", fontSize: "28px", opacity: 0.6 }}>
            |
          </span>
          <span
            style={{
              color: rank.riskColor,
              fontSize: "32px",
              fontWeight: 700,
            }}
          >
            {rate}%
          </span>
        </div>

        {/* タグライン */}
        <div
          style={{
            color: "#A8D8DC",
            fontSize: "18px",
            opacity: 0.6,
            fontWeight: 700,
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
}

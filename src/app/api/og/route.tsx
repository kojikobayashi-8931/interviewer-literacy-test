import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

const GRADE_COLORS: Record<string, string> = {
  S: "#FFD700",
  A: "#2D8B92",
  B: "#3498DB",
  C: "#E67E22",
  D: "#95A5A6",
};

const RANK_ICON_FILES: Record<string, string> = {
  grandmaster: "lv5_grandmaster.svg",
  master: "lv4_master.svg",
  path: "lv3_path.svg",
  step: "lv2_step.svg",
  egg: "lv1_egg.svg",
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const searchParams = url.searchParams;
  const rankId = searchParams.get("rank") ?? "egg";
  const score = parseInt(searchParams.get("score") ?? "0", 10);
  const name = searchParams.get("name") ?? "";

  // rankId で直接段位を取得
  const rank =
    RANK_THRESHOLDS.find((r) => r.id === rankId) ??
    RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

  const gradeColor = GRADE_COLORS[rank.grade] ?? "#95A5A6";

  // SVGアイコンをData URIとして取得
  let iconDataUri = "";
  try {
    const iconFileName = RANK_ICON_FILES[rankId] ?? "lv1_egg.svg";
    // originをホストヘッダーから確実に取得
    const host = req.headers.get("host") ?? url.host;
    const proto = req.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
    const fetchBase = `${proto}://${host}`;

    const iconRes = await fetch(`${fetchBase}/ranks/${iconFileName}`, {
      cache: "force-cache",
    });
    if (iconRes.ok) {
      const svgText = await iconRes.text();
      iconDataUri = `data:image/svg+xml,${encodeURIComponent(svgText)}`;
    }
  } catch {
    // フォールバック: グレードバッジを表示
  }

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
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* サービス名 */}
        <div
          style={{
            color: "#A8D8DC",
            fontSize: "22px",
            fontWeight: "600",
            marginBottom: "20px",
            letterSpacing: "2px",
          }}
        >
          面接NG発言チェッカー | NODIA
        </div>

        {/* ユーザー名 */}
        {name !== "" && (
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              marginBottom: "16px",
            }}
          >
            {name}さんの診断結果
          </div>
        )}

        {/* ランクアイコン or グレードバッジ */}
        {iconDataUri !== "" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconDataUri}
            width="180"
            height="180"
            alt={rank.label}
            style={{ marginBottom: "16px" }}
          />
        ) : (
          <div
            style={{
              width: "140px",
              height: "140px",
              borderRadius: "70px",
              backgroundColor: gradeColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
              fontWeight: "900",
              color: "#FFFFFF",
              marginBottom: "16px",
            }}
          >
            {rank.grade}
          </div>
        )}

        {/* 段位ラベル */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            color: gradeColor,
            fontSize: "52px",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          <span>{rank.label}</span>
          <span style={{ fontSize: "32px", marginLeft: "12px", opacity: 0.85 }}>
            （{rank.grade}）
          </span>
        </div>

        {/* スコア */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "30px",
            marginBottom: "28px",
            opacity: 0.85,
          }}
        >
          {score} / 23問正解
        </div>

        {/* タグライン */}
        <div
          style={{
            color: "#A8D8DC",
            fontSize: "18px",
            opacity: 0.65,
          }}
        >
          あなたも診断してみよう →
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

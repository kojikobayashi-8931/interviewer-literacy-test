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
  const { searchParams, origin } = new URL(req.url);
  const rankId = searchParams.get("rank") ?? "egg";
  const score = parseInt(searchParams.get("score") ?? "0", 10);
  const name = searchParams.get("name") ?? "";

  // rankId で直接段位を取得（score の再計算を避ける）
  const rank =
    RANK_THRESHOLDS.find((r) => r.id === rankId) ??
    RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

  const gradeColor = GRADE_COLORS[rank.grade] ?? "#95A5A6";

  // SVGアイコンを取得してData URIに変換
  let iconDataUri = "";
  try {
    const iconFileName = RANK_ICON_FILES[rankId] ?? "lv1_egg.svg";
    const iconRes = await fetch(`${origin}/ranks/${iconFileName}`);
    if (iconRes.ok) {
      const svgText = await iconRes.text();
      iconDataUri = `data:image/svg+xml,${encodeURIComponent(svgText)}`;
    }
  } catch {
    // SVG取得失敗時はグレードテキストで代替
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
          gap: "0px",
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
        {name && (
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "28px",
              marginBottom: "16px",
              opacity: 0.9,
            }}
          >
            {name}さんの診断結果
          </div>
        )}

        {/* SVGアイコン or グレードバッジ */}
        {iconDataUri ? (
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
              borderRadius: "50%",
              backgroundColor: gradeColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "80px",
              fontWeight: "900",
              color: "#FFFFFF",
              marginBottom: "16px",
              boxShadow: `0 0 40px ${gradeColor}80`,
            }}
          >
            {rank.grade}
          </div>
        )}

        {/* 段位ラベル */}
        <div
          style={{
            color: gradeColor,
            fontSize: "52px",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          {rank.label}
          <span style={{ fontSize: "36px", marginLeft: "12px", opacity: 0.8 }}>
            （{rank.grade}）
          </span>
        </div>

        {/* スコア */}
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "32px",
            marginBottom: "24px",
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
            opacity: 0.7,
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

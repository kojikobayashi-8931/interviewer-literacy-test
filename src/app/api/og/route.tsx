import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";

export const runtime = "edge";

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

  const rank =
    RANK_THRESHOLDS.find((r) => r.id === rankId) ??
    RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];

  const total = 23;
  const rate = total > 0 ? Math.round((score / total) * 1000) / 10 : 0;

  // SVGアイコンを取得
  let iconDataUri = "";
  try {
    const iconFileName = RANK_ICON_FILES[rankId] ?? "lv1_egg.svg";
    const host = req.headers.get("host") ?? url.host;
    const proto = req.headers.get("x-forwarded-proto") ?? url.protocol.replace(":", "");
    const iconRes = await fetch(`${proto}://${host}/ranks/${iconFileName}`, {
      cache: "force-cache",
    });
    if (iconRes.ok) {
      const svgText = await iconRes.text();
      iconDataUri = `data:image/svg+xml,${encodeURIComponent(svgText)}`;
    }
  } catch {
    // フォールバック
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
          gap: "0",
        }}
      >
        {/* サービス名 */}
        <div style={{ color: "#A8D8DC", fontSize: "20px", fontWeight: "600", marginBottom: "18px", letterSpacing: "2px" }}>
          面接NG発言チェッカー | NODIA
        </div>

        {/* 炎上リスクバッジ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            backgroundColor: `${rank.riskColor}22`,
            border: `2px solid ${rank.riskColor}`,
            borderRadius: "999px",
            padding: "8px 20px",
            marginBottom: "20px",
          }}
        >
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: rank.riskColor }} />
          <span style={{ color: rank.riskColor, fontSize: "22px", fontWeight: "700" }}>
            面接炎上リスク：{rank.riskLevel}
          </span>
        </div>

        {/* ユーザー名 */}
        {name !== "" && (
          <div style={{ color: "#FFFFFF", fontSize: "24px", marginBottom: "14px", opacity: 0.85 }}>
            {name}さんの診断結果
          </div>
        )}

        {/* ランクアイコン or フォールバックバッジ */}
        {iconDataUri !== "" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={iconDataUri}
            width="140"
            height="140"
            alt={rank.label}
            style={{ marginBottom: "14px" }}
          />
        ) : (
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "55px",
              backgroundColor: rank.riskColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "60px",
              fontWeight: "900",
              color: "#FFFFFF",
              marginBottom: "14px",
            }}
          >
            {rank.grade}
          </div>
        )}

        {/* 称号 */}
        <div style={{ color: "#FFFFFF", fontSize: "48px", fontWeight: "900", marginBottom: "10px" }}>
          {rank.label}
        </div>

        {/* スコア・正答率 */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px", color: "#FFFFFF", fontSize: "26px", opacity: 0.8, marginBottom: "24px" }}>
          <span>{score} / {total}問正解</span>
          <span style={{ color: "#A8D8DC" }}>|</span>
          <span style={{ color: rank.riskColor, fontWeight: "700" }}>{rate}%</span>
        </div>

        {/* タグライン */}
        <div style={{ color: "#A8D8DC", fontSize: "17px", opacity: 0.65 }}>
          あなたも炎上リスクを診断してみよう →
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

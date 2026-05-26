import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// ランクデータをインライン定義（インポートチェーンを排除）
const RANKS = [
  { id: "grandmaster", grade: "S", label: "Sai-Ko-Sui-Jun", riskLevel: "Hikume", riskColor: "#27AE60", minScore: 22, maxScore: 23 },
  { id: "master",      grade: "A", label: "Jo-I-Sui-Jun",   riskLevel: "Yaya-Hikume", riskColor: "#2D8B92", minScore: 20, maxScore: 21 },
  { id: "path",        grade: "B", label: "Hyo-Jun-Sui-Jun", riskLevel: "Futsu",      riskColor: "#E67E22", minScore: 16, maxScore: 19 },
  { id: "step",        grade: "C", label: "Yo-Kyo-Ka",      riskLevel: "Yaya-Takame", riskColor: "#E74C3C", minScore: 11, maxScore: 15 },
  { id: "egg",         grade: "D", label: "Yo-Ken-Shu",     riskLevel: "Takame",      riskColor: "#C0392B", minScore: 0,  maxScore: 10 },
];

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const rankId = url.searchParams.get("rank") ?? "egg";
  const score = parseInt(url.searchParams.get("score") ?? "0", 10);

  const rank = RANKS.find((r) => r.id === rankId) ?? RANKS[RANKS.length - 1];
  const total = 23;
  const rate = Math.round((score / total) * 1000) / 10;

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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "120px",
            height: "120px",
            borderRadius: "60px",
            backgroundColor: rank.riskColor,
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#fff", fontSize: "64px", fontWeight: 700 }}>
            {rank.grade}
          </span>
        </div>
        <div style={{ color: "#fff", fontSize: "40px", fontWeight: 700, marginBottom: "16px" }}>
          {rank.label}
        </div>
        <div style={{ color: rank.riskColor, fontSize: "28px", fontWeight: 700 }}>
          {score} / {total} ({rate}%)
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

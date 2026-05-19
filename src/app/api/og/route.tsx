import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { getRank } from "@/src/lib/scoring";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const rankId = searchParams.get("rank") ?? "egg";
  const score = parseInt(searchParams.get("score") ?? "0", 10);
  const name = searchParams.get("name") ?? "";

  const rank = getRank(score);

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
        <div
          style={{
            color: "#A8D8DC",
            fontSize: "24px",
            marginBottom: "16px",
            fontWeight: "600",
          }}
        >
          面接NG発言チェッカー | NODIA
        </div>
        {name && (
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "32px",
              marginBottom: "24px",
            }}
          >
            {name}さんの診断結果
          </div>
        )}
        <div
          style={{
            color: "#2D8B92",
            fontSize: "64px",
            fontWeight: "bold",
            marginBottom: "8px",
          }}
        >
          {rank.label}（{rank.grade}）
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "36px",
            marginBottom: "40px",
          }}
        >
          {score}/23問正解
        </div>
        <div
          style={{
            color: "#A8D8DC",
            fontSize: "20px",
          }}
        >
          あなたも診断してみよう
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

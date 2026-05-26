import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  // デバッグモード: ?debug=1 で環境変数を確認
  if (url.searchParams.get("debug") === "1") {
    return new Response(
      JSON.stringify({
        NEXT_RUNTIME: process.env.NEXT_RUNTIME,
        NODE_ENV: process.env.NODE_ENV,
        ok: true,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  }

  // 最小テスト
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "red",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ color: "white", fontSize: "80px" }}>TEST OK</span>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

import { NextRequest, NextResponse } from "next/server";
import { submitLeadApiSchema } from "@/src/lib/validations";
import { appendLeadToSheet } from "@/src/lib/sheets";

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = submitLeadApiSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 422 }
    );
  }

  try {
    await appendLeadToSheet(parsed.data);
  } catch (err) {
    console.error("[submit-lead] Sheets write error:", err);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}

import type { SubmitLeadPayload } from "@/src/types/lead";

export async function appendLeadToSheet(payload: SubmitLeadPayload): Promise<void> {
  const gasUrl = process.env.GOOGLE_APPS_SCRIPT_URL;
  const secretToken = process.env.GOOGLE_APPS_SCRIPT_TOKEN;

  if (!gasUrl || !secretToken) {
    throw new Error("GAS environment variables are not configured");
  }

  const timestamp = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const body = {
    token: secretToken,
    timestamp,
    lastName: payload.lead.lastName,
    firstName: payload.lead.firstName,
    email: payload.lead.email,
    company: payload.lead.company,
    occupationLabel: payload.lead.occupationLabel,
    occupationId: payload.lead.occupationId,
    rankId: payload.rankId,
    rankLabel: payload.rankLabel,
    correctCount: payload.correctCount,
    totalQuestions: payload.totalQuestions,
    correctRate: payload.correctRate,
    categoryScores: payload.categoryScores,
    userAgent: payload.userAgent,
  };

  const res = await fetch(gasUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`GAS request failed: ${res.status}`);
  }
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/Button";
import { OccupationSelector } from "@/src/components/test/OccupationSelector";
import type { UserAnswer } from "@/src/types/quiz";
import type { LeadFormData } from "@/src/types/lead";
import { getRank, calcCategoryScores } from "@/src/lib/scoring";
import questionsData from "@/src/data/questions.json";

type LeadFormProps = {
  answers: UserAnswer[];
};

export function LeadForm({ answers }: LeadFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<Omit<LeadFormData, "occupationLabel" | "occupationId" | "privacyPolicyAgreed">>({
    lastName: "",
    firstName: "",
    company: "",
    email: "",
  });
  const [occupation, setOccupation] = useState<{ label: string; id: string }>({
    label: "",
    id: "",
  });
  const [privacyPolicyAgreed, setPrivacyPolicyAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isValid =
    form.lastName.trim() &&
    form.firstName.trim() &&
    form.company.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
    occupation.label.trim() &&
    privacyPolicyAgreed;

  const handleSubmit = async () => {
    if (!isValid || submitting) return;
    setSubmitting(true);
    setError(null);

    const correctCount = answers.filter((a) => a.isCorrect).length;
    const totalQuestions = questionsData.totalQuestions;
    const correctRate = Math.round((correctCount / totalQuestions) * 1000) / 10;
    const rank = getRank(correctCount);
    const categoryScores = calcCategoryScores(answers, questionsData.categories as any);
    const catScoreMap: Record<string, number> = {};
    for (const cs of categoryScores) {
      catScoreMap[cs.categoryId] = cs.rate;
    }

    const payload = {
      lead: {
        ...form,
        occupationLabel: occupation.label,
        occupationId: occupation.id,
        privacyPolicyAgreed: true,
      },
      rankId: rank.id,
      rankLabel: `${rank.label}（${rank.grade}）`,
      correctCount,
      totalQuestions,
      correctRate,
      categoryScores: catScoreMap,
      userAgent: navigator.userAgent,
    };

    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json();
        console.error("Lead submission failed:", data);
      }
    } catch (err) {
      console.error("Lead submission error:", err);
    }

    const params = new URLSearchParams({
      correct: String(correctCount),
      total: String(totalQuestions),
      rank: rank.id,
      name: `${form.lastName} ${form.firstName}`,
    });
    router.push(`/result?${params.toString()}`);
  };

  const inputClass =
    "w-full border-2 border-border rounded-lg px-4 py-3 text-text font-body text-sm focus:outline-none focus:border-accent bg-base";

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-body font-medium text-main mb-1">
            姓 <span className="text-incorrect">*</span>
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm((f) => ({ ...f, lastName: e.target.value }))}
            placeholder="山田"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-sm font-body font-medium text-main mb-1">
            名 <span className="text-incorrect">*</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm((f) => ({ ...f, firstName: e.target.value }))}
            placeholder="太郎"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-main mb-1">
          所属企業名 <span className="text-incorrect">*</span>
        </label>
        <input
          type="text"
          value={form.company}
          onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
          placeholder="株式会社〇〇"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-main mb-1">
          メールアドレス <span className="text-incorrect">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          placeholder="yamada@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label className="block text-sm font-body font-medium text-main mb-2">
          現在の職種 <span className="text-incorrect">*</span>
        </label>
        <OccupationSelector value={occupation} onChange={setOccupation} />
      </div>

      <div className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-border">
        <input
          type="checkbox"
          id="privacy"
          checked={privacyPolicyAgreed}
          onChange={(e) => setPrivacyPolicyAgreed(e.target.checked)}
          className="mt-0.5 accent-accent shrink-0"
        />
        <label htmlFor="privacy" className="text-sm font-body text-text leading-relaxed">
          <a
            href="https://nodia.co.jp/privacy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline hover:opacity-80"
          >
            プライバシーポリシー
          </a>
          に同意する <span className="text-incorrect">*</span>
        </label>
      </div>

      {error && (
        <p className="text-incorrect text-sm font-body">{error}</p>
      )}

      <Button
        onClick={handleSubmit}
        disabled={!isValid || submitting}
        size="lg"
        className="w-full"
      >
        {submitting ? "判定中..." : "判定する"}
      </Button>
    </div>
  );
}

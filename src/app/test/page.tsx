"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@/src/components/ui/ProgressBar";
import { QuestionCard } from "@/src/components/test/QuestionCard";
import { LeadForm } from "@/src/components/form/LeadForm";
import { useTestStore } from "@/src/store/testStore";
import questionsData from "@/src/data/questions.json";
import type { Question, Category } from "@/src/types/quiz";

const allQuestions: Array<{ question: Question; categoryName: string }> = [];
for (const cat of questionsData.categories as Category[]) {
  for (const q of cat.questions) {
    allQuestions.push({ question: q, categoryName: cat.name });
  }
}

type Phase = "test" | "form";

export default function TestPage() {
  const [phase, setPhase] = useState<Phase>("test");
  const [currentIndex, setCurrentIndex] = useState(0);
  const { answers, addAnswer, resetAnswers } = useTestStore();
  const router = useRouter();

  const handleAnswer = (selectedId: string) => {
    const { question } = allQuestions[currentIndex];
    const isCorrect = selectedId === question.correctId;
    addAnswer({ questionId: question.id, selectedId, isCorrect });

    if (currentIndex + 1 < allQuestions.length) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase("form");
    }
  };

  if (phase === "form") {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-main mb-2">
            お疲れ様でした！
          </h2>
          <p className="text-text font-body">
            全 {allQuestions.length} 問が完了しました。結果を確認するために情報を入力してください。
          </p>
        </div>
        <div className="bg-base rounded-2xl shadow-md p-6 md:p-8">
          <h3 className="font-display text-xl font-bold text-main mb-6">
            基本情報の入力
          </h3>
          <LeadForm answers={answers} />
        </div>
      </div>
    );
  }

  const current = allQuestions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="mb-6">
        <ProgressBar current={currentIndex + 1} total={allQuestions.length} />
      </div>
      <QuestionCard
        question={current.question}
        categoryName={current.categoryName}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

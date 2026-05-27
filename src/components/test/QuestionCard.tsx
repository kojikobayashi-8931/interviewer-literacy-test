"use client";

import { useState } from "react";
import type { Question } from "@/src/types/quiz";

type QuestionCardProps = {
  question: Question;
  categoryName: string;
  onAnswer: (selectedId: string) => void;
};

export function QuestionCard({ question, categoryName, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (choiceId: string) => {
    if (selected) return; // 連打防止
    setSelected(choiceId);
    // 選択したことが視覚的にわかるよう少し待ってから自動遷移
    setTimeout(() => {
      onAnswer(choiceId);
      setSelected(null);
    }, 500);
  };

  return (
    <div className="bg-base rounded-2xl shadow-md p-6 md:p-8">
      <div className="mb-4">
        <span className="inline-block bg-accent-light text-main text-xs font-body font-semibold px-3 py-1 rounded-full">
          {categoryName}
        </span>
      </div>
      <p className="text-main font-body text-lg md:text-xl font-semibold mb-6 leading-relaxed">
        {question.text}
      </p>
      <div className="space-y-3">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice.id)}
            disabled={!!selected}
            className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all duration-200 ${
              selected === choice.id
                ? "border-accent bg-accent-light bg-opacity-30"
                : "border-border bg-surface hover:border-accent-light"
            } ${selected && selected !== choice.id ? "opacity-50" : ""}`}
          >
            <span className="text-text font-body text-sm leading-relaxed">
              {choice.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

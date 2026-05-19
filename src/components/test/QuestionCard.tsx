"use client";

import { useState } from "react";
import type { Question } from "@/src/types/quiz";
import { Button } from "@/src/components/ui/Button";

type QuestionCardProps = {
  question: Question;
  categoryName: string;
  onAnswer: (selectedId: string) => void;
};

export function QuestionCard({ question, categoryName, onAnswer }: QuestionCardProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (!selected) return;
    onAnswer(selected);
    setSelected(null);
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
      <div className="space-y-3 mb-8">
        {question.choices.map((choice) => (
          <label
            key={choice.id}
            className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              selected === choice.id
                ? "border-accent bg-accent-light bg-opacity-30"
                : "border-border bg-surface hover:border-accent-light"
            }`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={choice.id}
              checked={selected === choice.id}
              onChange={() => setSelected(choice.id)}
              className="mt-0.5 accent-accent shrink-0"
            />
            <span className="text-text font-body text-base leading-relaxed">
              {choice.text}
            </span>
          </label>
        ))}
      </div>
      <div className="flex justify-end">
        <Button
          onClick={handleNext}
          disabled={!selected}
          size="md"
        >
          次の問題へ →
        </Button>
      </div>
    </div>
  );
}

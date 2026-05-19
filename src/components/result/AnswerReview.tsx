"use client";

import { useState } from "react";
import type { Question, Category, UserAnswer } from "@/src/types/quiz";

type AnswerReviewProps = {
  categories: Category[];
  answers: UserAnswer[];
};

type ReviewItem = {
  question: Question;
  categoryName: string;
  answer: UserAnswer;
};

export function AnswerReview({ categories, answers }: AnswerReviewProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const items: ReviewItem[] = [];
  for (const cat of categories) {
    for (const q of cat.questions) {
      const answer = answers.find((a) => a.questionId === q.id);
      if (answer) {
        items.push({ question: q, categoryName: cat.name, answer });
      }
    }
  }

  return (
    <div>
      <h3 className="font-display text-xl font-bold text-main mb-4">全問 正誤・解説</h3>
      <div className="space-y-3">
        {items.map((item, idx) => {
          const isOpen = openId === item.question.id;
          const selected = item.question.choices.find(
            (c) => c.id === item.answer.selectedId
          );
          const correct = item.question.choices.find(
            (c) => c.id === item.question.correctId
          );

          return (
            <div
              key={item.question.id}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : item.question.id)}
                className="w-full flex items-center gap-3 p-4 text-left hover:bg-surface transition-colors"
              >
                <span
                  className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${
                    item.answer.isCorrect ? "bg-correct" : "bg-incorrect"
                  }`}
                >
                  {item.answer.isCorrect ? "○" : "×"}
                </span>
                <span className="text-xs text-text font-body mr-2 shrink-0">
                  Q{idx + 1}
                </span>
                <span className="text-text font-body text-sm leading-snug flex-1">
                  {item.question.text}
                </span>
                <span className="text-accent text-xs shrink-0 ml-2">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 space-y-3 bg-surface border-t border-border">
                  <div className="pt-3 space-y-2">
                    {item.question.choices.map((choice) => {
                      const isSelected = choice.id === item.answer.selectedId;
                      const isCorrect = choice.id === item.question.correctId;
                      return (
                        <div
                          key={choice.id}
                          className={`flex items-start gap-2 p-2 rounded-lg text-sm font-body ${
                            isCorrect
                              ? "bg-correct bg-opacity-10 text-correct font-semibold"
                              : isSelected && !isCorrect
                              ? "bg-incorrect bg-opacity-10 text-incorrect"
                              : "text-text"
                          }`}
                        >
                          <span className="shrink-0 font-bold">{choice.id.toUpperCase()}.</span>
                          <span>{choice.text}</span>
                          {isCorrect && (
                            <span className="ml-auto shrink-0 text-xs bg-correct text-white px-1.5 py-0.5 rounded">
                              正解
                            </span>
                          )}
                          {isSelected && !isCorrect && (
                            <span className="ml-auto shrink-0 text-xs bg-incorrect text-white px-1.5 py-0.5 rounded">
                              あなたの回答
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  <div className="bg-base border border-border rounded-lg p-3">
                    <p className="text-xs font-body font-semibold text-main mb-1">解説</p>
                    <p className="text-text font-body text-sm leading-relaxed">
                      {item.question.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

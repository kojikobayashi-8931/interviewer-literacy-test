"use client";

import { create } from "zustand";
import type { UserAnswer } from "@/src/types/quiz";

type TestStore = {
  answers: UserAnswer[];
  addAnswer: (answer: UserAnswer) => void;
  resetAnswers: () => void;
};

export const useTestStore = create<TestStore>((set) => ({
  answers: [],
  addAnswer: (answer) =>
    set((state) => ({
      answers: [...state.answers, answer],
    })),
  resetAnswers: () => set({ answers: [] }),
}));

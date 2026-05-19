export type Choice = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  difficulty: "basic" | "intermediate" | "advanced";
  text: string;
  choices: Choice[];
  correctId: string;
  explanation: string;
};

export type Category = {
  id: string;
  name: string;
  questions: Question[];
};

export type QuizData = {
  version: string;
  totalQuestions: number;
  categories: Category[];
};

export type UserAnswer = {
  questionId: string;
  selectedId: string;
  isCorrect: boolean;
};

export type RankGrade = "S" | "A" | "B" | "C" | "D";

export type RankId =
  | "grandmaster"
  | "master"
  | "path"
  | "step"
  | "egg";

export type Rank = {
  grade: RankGrade;
  id: RankId;
  label: string;
  message: string;
  iconPath: string;
  minScore: number;
  maxScore: number;
};

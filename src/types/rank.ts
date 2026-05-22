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
  label: string;      // 称号（例：面接セーフティ職人）
  riskLevel: string;  // 炎上リスクレベル（例：低め）
  riskColor: string;  // リスクレベルの表示色
  message: string;
  iconPath: string;
  minScore: number;
  maxScore: number;
};

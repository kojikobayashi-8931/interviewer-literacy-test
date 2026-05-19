import type { Rank, RankGrade, RankId } from "@/src/types/rank";
import type { UserAnswer, Category } from "@/src/types/quiz";

export const RANK_THRESHOLDS: Rank[] = [
  {
    grade: "S",
    id: "grandmaster",
    label: "エキスパート",
    message:
      "面接官として最高レベルの知識を持っています。社内の面接品質向上のリーダーとして活躍が期待されます。",
    iconPath: "/ranks/lv5_grandmaster.svg",
    minScore: 22,
    maxScore: 23,
  },
  {
    grade: "A",
    id: "master",
    label: "上級レベル",
    message:
      "面接官として高い知識・リテラシーを持っています。後輩面接官へのフィードバックや振り返りにも積極的に関わってください。",
    iconPath: "/ranks/lv4_master.svg",
    minScore: 20,
    maxScore: 21,
  },
  {
    grade: "B",
    id: "path",
    label: "標準レベル",
    message:
      "面接官として必要な知識の大部分を理解しています。苦手な分野の解説を振り返り、実践でも意識して面接に臨みましょう。",
    iconPath: "/ranks/lv3_path.svg",
    minScore: 16,
    maxScore: 19,
  },
  {
    grade: "C",
    id: "step",
    label: "基礎レベル",
    message:
      "基本的な知識は身についていますが、法的リスクや確約まがい発言についてはさらなる理解が必要です。研修を通じて知識を補強しましょう。",
    iconPath: "/ranks/lv2_step.svg",
    minScore: 11,
    maxScore: 15,
  },
  {
    grade: "D",
    id: "egg",
    label: "要研修",
    message:
      "面接官として必要な基礎知識に大きな課題があります。特に法的NGな質問・確約まがい発言については今すぐ研修を受けてください。面接実施前に必ずトレーニングへの参加をお願いします。",
    iconPath: "/ranks/lv1_egg.svg",
    minScore: 0,
    maxScore: 10,
  },
];

export const CATEGORY_FEEDBACK: Record<string, string> = {
  casual_vs_formal:
    "カジュアル面談と面接の違いについて理解が不十分です。カジュアル面談は選考ではないため、評価的な言動や確約まがい発言は特に注意が必要です。",
  ng_family:
    "家族・出身・宗教に関するNGな質問について理解が不十分です。就職差別防止の観点から、厚生労働省の採用選考指針を再確認してください。",
  ng_gender:
    "性別・妊娠・育児に関する質問は男女雇用機会均等法に直結する重要項目です。女性・男性ともに公平な選考を行うための知識を強化しましょう。",
  ng_health:
    "健康・身体に関するプライバシー侵害のリスクを理解する必要があります。医療情報・既往歴は選考で使用できない情報です。",
  ng_ideology:
    "思想・信条・組合活動に関するNGな質問は憲法・労働法に直結します。政治・宗教・組合に関する質問は面接では厳禁です。",
  ng_commitment:
    "確約まがい発言は法的トラブルの直接原因になります。採用権限を持たない立場での内定示唆・他社辞退誘導は絶対に避けてください。",
  ng_harassment:
    "ハラスメント対応・口コミリスクへの意識を高める必要があります。すべての候補者に対して礼節ある対応が企業ブランドを守ります。",
};

export function getRank(correctCount: number): Rank {
  const rank = RANK_THRESHOLDS.find(
    (r) => correctCount >= r.minScore && correctCount <= r.maxScore
  );
  return rank ?? RANK_THRESHOLDS[RANK_THRESHOLDS.length - 1];
}

export type CategoryScore = {
  categoryId: string;
  categoryName: string;
  correct: number;
  total: number;
  rate: number;
};

export function calcCategoryScores(
  answers: UserAnswer[],
  categories: Category[]
): CategoryScore[] {
  return categories.map((cat) => {
    const questionIds = new Set(cat.questions.map((q) => q.id));
    const catAnswers = answers.filter((a) => questionIds.has(a.questionId));
    const correct = catAnswers.filter((a) => a.isCorrect).length;
    const total = cat.questions.length;
    return {
      categoryId: cat.id,
      categoryName: cat.name,
      correct,
      total,
      rate: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  });
}

export function getBestCategory(scores: CategoryScore[]): CategoryScore {
  return scores.reduce((best, cur) => {
    if (cur.rate > best.rate) return cur;
    if (cur.rate === best.rate && cur.total > best.total) return cur;
    return best;
  });
}

export function getWorstCategory(scores: CategoryScore[]): CategoryScore {
  return scores.reduce((worst, cur) => {
    if (cur.rate < worst.rate) return cur;
    if (cur.rate === worst.rate && cur.total > worst.total) return cur;
    return worst;
  });
}

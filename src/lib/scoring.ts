import type { Rank, RankGrade, RankId } from "@/src/types/rank";
import type { UserAnswer, Category } from "@/src/types/quiz";

export const RANK_THRESHOLDS: Rank[] = [
  {
    grade: "S",
    id: "grandmaster",
    label: "面接リテラシー 最高水準",
    riskLevel: "低め",
    riskColor: "#27AE60",
    message:
      "法的NGな質問・確約まがい発言・ハラスメントについて、ほぼ完璧な知識を持っています。社内の面接品質リーダーとして、他の面接官への指導・振り返りにぜひ活躍してください。",
    iconPath: "/ranks/lv5_grandmaster.svg",
    minScore: 22,
    maxScore: 23,
  },
  {
    grade: "A",
    id: "master",
    label: "面接リテラシー 上位水準",
    riskLevel: "やや低め",
    riskColor: "#2D8B92",
    message:
      "面接官として高い知識を持っています。一部の分野をおさらいすれば、ほぼリスクなく面接を運営できます。解説を振り返り、万全の状態で面接に臨みましょう。",
    iconPath: "/ranks/lv4_master.svg",
    minScore: 20,
    maxScore: 21,
  },
  {
    grade: "B",
    id: "path",
    label: "面接リテラシー 標準水準",
    riskLevel: "普通",
    riskColor: "#E67E22",
    message:
      "基本的な知識はありますが、NGな質問・発言を見落とすリスクがあります。苦手カテゴリの解説を必ず振り返り、炎上を未然に防ぎましょう。",
    iconPath: "/ranks/lv3_path.svg",
    minScore: 16,
    maxScore: 19,
  },
  {
    grade: "C",
    id: "step",
    label: "面接リテラシー 要強化",
    riskLevel: "やや高め",
    riskColor: "#E74C3C",
    message:
      "法的リスクや確約まがい発言への理解が不十分です。このまま面接に入ると炎上リスクがあります。研修で知識を補強してから面接に臨んでください。",
    iconPath: "/ranks/lv2_step.svg",
    minScore: 11,
    maxScore: 15,
  },
  {
    grade: "D",
    id: "egg",
    label: "面接リテラシー 要研修",
    riskLevel: "高め",
    riskColor: "#C0392B",
    message:
      "法的NGな質問・確約まがい発言・ハラスメントに関する基礎知識に大きな課題があります。面接実施前に必ず研修を受けてください。このまま面接に入ることは会社のリスクになります。",
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

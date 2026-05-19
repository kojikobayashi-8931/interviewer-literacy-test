import type { CategoryScore } from "@/src/lib/scoring";
import { CATEGORY_FEEDBACK } from "@/src/lib/scoring";

type CategoryAnalysisProps = {
  scores: CategoryScore[];
};

export function CategoryAnalysis({ scores }: CategoryAnalysisProps) {
  const sorted = [...scores].sort((a, b) => b.rate - a.rate);
  const best = sorted[0];
  const worst = sorted[sorted.length - 1];

  return (
    <div className="space-y-6">
      <h3 className="font-display text-xl font-bold text-main">カテゴリ別分析</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-correct bg-opacity-10 border border-correct border-opacity-30 rounded-xl p-4">
          <p className="text-correct font-body font-semibold text-sm mb-1">得意な領域</p>
          <p className="text-main font-body font-bold text-lg">{best.categoryName}</p>
          <p className="text-text font-body text-sm">
            {best.correct}/{best.total}問正解（{best.rate}%）
          </p>
        </div>

        <div className="bg-incorrect bg-opacity-10 border border-incorrect border-opacity-30 rounded-xl p-4">
          <p className="text-incorrect font-body font-semibold text-sm mb-1">強化推奨領域</p>
          <p className="text-main font-body font-bold text-lg">{worst.categoryName}</p>
          <p className="text-text font-body text-sm">
            {worst.correct}/{worst.total}問正解（{worst.rate}%）
          </p>
          {CATEGORY_FEEDBACK[worst.categoryId] && (
            <p className="text-text font-body text-xs mt-2 leading-relaxed">
              {CATEGORY_FEEDBACK[worst.categoryId]}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {scores.map((score) => (
          <div key={score.categoryId}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-text font-body text-sm">{score.categoryName}</span>
              <span className="text-text font-body text-sm font-semibold">
                {score.correct}/{score.total}（{score.rate}%）
              </span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${score.rate}%`,
                  backgroundColor: score.rate >= 80 ? "#27AE60" : score.rate >= 50 ? "#2D8B92" : "#E74C3C",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { RankIcon } from "@/src/components/ui/RankIcon";
import type { Rank } from "@/src/types/rank";

type RankDisplayProps = {
  rank: Rank;
  correctCount: number;
  totalQuestions: number;
};

export function RankDisplay({ rank, correctCount, totalQuestions }: RankDisplayProps) {
  const rate = Math.round((correctCount / totalQuestions) * 1000) / 10;

  return (
    <div className="text-center py-4 md:py-8">

      {/* 炎上リスクバッジ */}
      <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 md:mb-5"
        style={{ backgroundColor: `${rank.riskColor}18`, border: `1.5px solid ${rank.riskColor}` }}
      >
        <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: rank.riskColor }} />
        <span className="font-body text-xs md:text-sm font-bold" style={{ color: rank.riskColor }}>
          面接炎上リスク：{rank.riskLevel}
        </span>
      </div>

      {/* ランクアイコン */}
      <div className="flex justify-center mb-3 md:mb-5">
        <RankIcon
          rankId={rank.id}
          size={160}
          className="w-16 h-16 md:w-36 md:h-36"
        />
      </div>

      {/* 称号 */}
      <h2 className="font-display text-2xl md:text-4xl font-bold text-main mb-1 md:mb-2 leading-tight">
        {rank.label}
      </h2>

      {/* スコア・正答率 */}
      <div className="flex items-center justify-center gap-4 mt-3 mb-4 md:mt-4 md:mb-6">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-main font-display">
            {correctCount}
            <span className="text-base md:text-lg font-body font-normal text-text">
              {" "}/ {totalQuestions}問
            </span>
          </p>
          <p className="text-xs text-text font-body mt-0.5">正解数</p>
        </div>
        <div className="w-px h-10 md:h-12 bg-border" />
        <div className="text-center">
          <p className="font-display font-bold" style={{ fontSize: "1.5rem", color: rank.riskColor }}>
            {rate}
            <span className="text-base font-body font-normal text-text">%</span>
          </p>
          <p className="text-xs text-text font-body mt-0.5">正答率</p>
        </div>
      </div>

      {/* コメント */}
      <p
        className="text-white font-body text-sm leading-relaxed max-w-lg mx-auto rounded-xl p-3 md:p-5"
        style={{ backgroundColor: "#2D8B92" }}
      >
        {rank.message}
      </p>
    </div>
  );
}

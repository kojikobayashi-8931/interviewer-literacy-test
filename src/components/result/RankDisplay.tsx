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
      {/* アイコン：スマホは小さく（64px）、PCは大きく（160px） */}
      <div className="flex justify-center mb-3 md:mb-6">
        <RankIcon
          rankId={rank.id}
          size={160}
          className="w-16 h-16 md:w-40 md:h-40"
        />
      </div>

      <p className="text-accent font-body text-xs md:text-base font-semibold mb-1 md:mb-2">
        あなたの段位
      </p>

      <h2 className="font-display text-2xl md:text-4xl font-bold text-main mb-1 md:mb-2">
        {rank.label}
        <span className="text-accent ml-2 text-xl md:text-2xl">（{rank.grade}）</span>
      </h2>

      {/* スコア・正答率 */}
      <div className="flex items-center justify-center gap-4 mt-2 mb-4 md:mt-4 md:mb-6">
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-main font-display">
            {correctCount}
            <span className="text-base md:text-lg font-body font-normal text-text">
              {" "}/ {totalQuestions}問
            </span>
          </p>
          <p className="text-xs text-text font-body">正解数</p>
        </div>
        <div className="w-px h-10 md:h-12 bg-border" />
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold text-accent font-display">
            {rate}
            <span className="text-base md:text-lg font-body font-normal text-text">%</span>
          </p>
          <p className="text-xs text-text font-body">正答率</p>
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

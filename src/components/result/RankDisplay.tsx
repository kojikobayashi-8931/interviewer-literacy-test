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
    <div className="text-center py-8">
      <div className="flex justify-center mb-6">
        <RankIcon rankId={rank.id} size={160} />
      </div>
      <p className="text-accent font-body text-base font-semibold mb-2">あなたの段位</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-main mb-2">
        {rank.label}
        <span className="text-accent ml-2 text-2xl">（{rank.grade}）</span>
      </h2>
      <div className="flex items-center justify-center gap-4 mt-4 mb-6">
        <div className="text-center">
          <p className="text-3xl font-bold text-main font-display">
            {correctCount}
            <span className="text-lg font-body font-normal text-text"> / {totalQuestions}問</span>
          </p>
          <p className="text-sm text-text font-body">正解数</p>
        </div>
        <div className="w-px h-12 bg-border" />
        <div className="text-center">
          <p className="text-3xl font-bold text-accent font-display">
            {rate}
            <span className="text-lg font-body font-normal text-text">%</span>
          </p>
          <p className="text-sm text-text font-body">正答率</p>
        </div>
      </div>
      <p className="text-white font-body text-sm md:text-base leading-relaxed max-w-lg mx-auto rounded-xl p-5" style={{ backgroundColor: "#2D8B92" }}>
        {rank.message}
      </p>
    </div>
  );
}

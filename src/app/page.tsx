import Link from "next/link";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";
import { RankIcon } from "@/src/components/ui/RankIcon";

export default function TopPage() {
  const ranks = [...RANK_THRESHOLDS].reverse();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-main mb-4 leading-tight">
          面接官としての現在地を知る。
        </h1>
        <p className="text-text font-body text-lg md:text-xl mb-8">
          面接の知識、どれくらい？正解率で段位を判定
        </p>

        <div className="inline-flex items-center gap-6 bg-surface border border-border rounded-2xl px-8 py-4 mb-10">
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-main">29問</p>
            <p className="text-xs text-text font-body">問題数</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-main">9カテゴリ</p>
            <p className="text-xs text-text font-body">出題領域</p>
          </div>
          <div className="w-px h-10 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-main">約15分</p>
            <p className="text-xs text-text font-body">所要時間</p>
          </div>
        </div>

        <Link href="/test">
          <button className="bg-accent text-white font-body font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-200 active:scale-95">
            診断を開始する
          </button>
        </Link>
      </div>

      <div className="mb-12">
        <h2 className="font-display text-xl font-bold text-main text-center mb-6">
          5段位で判定
        </h2>
        <div className="grid grid-cols-5 gap-2 md:gap-4">
          {ranks.map((rank) => (
            <div
              key={rank.id}
              className="flex flex-col items-center text-center p-2 md:p-4 bg-surface rounded-xl border border-border"
            >
              <RankIcon rankId={rank.id} size={64} className="mb-2" />
              <p className="text-xs font-body font-bold text-accent">{rank.grade}</p>
              <p className="text-xs font-body text-text leading-tight mt-1">
                {rank.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-border p-6 md:p-8">
        <h2 className="font-display text-xl font-bold text-main mb-4">出題カテゴリ</h2>
        <ul className="space-y-2">
          {[
            { name: "採用トレンド", count: 3 },
            { name: "カジュアル面談 vs 面接", count: 3 },
            { name: "法的NG（家族・出身・宗教）", count: 4 },
            { name: "法的NG（性別・妊娠・育児）", count: 3 },
            { name: "法的NG（健康・身体）", count: 2 },
            { name: "法的NG（思想・信条・組合）", count: 2 },
            { name: "確約まがい発言", count: 4 },
            { name: "ハラスメント・リスク対応", count: 5 },
            { name: "面接でやってほしいこと", count: 3 },
          ].map((cat) => (
            <li
              key={cat.name}
              className="flex items-center justify-between py-2 border-b border-border last:border-0"
            >
              <span className="text-text font-body text-sm">{cat.name}</span>
              <span className="text-accent font-body text-sm font-semibold">
                {cat.count}問
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-10">
        <Link href="/test">
          <button className="bg-accent text-white font-body font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-200 active:scale-95">
            診断を開始する →
          </button>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";
import { RankIcon } from "@/src/components/ui/RankIcon";

export default function TopPage() {
  const ranks = [...RANK_THRESHOLDS].reverse();

  return (
    <div className="bg-base">

      {/* Hero */}
      <section className="bg-gradient-to-br from-main to-[#1a2a3a] text-white">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-accent-light font-body text-sm font-semibold tracking-widest uppercase mb-4">
            NODIA 採用面接官リテラシー診断
          </p>
          <h1 className="font-body text-3xl md:text-5xl font-bold leading-tight mb-6">
            面接官としての現在地を知る。
          </h1>
          <p className="text-white text-opacity-80 font-body text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            採用面接官に必要な知識・リテラシーを29問で診断。<br className="hidden md:block" />
            正解率で5段階の段位を判定します。
          </p>

          {/* Stats */}
          <div className="inline-flex items-center gap-8 bg-white bg-opacity-10 backdrop-blur rounded-2xl px-10 py-5 mb-10">
            <div className="text-center">
              <p className="text-2xl font-bold font-body text-white">29問</p>
              <p className="text-xs font-body text-white text-opacity-70 mt-1">問題数</p>
            </div>
            <div className="w-px h-10 bg-white bg-opacity-30" />
            <div className="text-center">
              <p className="text-2xl font-bold font-body text-white">9カテゴリ</p>
              <p className="text-xs font-body text-white text-opacity-70 mt-1">出題領域</p>
            </div>
            <div className="w-px h-10 bg-white bg-opacity-30" />
            <div className="text-center">
              <p className="text-2xl font-bold font-body text-white">約15分</p>
              <p className="text-xs font-body text-white text-opacity-70 mt-1">所要時間</p>
            </div>
          </div>

          <div>
            <Link href="/test">
              <button className="bg-accent text-white font-body font-bold text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 active:scale-95">
                診断を開始する →
              </button>
            </Link>
            <p className="text-white text-opacity-50 font-body text-xs mt-3">
              無料・登録不要
            </p>
          </div>
        </div>
      </section>

      {/* 段位紹介 */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">RANK</p>
          <h2 className="text-center font-body text-2xl font-bold text-main mb-10">
            5段階の段位で判定
          </h2>
          <div className="grid grid-cols-5 gap-3 md:gap-6">
            {ranks.map((rank) => (
              <div
                key={rank.id}
                className="flex flex-col items-center text-center p-3 md:p-5 bg-white rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <RankIcon rankId={rank.id} size={72} className="mb-3" />
                <span className="text-accent font-body text-xs font-bold mb-1">{rank.grade}</span>
                <span className="text-main font-body text-xs font-semibold leading-tight">
                  {rank.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 出題カテゴリ + CTA */}
      <section className="bg-surface py-14">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">CATEGORIES</p>
          <h2 className="text-center font-body text-2xl font-bold text-main mb-10">
            出題カテゴリ
          </h2>
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden mb-10">
            {[
              { name: "採用トレンド", count: 3, icon: "📈" },
              { name: "カジュアル面談 vs 面接", count: 3, icon: "💬" },
              { name: "法的NG（家族・出身・宗教）", count: 4, icon: "⚖️" },
              { name: "法的NG（性別・妊娠・育児）", count: 3, icon: "⚖️" },
              { name: "法的NG（健康・身体）", count: 2, icon: "⚖️" },
              { name: "法的NG（思想・信条・組合）", count: 2, icon: "⚖️" },
              { name: "確約まがい発言", count: 4, icon: "🚫" },
              { name: "ハラスメント・リスク対応", count: 5, icon: "🛡️" },
              { name: "面接でやってほしいこと", count: 3, icon: "✅" },
            ].map((cat, i) => (
              <div
                key={cat.name}
                className={`flex items-center justify-between px-6 py-4 ${
                  i !== 8 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{cat.icon}</span>
                  <span className="text-text font-body text-sm font-medium">{cat.name}</span>
                </div>
                <span className="text-accent font-body text-sm font-bold bg-accent bg-opacity-10 px-3 py-1 rounded-full">
                  {cat.count}問
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/test">
              <button className="bg-accent text-white font-body font-bold text-lg px-12 py-4 rounded-xl shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-200 active:scale-95">
                診断を開始する →
              </button>
            </Link>
            <p className="text-text font-body text-xs mt-3 opacity-60">
              無料・約15分・29問
            </p>
          </div>
        </div>
      </section>

      {/* 診断の流れ */}
      <section className="bg-white py-14">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center text-accent font-body text-sm font-semibold tracking-widest uppercase mb-2">HOW IT WORKS</p>
          <h2 className="text-center font-body text-2xl font-bold text-main mb-10">
            診断の流れ
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "診断スタート", desc: "「診断を開始する」をクリック" },
              { step: "02", title: "29問に回答", desc: "4択形式で1問ずつ回答" },
              { step: "03", title: "情報を入力", desc: "お名前・メール・職種を入力" },
              { step: "04", title: "結果を確認", desc: "段位・スコア・解説を表示" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-accent text-white font-body font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-body font-bold text-main text-base mb-2">{item.title}</h3>
                <p className="font-body text-text text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { RANK_THRESHOLDS } from "@/src/lib/scoring";
import { RankIcon } from "@/src/components/ui/RankIcon";

type Props = {
  searchParams: { rank?: string; score?: string; n?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const rankId = searchParams.rank;
  const score = searchParams.score ?? "0";
  const name = searchParams.n ?? "";

  // ランクパラメータがない場合はデフォルトのメタデータ（layout.tsxから継承）
  if (!rankId) return {};

  const headersList = headers();
  const host = headersList.get("host") ?? "localhost:3000";
  const proto = headersList.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = `${proto}://${host}`;

  const rank = RANK_THRESHOLDS.find((r) => r.id === rankId);
  const rankLabel = rank ? `${rank.label}（${rank.grade}）` : "要研修（D）";

  const title = name
    ? `${name}さんの診断結果：${rankLabel} | 面接NG発言チェッカー`
    : `診断結果：${rankLabel} | 面接NG発言チェッカー`;
  const description = `${score}/23問正解 | 面接NG発言チェッカー by NODIA`;
  const ogImageUrl = `${baseUrl}/api/og?rank=${encodeURIComponent(rankId)}&score=${encodeURIComponent(score)}&name=${encodeURIComponent(name)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/`,
      type: "website",
      siteName: "面接NG発言チェッカー | NODIA",
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: rankLabel, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export default function TopPage() {
  const ranks = [...RANK_THRESHOLDS].reverse();

  return (
    <div className="bg-base">

      {/* Hero */}
      <section className="relative overflow-hidden bg-main">
        {/* 背景デコレーション */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "#2D8B92", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: "#2D8B92", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="text-center">
            {/* バッジ */}
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#2D8B92] animate-pulse" />
              <span className="text-white font-body text-xs font-semibold tracking-wider">
                NODIA 面接NG発言チェッカー
              </span>
            </div>

            {/* メインキャッチ */}
            <h1 className="font-body font-bold text-white leading-tight mb-4">
              <span className="block text-4xl md:text-6xl mb-2">
                その質問、
              </span>
              <span
                className="block text-5xl md:text-7xl font-black"
                style={{ color: "#A8D8DC" }}
              >
                アウト
              </span>
              <span className="block text-4xl md:text-6xl mt-2">
                かもしれません。
              </span>
            </h1>

            <p className="text-white font-body text-base md:text-lg mb-4 max-w-lg mx-auto leading-relaxed" style={{ opacity: 0.75 }}>
              法的NGな質問・確約まがい発言・ハラスメント…<br className="hidden md:block" />
              23問で「面接炎上リスク」を診断します。
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-6 mb-10">
              {[
                { value: "23問", label: "問題数" },
                { value: "7カテゴリ", label: "出題領域" },
                { value: "約10分", label: "所要時間" },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold font-body text-white">{s.value}</p>
                    <p className="text-xs font-body mt-0.5" style={{ color: "#A8D8DC", opacity: 0.8 }}>{s.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white" style={{ opacity: 0.2 }} />}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/test">
              <button
                className="font-body font-bold text-lg px-12 py-4 rounded-xl shadow-xl transition-all duration-200 active:scale-95 hover:scale-105"
                style={{ backgroundColor: "#2D8B92", color: "#fff" }}
              >
                チェックを開始する →
              </button>
            </Link>
            <p className="font-body text-xs mt-3" style={{ color: "#A8D8DC", opacity: 0.6 }}>
              無料・登録不要
            </p>
          </div>
        </div>
      </section>

      {/* NGワーニングバナー */}
      <section style={{ backgroundColor: "#2D8B92" }} className="py-5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
            {["家族・出身について聞いた", "結婚・出産の予定を聞いた"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">⚠</span>
                <span className="text-white font-body text-sm">{text}</span>
              </div>
            ))}
            {/* スマホで改行を入れるセパレーター */}
            <div className="w-full md:hidden" />
            {["「ほぼ内定」と伝えた", "他社の辞退を勧めた"].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <span className="text-white font-bold text-sm">⚠</span>
                <span className="text-white font-body text-sm">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* こんな人に */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center font-body text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#2D8B92" }}>FOR WHO</p>
          <h2 className="text-center font-body text-2xl font-bold text-main mb-10">
            こんな面接官に受けてほしい
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "😰", title: "NG質問か自信がない", desc: "どこまで聞いていいのか判断できていない" },
              { icon: "📋", title: "研修を受けたことがない", desc: "面接官トレーニングを受けずに面接に入っている" },
              { icon: "⚖️", title: "法的リスクを知りたい", desc: "NGな発言が法令違反につながるリスクを把握したい" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 border-2 border-border hover:border-[#2D8B92] transition-colors"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-body font-bold text-main text-base mb-2">{item.title}</h3>
                <p className="font-body text-text text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 炎上リスク称号紹介 */}
      <section className="py-16" style={{ backgroundColor: "#F7F9FA" }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center font-body text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#2D8B92" }}>RESULT</p>
          <h2 className="text-center font-body text-2xl font-bold text-main mb-3">
            5段階の炎上リスクで診断
          </h2>
          <p className="text-center font-body text-sm text-text mb-10" style={{ opacity: 0.7 }}>
            正答率95%以上で「最高水準」、50%未満は「要研修」レベル
          </p>

          {/* スマホ: 縦並び（リスク高め → 低め） */}
          <div className="flex flex-col gap-3 md:hidden">
            {RANK_THRESHOLDS.map((rank) => (
              <div
                key={rank.id}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl border-2 transition-colors shadow-sm"
                style={{ borderColor: `${rank.riskColor}40` }}
              >
                <RankIcon rankId={rank.id} size={56} className="shrink-0" />
                <div className="flex-1 min-w-0">
                  <span
                    className="font-body text-xs font-bold inline-flex items-center gap-1.5 mb-0.5"
                    style={{ color: rank.riskColor }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: rank.riskColor }} />
                    炎上リスク：{rank.riskLevel}
                  </span>
                  <span className="text-main font-body text-sm font-bold block leading-tight">{rank.label}</span>
                </div>
                <span className="font-body text-xs shrink-0" style={{ color: "#4A4A4A", opacity: 0.45 }}>
                  {rank.minScore}〜{rank.maxScore}問
                </span>
              </div>
            ))}
          </div>

          {/* デスクトップ: 横並び */}
          <div className="hidden md:grid md:grid-cols-5 md:gap-4">
            {ranks.map((rank) => (
              <div
                key={rank.id}
                className="flex flex-col items-center text-center p-5 bg-white rounded-2xl border-2 transition-colors shadow-sm"
                style={{ borderColor: `${rank.riskColor}40` }}
              >
                <RankIcon rankId={rank.id} size={64} className="mb-3" />
                <span
                  className="font-body text-xs font-bold mb-1 inline-flex items-center gap-1"
                  style={{ color: rank.riskColor }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: rank.riskColor }} />
                  {rank.riskLevel}
                </span>
                <span className="text-main font-body text-xs font-bold leading-tight">
                  {rank.label}
                </span>
                <span className="font-body text-xs mt-1.5" style={{ color: "#4A4A4A", opacity: 0.45 }}>
                  {rank.minScore}〜{rank.maxScore}問
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 出題カテゴリ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center font-body text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#2D8B92" }}>CATEGORIES</p>
          <h2 className="text-center font-body text-2xl font-bold text-main mb-10">
            出題カテゴリ
          </h2>
          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {[
              { name: "カジュアル面談 vs 面接", count: 3, icon: "💬", color: "#2D8B92" },
              { name: "法的NG（家族・出身・宗教）", count: 4, icon: "🚫", color: "#E74C3C" },
              { name: "法的NG（性別・妊娠・育児）", count: 3, icon: "🚫", color: "#E74C3C" },
              { name: "法的NG（健康・身体）", count: 2, icon: "🚫", color: "#E74C3C" },
              { name: "法的NG（思想・信条・組合）", count: 2, icon: "🚫", color: "#E74C3C" },
              { name: "確約まがい発言", count: 4, icon: "⚠️", color: "#E67E22" },
              { name: "ハラスメント・リスク対応", count: 5, icon: "🛡️", color: "#8E44AD" },
            ].map((cat) => (
              <div
                key={cat.name}
                className="flex items-center justify-between px-5 py-4 rounded-xl border border-border hover:border-[#A8D8DC] transition-colors bg-white"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-text font-body text-sm font-medium">{cat.name}</span>
                </div>
                <span
                  className="font-body text-xs font-bold px-3 py-1 rounded-full text-white shrink-0 ml-3"
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.count}問
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/test">
              <button
                className="font-body font-bold text-lg px-12 py-4 rounded-xl shadow-lg transition-all duration-200 active:scale-95 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: "#2D8B92", color: "#fff" }}
              >
                チェックを開始する →
              </button>
            </Link>
            <p className="font-body text-xs mt-3" style={{ color: "#4A4A4A", opacity: 0.5 }}>
              無料・約10分・23問
            </p>
          </div>
        </div>
      </section>

      {/* 診断の流れ */}
      <section className="py-16" style={{ backgroundColor: "#2C3E50" }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center font-body text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#A8D8DC" }}>HOW IT WORKS</p>
          <h2 className="text-center font-body text-2xl font-bold text-white mb-12">
            診断の流れ
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "スタート", desc: "ボタンをクリックして開始" },
              { step: "02", title: "23問に回答", desc: "4択形式で1問ずつ回答" },
              { step: "03", title: "情報を入力", desc: "お名前・メール・職種を入力" },
              { step: "04", title: "結果を確認", desc: "段位・スコア・解説を表示" },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px" style={{ backgroundColor: "#2D8B92", opacity: 0.4 }} />
                )}
                <div
                  className="w-12 h-12 font-body font-black text-white text-base rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: "#2D8B92" }}
                >
                  {item.step}
                </div>
                <h3 className="font-body font-bold text-white text-sm mb-2">{item.title}</h3>
                <p className="font-body text-xs leading-relaxed" style={{ color: "#A8D8DC", opacity: 0.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

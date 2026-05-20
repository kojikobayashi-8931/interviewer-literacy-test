"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { RankDisplay } from "@/src/components/result/RankDisplay";
import { CategoryAnalysis } from "@/src/components/result/CategoryAnalysis";
import { AnswerReview } from "@/src/components/result/AnswerReview";
import { ShareButtons } from "@/src/components/result/ShareButtons";
import { InterviaBanner } from "@/src/components/result/InterviaBanner";
import { Button } from "@/src/components/ui/Button";
import { useTestStore } from "@/src/store/testStore";
import { getRank, calcCategoryScores } from "@/src/lib/scoring";
import questionsData from "@/src/data/questions.json";
import type { Category } from "@/src/types/quiz";

function ResultInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { answers, resetAnswers } = useTestStore();

  const correctParam = searchParams.get("correct");
  const totalParam = searchParams.get("total");
  const nameParam = searchParams.get("name");

  const rawCorrect = correctParam
    ? parseInt(correctParam, 10)
    : answers.filter((a) => a.isCorrect).length;
  const totalQuestions = totalParam
    ? parseInt(totalParam, 10)
    : questionsData.totalQuestions;

  const correctCount = Math.min(rawCorrect, totalQuestions);
  const rank = getRank(correctCount);

  const categories = questionsData.categories as Category[];
  const categoryScores = calcCategoryScores(answers, categories);

  if (answers.length === 0 && !correctParam) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <p className="text-text font-body mb-6">診断結果が見つかりません。</p>
        <Link href="/">
          <Button>TOPに戻る</Button>
        </Link>
      </div>
    );
  }

  const handleRetry = () => {
    resetAnswers();
    router.push("/test");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-4 md:py-8 space-y-3 md:space-y-8">

      {/* ① 総合結果 */}
      <div className="bg-base rounded-2xl shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-main to-accent p-1" />
        <div className="p-4 md:p-8">
          <RankDisplay
            rank={rank}
            correctCount={correctCount}
            totalQuestions={totalQuestions}
          />
        </div>
      </div>

      {/* ② SNSシェアボタン + INTERVIAバナー① */}
      <div className="bg-base rounded-2xl shadow-md p-4 md:p-6">
        <ShareButtons
          rank={rank}
          correctCount={correctCount}
          totalQuestions={totalQuestions}
          name={nameParam ?? undefined}
        />
        <div className="mt-4 pt-4 border-t border-border">
          <p className="font-body text-xs text-text mb-2" style={{ opacity: 0.5 }}>
            面接スキルをお持ちの方へ
          </p>
          <InterviaBanner />
        </div>
      </div>

      {/* ③ カテゴリ別分析 */}
      {categoryScores.length > 0 && answers.length > 0 && (
        <div className="bg-base rounded-2xl shadow-md p-4 md:p-8">
          <CategoryAnalysis scores={categoryScores} />
        </div>
      )}

      {/* ④ 問題ごとの振り返り */}
      {answers.length > 0 && (
        <div className="bg-base rounded-2xl shadow-md p-4 md:p-8">
          <AnswerReview categories={categories} answers={answers} />
        </div>
      )}

      {/* ⑤ INTERVIAバナー②：最下部 */}
      <div className="bg-white rounded-2xl shadow-sm border border-border p-4 md:p-6">
        <p className="font-body text-xs font-semibold text-main mb-3">
          採用面接の知見をお持ちの方へ
        </p>
        <InterviaBanner />
      </div>

      {/* ⑥ アクションボタン */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pb-4">
        <Button variant="outline" onClick={handleRetry}>
          もう一度テストする
        </Button>
        <a
          href="https://nodia.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="secondary" className="w-full sm:w-auto">
            NODIAサイトを見る →
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function ResultContent() {
  return (
    <Suspense
      fallback={
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="text-text font-body">読み込み中...</p>
        </div>
      }
    >
      <ResultInner />
    </Suspense>
  );
}

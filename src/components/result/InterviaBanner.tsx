import Image from "next/image";

const INTERVIA_URL = "https://intervia.tech/for-interviewers";

export function InterviaBanner() {
  return (
    <a
      href={INTERVIA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div
        className="flex flex-col sm:flex-row items-center gap-4 p-5 rounded-xl border-2 transition-all duration-200 group-hover:shadow-md"
        style={{
          background: "linear-gradient(135deg, #EEF7F8 0%, #FFFFFF 100%)",
          borderColor: "#2D8B92",
        }}
      >
        {/* ロゴ（目立つサイズ） */}
        <Image
          src="/intervia-logo.png"
          alt="INTERVIA"
          width={200}
          height={50}
          className="h-10 w-auto object-contain shrink-0"
          priority
        />

        {/* テキスト */}
        <div className="flex-1 text-center sm:text-left">
          <p className="font-body text-sm font-bold text-main leading-snug">
            面接スキルを採用支援に活かしませんか？
          </p>
          <p className="font-body text-xs mt-0.5 leading-snug" style={{ color: "#4A4A4A", opacity: 0.65 }}>
            INTERVIAで採用支援の副業・業務委託案件を探す
          </p>
        </div>

        {/* CTAボタン */}
        <span
          className="inline-flex items-center gap-1.5 font-body text-sm font-bold px-5 py-2.5 rounded-lg text-white shrink-0 transition-opacity duration-200 group-hover:opacity-90"
          style={{ backgroundColor: "#2D8B92" }}
        >
          登録はこちら →
        </span>
      </div>
    </a>
  );
}

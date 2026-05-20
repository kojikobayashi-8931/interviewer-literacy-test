import Image from "next/image";

// TODO: リンクURLが決まり次第、以下の定数を差し替えてください
const INTERVIA_URL = "#";

export function InterviaBanner() {
  return (
    <a
      href={INTERVIA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-border hover:border-[#2D8B92] transition-all duration-200 bg-white group hover:shadow-sm"
    >
      {/* ロゴ：SNSシェアボタンと同等サイズ（h-8 = 32px） */}
      <Image
        src="/intervia-logo.png"
        alt="INTERVIA"
        width={160}
        height={40}
        className="h-8 w-auto object-contain shrink-0"
      />
      {/* 説明テキスト */}
      <div className="flex-1 min-w-0">
        <p className="font-body text-xs font-semibold text-main leading-snug">
          面接スキルを採用支援に活かしませんか？
        </p>
        <p className="font-body text-xs leading-snug" style={{ color: "#4A4A4A", opacity: 0.55 }}>
          INTERVIAで採用支援の副業・業務委託を探す
        </p>
      </div>
      {/* CTA */}
      <span
        className="font-body text-xs font-bold shrink-0 group-hover:underline whitespace-nowrap"
        style={{ color: "#2D8B92" }}
      >
        登録はこちら →
      </span>
    </a>
  );
}

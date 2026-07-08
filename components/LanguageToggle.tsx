"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="inline-flex items-center rounded-full border-2 border-shrine-goldLight/70 bg-shrine-redDark p-1 shadow-md"
      role="group"
      aria-label="เลือกภาษาเว็บไซต์ / Select site language"
    >
      <button
        onClick={() => setLang("th")}
        className={`min-w-[52px] sm:min-w-[64px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-bold transition-colors ${
          lang === "th"
            ? "bg-shrine-goldLight text-shrine-redDark"
            : "text-shrine-cream/80 hover:text-shrine-goldLight"
        }`}
      >
        ไทย
      </button>
      <button
        onClick={() => setLang("en")}
        className={`min-w-[52px] sm:min-w-[64px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-bold transition-colors ${
          lang === "en"
            ? "bg-shrine-goldLight text-shrine-redDark"
            : "text-shrine-cream/80 hover:text-shrine-goldLight"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`min-w-[52px] sm:min-w-[64px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-bold transition-colors ${
          lang === "zh"
            ? "bg-shrine-goldLight text-shrine-redDark"
            : "text-shrine-cream/80 hover:text-shrine-goldLight"
        }`}
      >
        中文
      </button>
    </div>
  );
}

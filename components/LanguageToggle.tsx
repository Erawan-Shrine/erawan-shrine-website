"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { pathInLanguage } from "@/lib/i18n";

export default function LanguageToggle() {
  const { lang } = useLanguage();
  const pathname = usePathname();

  return (
    <div
      className="inline-flex items-center rounded-full border-2 border-shrine-goldLight/70 bg-shrine-redDark p-1 shadow-md"
      role="group"
      aria-label="เลือกภาษาเว็บไซต์ / Select site language"
    >
      <Link
        href={pathInLanguage(pathname, "th")}
        lang="th"
        hrefLang="th"
        aria-current={lang === "th" ? "page" : undefined}
        className={`min-w-[52px] sm:min-w-[64px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-bold transition-colors ${
          lang === "th"
            ? "bg-shrine-goldLight text-shrine-redDark"
            : "text-shrine-cream/80 hover:text-shrine-goldLight"
        }`}
      >
        ไทย
      </Link>
      <Link
        href={pathInLanguage(pathname, "en")}
        lang="en"
        hrefLang="en"
        aria-current={lang === "en" ? "page" : undefined}
        className={`min-w-[52px] sm:min-w-[64px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-bold transition-colors ${
          lang === "en"
            ? "bg-shrine-goldLight text-shrine-redDark"
            : "text-shrine-cream/80 hover:text-shrine-goldLight"
        }`}
      >
        EN
      </Link>
      <Link
        href={pathInLanguage(pathname, "zh")}
        lang="zh"
        hrefLang="zh"
        aria-current={lang === "zh" ? "page" : undefined}
        className={`min-w-[52px] sm:min-w-[64px] rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base font-bold transition-colors ${
          lang === "zh"
            ? "bg-shrine-goldLight text-shrine-redDark"
            : "text-shrine-cream/80 hover:text-shrine-goldLight"
        }`}
      >
        中文
      </Link>
    </div>
  );
}

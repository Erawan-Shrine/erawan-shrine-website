"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const links = [
  { href: "/", th: "หน้าแรก", en: "Home", zh: "首頁" },
  { href: "/#prayer", th: "บทสวดมนต์", en: "Prayer", zh: "經咒" },
  { href: "/worship", th: "วิธีสักการะ", en: "How to Worship", zh: "參拜方式" },
  { href: "/history", th: "ประวัติศาล", en: "History", zh: "歷史沿革" },
  { href: "/visit", th: "การเดินทาง", en: "Visit", zh: "交通資訊" },
  { href: "/gallery", th: "แกลเลอรี", en: "Gallery", zh: "相片集" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-shrine-redDark/95 backdrop-blur text-shrine-cream shadow-lg">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🙏</span>
            <span className="font-display font-semibold text-shrine-goldLight text-base sm:text-xl">
              {lang === "th" ? "ศาลพระพรหมเอราวัณ" : lang === "zh" ? "伊拉旺神壇" : "Erawan Shrine"}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="hover:text-shrine-goldLight transition-colors"
              >
                {lang === "th" ? l.th : lang === "zh" ? l.zh : l.en}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <button
              className="md:hidden text-2xl"
              aria-label="เปิดเมนู"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-shrine-gold/30 bg-shrine-redDark">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-4 text-base">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-shrine-goldLight transition-colors"
              >
                {lang === "th" ? l.th : lang === "zh" ? l.zh : l.en}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

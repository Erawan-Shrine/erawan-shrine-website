"use client";

import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    name: "ศาลพระพรหมเอราวัณ",
    address: "สี่แยกราชประสงค์ ถนนราชดำริ แขวงลุมพินี\nเขตปทุมวัน กรุงเทพมหานคร 10330",
    hoursTitle: "เวลาเปิด-ปิด",
    hours: "เปิดให้สักการะทุกวัน 06:00 – 22:00 น.\nไม่มีค่าเข้าชม",
    aboutTitle: "เกี่ยวกับเว็บไซต์นี้",
    about:
      "จัดทำขึ้นเพื่อเผยแพร่บทสวดมนต์บูชาพระพรหมและข้อมูลการสักการะสำหรับผู้ศรัทธา ศาลพระพรหมเอราวัณ",
    copyright: "ศาลพระพรหมเอราวัณ — สร้างด้วยศรัทธา",
  },
  en: {
    name: "Erawan Shrine",
    address: "Ratchaprasong Intersection, Ratchadamri Road,\nLumphini, Pathum Wan, Bangkok 10330",
    hoursTitle: "Opening Hours",
    hours: "Open daily 06:00 – 22:00\nFree admission",
    aboutTitle: "About this site",
    about:
      "Created to share the Brahma chanting prayer and worship information for devotees who scan the QR Code at Erawan Shrine.",
    copyright: "Erawan Shrine — built with faith",
  },
};

export default function Footer() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <footer className="bg-shrine-redDark text-shrine-cream/80 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <h3 className="text-shrine-goldLight font-display text-lg mb-2">
            {t.name}
          </h3>
          <p className="leading-relaxed whitespace-pre-line">{t.address}</p>
        </div>
        <div>
          <h3 className="text-shrine-goldLight font-display text-lg mb-2">
            {t.hoursTitle}
          </h3>
          <p className="leading-relaxed whitespace-pre-line">{t.hours}</p>
        </div>
        <div>
          <h3 className="text-shrine-goldLight font-display text-lg mb-2">
            {t.aboutTitle}
          </h3>
          <p className="leading-relaxed">{t.about}</p>
        </div>
      </div>
      <div className="border-t border-shrine-gold/20 py-4 text-center text-xs text-shrine-cream/50">
        © {new Date().getFullYear()} {t.copyright}
      </div>
    </footer>
  );
}

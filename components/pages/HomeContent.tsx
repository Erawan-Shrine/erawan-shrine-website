"use client";

import Link from "next/link";
import PrayerChant from "@/components/PrayerChant";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "ศาลพระพรหมเอราวัณ",
    subtitle: "Erawan Shrine — ท้าวมหาพรหม สี่แยกราชประสงค์ กรุงเทพฯ",
    lead: "บทสวดบูชาพระพรหมสี่หน้า พร้อมคำแปลไทย · อังกฤษ · จีน สำหรับผู้ศรัทธาที่มาสักการะ ณ ศาลพระพรหมเอราวัณ",
    facesTitle: "ความหมายแห่งพระพรหมสี่พักตร์",
    facesText:
      "ตามคติความเชื่อ พระพรหมสี่พักตร์สื่อถึงการแผ่พระเมตตาและการดูแลคุ้มครองในทุกทิศทาง ผู้ศรัทธานิยมสักการะครบทั้งสี่พักตร์ เพื่อความเป็นสิริมงคลในชีวิต ทั้งด้านการงาน ความสัมพันธ์ โชคลาภ สุขภาพ และความปลอดภัย",
    learnMore: "เรียนรู้เพิ่มเติม",
    links: [
      {
        href: "/worship",
        title: "วิธีสักการะ",
        desc: "ขั้นตอนไหว้ เครื่องสักการะ และข้อควรปฏิบัติ",
        icon: "🕯️",
      },
      {
        href: "/history",
        title: "ประวัติศาลพระพรหม",
        desc: "ความเป็นมาของศาลพระพรหมเอราวัณตั้งแต่ พ.ศ. 2499",
        icon: "📜",
      },
      {
        href: "/visit",
        title: "ข้อมูลการเดินทาง",
        desc: "แผนที่ เวลาเปิด-ปิด และการเดินทางมาศาล",
        icon: "🗺️",
      },
      {
        href: "/gallery",
        title: "แกลเลอรีภาพ",
        desc: "ภาพบรรยากาศศาลพระพรหมเอราวัณ",
        icon: "🖼️",
      },
    ],
  },
  en: {
    title: "Erawan Shrine",
    subtitle: "Thao Maha Phrom — Ratchaprasong, Bangkok",
    lead: "The Four-Faced Brahma chanting prayer, with Thai, English and Chinese translations, for devotees visiting Erawan Shrine.",
    facesTitle: "The Meaning of the Four-Faced Brahma",
    facesText:
      "According to tradition, the four faces of Brahma represent the spreading of compassion and protection in every direction. Devotees customarily pay respects to all four faces to bring blessings in every aspect of life — career, relationships, fortune, health, and safety.",
    learnMore: "Learn More",
    links: [
      {
        href: "/worship",
        title: "How to Worship",
        desc: "Worship steps, offerings, and etiquette",
        icon: "🕯️",
      },
      {
        href: "/history",
        title: "History of the Shrine",
        desc: "The story of Erawan Shrine since 1956",
        icon: "📜",
      },
      {
        href: "/visit",
        title: "Visitor Information",
        desc: "Map, opening hours and how to get there",
        icon: "🗺️",
      },
      {
        href: "/gallery",
        title: "Gallery",
        desc: "Photos of Erawan Shrine",
        icon: "🖼️",
      },
    ],
  },
};

export default function HomeContent() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-shrine-redDark via-shrine-red to-shrine-redDark text-shrine-cream">
        <div className="absolute inset-0 opacity-20 bg-mandala" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 text-center">
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-shrine-goldLight mb-3">
            {t.title}
          </h1>
          <p className="text-sm sm:text-base text-shrine-cream/80 mb-1">
            {t.subtitle}
          </p>
          <p className="text-sm sm:text-base text-shrine-cream/70 max-w-xl mx-auto">
            {t.lead}
          </p>
        </div>
      </section>

      {/* Prayer — primary content, this is what the QR at the shrine links to */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 -mt-8 sm:-mt-10 pb-4">
        <PrayerChant />
      </section>

      {/* Four faces */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
        <div className="divider-ornament mb-6 max-w-xs mx-auto" />
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-shrine-red text-center mb-6">
          {t.facesTitle}
        </h2>
        <p className="text-center text-shrine-ink/80 leading-relaxed">
          {t.facesText}
        </p>
      </section>

      {/* Quick links */}
      <section className="bg-shrine-red/5 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-shrine-red text-center mb-8">
            {t.learnMore}
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {t.links.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6 flex items-start gap-4 hover:border-shrine-gold transition-colors"
              >
                <div className="text-3xl">{q.icon}</div>
                <div>
                  <h3 className="font-semibold text-shrine-red group-hover:text-shrine-gold transition-colors">
                    {q.title}
                  </h3>
                  <p className="text-sm text-shrine-ink/70 mt-1">{q.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

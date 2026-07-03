"use client";

import Link from "next/link";
import PrayerChant from "@/components/PrayerChant";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "ศาลพระพรหมเอราวัณ",
    subtitle: "Erawan Shrine — ท้าวมหาพรหม สี่แยกราชประสงค์ กรุงเทพฯ",
    lead: "บทสวดบูชาพระพรหมสี่หน้า พร้อมคำแปลไทย · อังกฤษ · จีน สำหรับผู้ศรัทธาที่มาสักการะ ณ ศาลพระพรหมเอราวัณ",
    facesLabel: "ความหมายสี่หน้า",
    facesTitle: "พระพรหมสี่หน้า ประทานพรครบทุกด้าน",
    facesNote:
      "เดินเวียนขวา (ตามเข็มนาฬิกา) ครบทั้ง 4 หน้า พร้อมจุดธูป 3 ดอก วางเทียน 1 เล่ม และพวงมาลัย 1 พวงในแต่ละหน้า",
    faces: [
      { title: "หน้าที่ 1", meaning: "หน้าที่การงาน", icon: "💼" },
      { title: "หน้าที่ 2", meaning: "ความรักและครอบครัว", icon: "❤️" },
      { title: "หน้าที่ 3", meaning: "โชคลาภและทรัพย์สิน", icon: "💰" },
      { title: "หน้าที่ 4", meaning: "สุขภาพและความปลอดภัย", icon: "🌿" },
    ],
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
    facesLabel: "Meaning of the Four Faces",
    facesTitle: "The Four-Faced Brahma grants blessings in every aspect of life",
    facesNote:
      "Walk clockwise past all four faces, lighting 3 incense sticks, placing 1 candle and 1 garland at each face.",
    faces: [
      { title: "Face 1", meaning: "Career & Work", icon: "💼" },
      { title: "Face 2", meaning: "Love & Family", icon: "❤️" },
      { title: "Face 3", meaning: "Fortune & Wealth", icon: "💰" },
      { title: "Face 4", meaning: "Health & Safety", icon: "🌿" },
    ],
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
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="divider-ornament mb-3 max-w-xs mx-auto">
          <span className="text-shrine-gold text-xs whitespace-nowrap">
            {t.facesLabel}
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-shrine-red text-center mb-8">
          {t.facesTitle}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {t.faces.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-5 text-center"
            >
              <div className="text-3xl mb-2">{f.icon}</div>
              <div className="text-xs text-shrine-gold mb-1">
                {f.title}
              </div>
              <div className="font-medium text-shrine-ink">{f.meaning}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-shrine-ink/50 mt-6">
          {t.facesNote}
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

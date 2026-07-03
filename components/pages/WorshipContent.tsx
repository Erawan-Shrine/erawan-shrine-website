"use client";

import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "วิธีสักการะพระพรหม",
    subtitle: "ศาลพระพรหมเอราวัณไม่มีค่าเข้าชม เปิดให้สักการะทุกวัน 06:00–22:00 น.",
    stepsTitle: "ขั้นตอนการไหว้",
    steps: [
      {
        title: "ซื้อชุดเครื่องสักการะ",
        desc: "เลือกซื้อชุดไหว้ (ธูป เทียน พวงมาลัย) จากร้านค้าบริเวณศาล ราคาประมาณ 60 บาทต่อชุด",
      },
      {
        title: "เริ่มไหว้ที่หน้าแรก",
        desc: "วางเทียน 1 เล่ม พวงมาลัย 1 พวง และจุดธูป 3 ดอก ตั้งจิตอธิษฐาน",
      },
      {
        title: "เวียนขวาให้ครบ 4 หน้า",
        desc: "เดินเวียนขวา (ตามเข็มนาฬิกา) ทำซ้ำขั้นตอนเดิมที่หน้าที่ 2, 3 และ 4 จนครบทุกหน้า",
      },
      {
        title: "กราบลาเป็นอันเสร็จพิธี",
        desc: "ไหว้ขอบคุณและกราบลาองค์พระพรหมเป็นการเสร็จสิ้นการสักการะ",
      },
    ],
    offeringsTitle: "เครื่องสักการะและความหมาย",
    offerings: [
      { icon: "🪷", name: "พวงมาลัย / ดอกไม้", meaning: "ความสวยงามและความเคารพ" },
      { icon: "🕯️", name: "ธูป 3 ดอก", meaning: "การบูชาด้วยความศรัทธา" },
      { icon: "🔥", name: "เทียน 1 เล่ม", meaning: "แสงสว่างนำทางชีวิต" },
      { icon: "🐘", name: "ช้างไม้แกะสลัก", meaning: "ความแข็งแกร่ง ปัญญา และความมั่งคั่ง (เครื่องสักการะเสริม)" },
      { icon: "🎶", name: "ว่าจ้างรำถวาย", meaning: "แก้บนเมื่อพรสัมฤทธิ์ผล" },
    ],
    etiquetteTitle: "ข้อควรปฏิบัติ",
    etiquette: [
      "แต่งกายสุภาพ ปกปิดไหล่และเข่า",
      "พูดคุยเบาเสียงขณะอยู่ใกล้ผู้ที่กำลังสักการะ",
      "สามารถใส่รองเท้าได้ เนื่องจากศาลอยู่กลางแจ้ง",
    ],
  },
  en: {
    title: "How to Worship at Erawan Shrine",
    subtitle: "Free admission. Open daily from 6:00 AM to 10:00 PM.",
    stepsTitle: "Worship Steps",
    steps: [
      {
        title: "Buy an offering set",
        desc: "Purchase a worship set (incense, candle, garland) from vendors around the shrine, typically 60 THB per set.",
      },
      {
        title: "Begin at the first face",
        desc: "Place one candle, one garland, and light three incense sticks. Silently state your prayer.",
      },
      {
        title: "Move clockwise through all four faces",
        desc: "Walk clockwise and repeat the same offering at faces 2, 3, and 4.",
      },
      {
        title: "Bow to complete",
        desc: "Give a final wai (bow) to the Brahma image to complete your worship.",
      },
    ],
    offeringsTitle: "Offerings and Their Meaning",
    offerings: [
      { icon: "🪷", name: "Garland / Flowers", meaning: "Beauty and respect" },
      { icon: "🕯️", name: "3 incense sticks", meaning: "Devotion and faith" },
      { icon: "🔥", name: "1 candle", meaning: "Light guiding one's path" },
      { icon: "🐘", name: "Carved wooden elephant", meaning: "Strength, wisdom and prosperity (optional offering)" },
      { icon: "🎶", name: "Hiring traditional Thai dancers", meaning: "To fulfil a vow once a prayer is answered" },
    ],
    etiquetteTitle: "Etiquette",
    etiquette: [
      "Dress modestly, covering shoulders and knees",
      "Keep your voice low near others who are praying",
      "Shoes may be kept on, as the shrine is outdoors",
    ],
  },
};

export default function WorshipContent() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-3">
        {t.title}
      </h1>
      <p className="text-center text-shrine-ink/70 max-w-xl mx-auto mb-12">
        {t.subtitle}
      </p>

      {/* Steps */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-semibold text-shrine-red mb-6">
          {t.stepsTitle}
        </h2>
        <ol className="space-y-4">
          {t.steps.map((s, i) => (
            <li
              key={s.title}
              className="flex gap-4 rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-5"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-shrine-red text-shrine-cream flex items-center justify-center font-semibold">
                {i + 1}
              </div>
              <div>
                <h3 className="font-semibold text-shrine-ink">{s.title}</h3>
                <p className="text-sm text-shrine-ink/70 mt-1">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Offerings */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-semibold text-shrine-red mb-6">
          {t.offeringsTitle}
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {t.offerings.map((o) => (
            <div
              key={o.name}
              className="flex items-center gap-4 rounded-xl bg-shrine-paper border border-shrine-gold/30 p-4"
            >
              <div className="text-2xl">{o.icon}</div>
              <div>
                <div className="font-medium text-shrine-ink">{o.name}</div>
                <div className="text-xs text-shrine-ink/60">{o.meaning}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Etiquette */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-shrine-red mb-6">
          {t.etiquetteTitle}
        </h2>
        <ul className="space-y-2">
          {t.etiquette.map((e) => (
            <li key={e} className="flex items-center gap-2 text-shrine-ink/80">
              <span className="text-shrine-gold leading-none">✦</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

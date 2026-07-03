import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "วิธีสักการะ | ศาลพระพรหมเอราวัณ",
  description: "ขั้นตอนการสักการะพระพรหม เครื่องสักการะ และข้อควรปฏิบัติ",
};

const steps = [
  {
    n: 1,
    title: "ซื้อชุดเครื่องสักการะ",
    desc: "เลือกซื้อชุดไหว้ (ธูป เทียน พวงมาลัย) จากร้านค้าบริเวณศาล ราคาประมาณ 20–50 บาทต่อชุด",
  },
  {
    n: 2,
    title: "ล้างมือด้วยน้ำมนต์",
    desc: "ล้างมือให้สะอาดด้วยน้ำมนต์ที่จัดเตรียมไว้ก่อนเริ่มสักการะ เพื่อความเป็นสิริมงคล",
  },
  {
    n: 3,
    title: "เริ่มไหว้ที่หน้าแรก",
    desc: "วางเทียน 1 เล่ม พวงมาลัย 1 พวง และจุดธูป 3 ดอก ตั้งจิตอธิษฐาน",
  },
  {
    n: 4,
    title: "เวียนขวาให้ครบ 4 หน้า",
    desc: "เดินเวียนขวา (ตามเข็มนาฬิกา) ทำซ้ำขั้นตอนเดิมที่หน้าที่ 2, 3 และ 4 จนครบทุกหน้า",
  },
  {
    n: 5,
    title: "จบด้วยน้ำมนต์",
    desc: "ปะพรมน้ำมนต์ที่ศีรษะเพื่อความเป็นสิริมงคล ถือเป็นการเสร็จสิ้นการสักการะ",
  },
];

const offerings = [
  { icon: "🪷", name: "ดอกไม้ / พวงมาลัย", meaning: "ธาตุดิน" },
  { icon: "💧", name: "น้ำสะอาด", meaning: "ธาตุน้ำ" },
  { icon: "🕯️", name: "ธูป 3 ดอก", meaning: "ธาตุลม" },
  { icon: "🔥", name: "เทียน 1 เล่ม", meaning: "ธาตุไฟ" },
  { icon: "🐘", name: "ช้างไม้แกะสลัก", meaning: "ความแข็งแกร่ง ปัญญา และความมั่งคั่ง" },
  { icon: "💃", name: "ว่าจ้างรำถวาย", meaning: "แก้บนเมื่อพรสัมฤทธิ์ผล" },
];

const etiquette = [
  "แต่งกายสุภาพ ปกปิดไหล่และเข่า",
  "ไม่เหยียบข้ามเครื่องสักการะที่วางอยู่บนพื้น",
  "ไม่ชี้เท้าไปทางองค์พระพรหม",
  "พูดคุยเบาเสียงขณะอยู่ใกล้ผู้ที่กำลังสักการะ",
  "สามารถใส่รองเท้าได้ เนื่องจากศาลอยู่กลางแจ้ง",
];

export default function WorshipPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-3">
        วิธีสักการะพระพรหม
      </h1>
      <p className="text-center text-shrine-ink/70 max-w-xl mx-auto mb-12">
        ศาลพระพรหมเอราวัณไม่มีค่าเข้าชม เปิดให้สักการะทุกวัน 06:00–22:00 น.
      </p>

      {/* Steps */}
      <section className="mb-16">
        <h2 className="font-display text-2xl font-semibold text-shrine-red mb-6">
          ขั้นตอนการไหว้
        </h2>
        <ol className="space-y-4">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex gap-4 rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-5"
            >
              <div className="shrink-0 w-9 h-9 rounded-full bg-shrine-red text-shrine-cream flex items-center justify-center font-semibold">
                {s.n}
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
          เครื่องสักการะและความหมาย
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {offerings.map((o) => (
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
      <section>
        <h2 className="font-display text-2xl font-semibold text-shrine-red mb-6">
          ข้อควรปฏิบัติ
        </h2>
        <ul className="space-y-2">
          {etiquette.map((e) => (
            <li key={e} className="flex items-start gap-2 text-shrine-ink/80">
              <span className="text-shrine-gold mt-1">✦</span>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

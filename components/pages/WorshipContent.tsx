"use client";

import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "วิธีสักการะพระพรหม",
    subtitle:
      "ศาลพระพรหมเอราวัณไม่มีค่าเข้าชม เปิดให้เข้าสักการะทุกวัน เวลา 06:00–22:00 น. ทั้งนี้ เวลาเปิด–ปิดอาจมีการเปลี่ยนแปลงตามประกาศของพื้นที่",
    stepsTitle: "ขั้นตอนการสักการะ",
    steps: [
      {
        title: "เตรียมเครื่องสักการะ",
        desc: "ผู้ศรัทธาสามารถเตรียมเครื่องสักการะ เช่น ธูป เทียน และพวงมาลัย หรือเลือกชุดเครื่องสักการะจากจุดจำหน่ายบริเวณศาล โดยราคาขึ้นอยู่กับประเภทและขนาดของชุดเครื่องสักการะ",
      },
      {
        title: "เริ่มสักการะที่พระพักตร์ด้านหน้า",
        desc: "เริ่มจากพระพักตร์ด้านหน้า ถวายธูป 3 ดอก เทียน 1 เล่ม และพวงมาลัย 1 พวง พร้อมตั้งจิตอธิษฐานด้วยความเคารพ ทั้งนี้ การจุดธูปหรือเทียนควรเป็นไปตามประกาศและข้อปฏิบัติของศาล ณ วันที่เข้าสักการะ",
      },
      {
        title: "เวียนขวาให้ครบทั้ง 4 พระพักตร์",
        desc: "เดินเวียนขวา หรือตามเข็มนาฬิกา ไปยังพระพักตร์ที่ 2, 3 และ 4 โดยถวายเครื่องสักการะในลักษณะเดียวกันจนครบทุกพระพักตร์",
      },
      {
        title: "กราบลาเมื่อเสร็จสิ้นการสักการะ",
        desc: "เมื่อสักการะครบทั้ง 4 พระพักตร์แล้ว ให้ตั้งจิตขอบพระคุณและกราบลาองค์ท้าวมหาพรหม เป็นอันเสร็จสิ้นการสักการะ",
      },
    ],
    offeringsTitle: "เครื่องสักการะและความหมาย",
    offerings: [
      { icon: "🕯️", name: "ธูป 12 ดอก", meaning: "ใช้สำหรับสักการะครบทั้ง 4 พระพักตร์ โดยถวายพระพักตร์ละ 3 ดอก" },
      { icon: "🔥", name: "เทียน 4 เล่ม", meaning: "ถวายพระพักตร์ละ 1 เล่ม เพื่อสื่อถึงแสงสว่าง ความเป็นสิริมงคล และการนำทางชีวิต" },
      { icon: "🪷", name: "พวงมาลัย 4 พวง", meaning: "ถวายพระพักตร์ละ 1 พวง เพื่อแสดงความเคารพและศรัทธา" },
      { icon: "🐘", name: "ช้างไม้แกะสลัก", meaning: "เป็นเครื่องสักการะเสริมที่ผู้ศรัทธานิยมถวาย สื่อถึงความมั่นคง ปัญญา ความอุดมสมบูรณ์ และความเป็นสิริมงคล" },
      { icon: "🎶", name: "การถวายการแสดงนาฏศิลป์ไทย", meaning: "เป็นการแสดงความเคารพและความสำนึกในพระเมตตา เมื่อคำอธิษฐานสัมฤทธิ์ผล" },
    ],
    etiquetteTitle: "ข้อควรปฏิบัติ",
    etiquette: [
      "แต่งกายสุภาพ และคำนึงถึงความเหมาะสมของสถานที่ศักดิ์สิทธิ์",
      "พูดคุยด้วยเสียงเบา และเคารพผู้ที่กำลังสักการะ",
      "สามารถสวมรองเท้าได้ เนื่องจากศาลตั้งอยู่ในพื้นที่กลางแจ้ง",
      "รักษาความสะอาด และปฏิบัติตามคำแนะนำหรือประกาศของเจ้าหน้าที่ประจำพื้นที่",
    ],
  },
  en: {
    title: "How to Worship at Erawan Shrine",
    subtitle:
      "Erawan Shrine has no admission fee and is open for worship daily from 6:00 AM to 10:00 PM. Opening hours may change according to on-site notices.",
    stepsTitle: "Worship Steps",
    steps: [
      {
        title: "Prepare your offerings",
        desc: "Devotees may bring their own offerings — incense, candles, and garlands — or choose an offering set from vendors around the shrine. Prices vary by the type and size of the set.",
      },
      {
        title: "Begin at the front-facing image",
        desc: "Starting at the front face, offer 3 incense sticks, 1 candle, and 1 garland while silently making your prayer with respect. Lighting incense or candles should follow the shrine's current notices and guidelines on the day of your visit.",
      },
      {
        title: "Move clockwise through all four faces",
        desc: "Walk clockwise to the second, third, and fourth faces, making the same offering at each until all four faces have been honoured.",
      },
      {
        title: "Bow to complete your worship",
        desc: "Once all four faces have been honoured, offer a final prayer of thanks and bow to Thao Maha Phrom to complete the worship.",
      },
    ],
    offeringsTitle: "Offerings and Their Meaning",
    offerings: [
      { icon: "🕯️", name: "12 incense sticks", meaning: "Used to worship all four faces, offering 3 sticks per face." },
      { icon: "🔥", name: "4 candles", meaning: "One candle offered per face, symbolising light, blessing, and guidance in life." },
      { icon: "🪷", name: "4 garlands", meaning: "One garland offered per face, expressing respect and devotion." },
      { icon: "🐘", name: "Carved wooden elephant", meaning: "An optional offering favoured by devotees, representing stability, wisdom, abundance and blessing." },
      { icon: "🎶", name: "Traditional Thai dance offering", meaning: "A way of showing respect and gratitude when a prayer is answered." },
    ],
    etiquetteTitle: "Etiquette",
    etiquette: [
      "Dress modestly, being mindful of the sanctity of the site",
      "Speak softly and be respectful of those who are worshipping",
      "Shoes may be worn, as the shrine is located outdoors",
      "Keep the area clean and follow any guidance or notices from on-site staff",
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

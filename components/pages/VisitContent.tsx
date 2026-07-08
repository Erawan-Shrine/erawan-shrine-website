"use client";

import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "ข้อมูลการเดินทาง",
    hoursTitle: "เวลาเปิด-ปิด",
    hours: "เปิดทุกวันเวลา 06:00 น. และปิดเวลา 22:00 น.",
    free: "ไม่มีค่าเข้าชม",
    addressTitle: "ที่อยู่",
    address: "สี่แยกราชประสงค์ ถนนราชดำริ แขวงลุมพินี เขตปทุมวัน กรุงเทพมหานคร 10330",
    mapTitle: "แผนที่ศาลพระพรหมเอราวัณ",
    travelTitle: "การเดินทาง",
    travel: [
      {
        icon: "🚉",
        text: "รถไฟฟ้า BTS สายสุขุมวิท ลงสถานีชิดลม (Chit Lom) ทางออก 8 เดินเชื่อมสกายวอล์กมาที่สี่แยกราชประสงค์",
      },
      {
        icon: "🚇",
        text: "รถไฟฟ้าใต้ดิน MRT: ไม่มีสถานีอยู่ติดศาลโดยตรง แนะนำเปลี่ยนขึ้น BTS ที่สถานีสุขุมวิท (เชื่อมต่อกับ MRT อโศก) แล้วนั่งมาลงสถานีชิดลม",
      },
      { icon: "🚌", text: "รถประจำทางสาย 15, 25, 40 และสายอื่น ๆ ที่ผ่านถนนราชดำริ" },
      {
        icon: "🚕",
        text: "แท็กซี่/แอปเรียกรถ ระบุจุดหมายว่า “ศาลพระพรหมเอราวัณ ราชประสงค์”",
      },
    ],
  },
  en: {
    title: "Visitor Information",
    hoursTitle: "Opening Hours",
    hours: "Opens daily at 6:00 AM and closes at 10:00 PM.",
    free: "Free admission",
    addressTitle: "Address",
    address: "Ratchaprasong Intersection, Ratchadamri Road, Lumphini, Pathum Wan, Bangkok 10330",
    mapTitle: "Erawan Shrine map",
    travelTitle: "Getting There",
    travel: [
      {
        icon: "🚉",
        text: "BTS Sukhumvit Line to Chit Lom station, Exit 8, then walk via the skywalk to Ratchaprasong intersection.",
      },
      {
        icon: "🚇",
        text: "MRT: There is no MRT station directly at the shrine. From MRT Sukhumvit station (interchange with BTS Asok), transfer to the BTS and ride to Chit Lom station.",
      },
      { icon: "🚌", text: "Bus routes 15, 25, 40 and others that run along Ratchadamri Road." },
      {
        icon: "🚕",
        text: "Taxi / ride-hailing app: give the destination as “Erawan Shrine, Ratchaprasong.”",
      },
    ],
  },
  zh: {
    title: "交通資訊",
    hoursTitle: "開放時間",
    hours: "每日上午6點開放，晚上10點關閉。",
    free: "免費參拜，無需門票",
    addressTitle: "地址",
    address: "泰國曼谷巴吞旺區拉差丹利路拉差帕頌路口，郵遞區號10330",
    mapTitle: "伊拉旺神壇地圖",
    travelTitle: "交通方式",
    travel: [
      {
        icon: "🚉",
        text: "搭乘BTS空鐵蘇坤蔚線至奇隆站（Chit Lom），由8號出口經天橋步行即可抵達拉差帕頌路口。",
      },
      {
        icon: "🚇",
        text: "MRT地鐵：神壇附近沒有直接連通的地鐵站，建議先搭至MRT蘇坤蔚站（可與BTS阿索克站轉乘），再轉乘BTS至奇隆站下車。",
      },
      { icon: "🚌", text: "可搭乘行經拉差丹利路的15、25、40路等多路公車。" },
      {
        icon: "🚕",
        text: "搭乘計程車或叫車軟體，目的地請說明「Erawan Shrine, Ratchaprasong」（伊拉旺神壇，拉差帕頌）。",
      },
    ],
  },
};

export default function VisitContent() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-10">
        {t.title}
      </h1>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6">
          <div className="text-2xl mb-2">🕒</div>
          <h2 className="font-semibold text-shrine-red mb-1">{t.hoursTitle}</h2>
          <p className="text-shrine-ink/80">{t.hours}</p>
          <p className="text-shrine-ink/60 text-sm mt-1">{t.free}</p>
        </div>
        <div className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6">
          <div className="text-2xl mb-2">📍</div>
          <h2 className="font-semibold text-shrine-red mb-1">{t.addressTitle}</h2>
          <p className="text-shrine-ink/80">{t.address}</p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-shrine-gold/30 card-shadow mb-10">
        <iframe
          title={t.mapTitle}
          src="https://www.google.com/maps?q=Erawan+Shrine+Bangkok&output=embed"
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <div className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6">
        <h2 className="font-semibold text-shrine-red mb-3">{t.travelTitle}</h2>
        <ul className="space-y-2 text-shrine-ink/80">
          {t.travel.map((item) => (
            <li key={item.text} className="flex gap-2">
              <span className="text-shrine-gold">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

"use client";

import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "ประวัติศาลพระพรหมเอราวัณ",
    paragraphs: [
      "ศาลพระพรหมเอราวัณ หรือชื่อทางการว่า “ศาลท้าวมหาพรหม” ตั้งอยู่บริเวณสี่แยกราชประสงค์ หน้าโรงแรมแกรนด์ ไฮแอท เอราวัณ กรุงเทพฯ เป็นหนึ่งในสถานที่สักการะสำคัญของกรุงเทพมหานคร ที่ได้รับความเคารพศรัทธาจากทั้งชาวไทยและชาวต่างชาติมาอย่างยาวนาน",
      "ศาลแห่งนี้สร้างขึ้นในปี พ.ศ. 2499 ในช่วงการก่อสร้างโรงแรมเอราวัณ ซึ่งเป็นโครงการโรงแรมของรัฐในขณะนั้น โดยระหว่างการก่อสร้างได้เกิดอุปสรรคและเหตุขัดข้องหลายประการ จึงมีการปรึกษาผู้เชี่ยวชาญด้านโหราศาสตร์และคติความเชื่อไทย ซึ่งได้แนะนำให้สร้างศาลเทพารักษ์ขึ้นเพื่อความเป็นสิริมงคลแก่สถานที่ และเป็นที่ยึดเหนี่ยวทางจิตใจของผู้คน",
      "องค์พระพรหมสี่หน้าได้รับการออกแบบและปั้นขึ้นโดยกรมศิลปากร ก่อนจะมีพิธีบวงสรวงและอัญเชิญขึ้นประดิษฐาน ณ ศาลแห่งนี้ เมื่อวันที่ 9 พฤศจิกายน พ.ศ. 2499 หลังจากนั้น การก่อสร้างโรงแรมเอราวัณจึงดำเนินต่อไปได้อย่างราบรื่น",
      "แม้พระพรหมจะเป็นเทพเจ้าสำคัญในศาสนาฮินดู แต่ในบริบทของศาลพระพรหมเอราวัณ องค์ท้าวมหาพรหมได้รับการเคารพบูชาในฐานะสิ่งศักดิ์สิทธิ์ผู้คุ้มครองสถานที่ตามคติความเชื่อแบบไทย สะท้อนถึงการผสมผสานระหว่างศาสนาฮินดู พุทธศาสนา และความเชื่อพื้นบ้านของไทยอย่างกลมกลืน",
      "ปัจจุบัน ศาลพระพรหมเอราวัณเป็นสถานที่สักการะที่มีผู้คนเดินทางมากราบไหว้ขอพรอย่างต่อเนื่องตลอดทั้งปี ทั้งชาวไทยและนักท่องเที่ยวจากหลากหลายประเทศ โดยเฉพาะจากจีน ฮ่องกง สิงคโปร์ ไต้หวัน และภูมิภาคเอเชีย ศาลแห่งนี้ยังเป็นที่รู้จักจากการถวายการแสดงนาฏศิลป์ไทย เพื่อแสดงความสำนึกในพระเมตตาเมื่อคำอธิษฐานสัมฤทธิ์ผล",
    ],
  },
  en: {
    title: "History of Erawan Shrine",
    paragraphs: [
      "The Erawan Shrine, officially known as the Thao Maha Phrom Shrine, is located at the Ratchaprasong intersection in front of the Grand Hyatt Erawan Bangkok. It is one of Bangkok's most revered places of worship, deeply respected by both Thai people and visitors from around the world.",
      "The shrine was established in 1956 during the construction of the original Erawan Hotel, a government hotel project at the time. During the construction period, several obstacles and difficulties arose. As a result, specialists in Thai astrology and traditional beliefs were consulted, and it was recommended that a shrine dedicated to a guardian deity be built to bring auspiciousness to the site and serve as a spiritual anchor for the people.",
      "The four-faced Brahma image was designed and crafted by the Fine Arts Department of Thailand. A consecration ceremony was held, and the image was enshrined at this location on 9 November 1956. Following the establishment of the shrine, the construction of the Erawan Hotel proceeded smoothly.",
      "Although Brahma is an important deity in Hinduism, within the context of the Erawan Shrine, Thao Maha Phrom is revered as a sacred guardian figure according to Thai spiritual beliefs. The shrine reflects the harmonious blending of Hinduism, Buddhism, and Thai folk traditions.",
      "Today, the Erawan Shrine continues to welcome worshippers throughout the year, including Thai devotees and international visitors from many countries, particularly China, Hong Kong, Singapore, Taiwan, and other parts of Asia. The shrine is also well known for traditional Thai dance offerings, performed as an expression of gratitude when prayers and wishes are fulfilled.",
    ],
  },
};

export default function HistoryContent() {
  const { lang } = useLanguage();
  const t = text[lang];

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-10">
        {t.title}
      </h1>

      <div className="space-y-6 text-shrine-ink/85 leading-relaxed">
        {t.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

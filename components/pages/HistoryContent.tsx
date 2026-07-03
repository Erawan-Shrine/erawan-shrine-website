"use client";

import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "ประวัติศาลพระพรหมเอราวัณ",
    paragraphs: [
      "ศาลพระพรหมเอราวัณ หรือชื่อทางการว่า “ศาลท้าวมหาพรหม” ตั้งอยู่บริเวณสี่แยกราชประสงค์ หน้าโรงแรมแกรนด์ ไฮแอท เอราวัณ กรุงเทพฯ สร้างขึ้นเมื่อปี พ.ศ. 2499 (ค.ศ. 1956) ในช่วงที่มีการก่อสร้างโรงแรมเอราวัณซึ่งเป็นของรัฐบาลในขณะนั้น",
      "ระหว่างการก่อสร้างโรงแรม เกิดอุบัติเหตุและอุปสรรคหลายครั้ง ทั้งงบประมาณบานปลาย คนงานได้รับบาดเจ็บ และการสูญหายของหินอ่อนอิตาลีทั้งลำเรือที่สั่งมาใช้ก่อสร้าง จึงมีความเชื่อว่าการวางศิลาฤกษ์ผิดฤกษ์ยามทำให้เกิดเหตุไม่ดีขึ้น ประกอบกับบริเวณสี่แยกราชประสงค์ในอดีตเคยถูกใช้เป็นที่ประจานนักโทษ โหรผู้ทำนายจึงแนะนำให้สร้างศาลเทพารักษ์ขึ้นเพื่อขจัดเคราะห์ร้าย",
      "องค์พระพรหมสี่หน้าถูกออกแบบและปั้นขึ้นโดยกรมศิลปากร และประกอบพิธีบวงสรวงอัญเชิญขึ้นประดิษฐาน ณ ศาลแห่งนี้เมื่อวันที่ 9 พฤศจิกายน พ.ศ. 2499 หลังจากนั้นการก่อสร้างโรงแรมจึงดำเนินต่อไปได้โดยราบรื่น",
      "แม้พระพรหมจะเป็นเทพเจ้าในศาสนาฮินดู แต่ในบริบทของศาลพระพรหมเอราวัณ ได้รับการเคารพบูชาในฐานะเทพารักษ์ผู้ปกปักคุ้มครองตามความเชื่อพื้นบ้านของไทย สะท้อนถึงการผสมผสานกันระหว่างศาสนาฮินดูและพุทธศาสนาอย่างกลมกลืน",
      "ปัจจุบันศาลพระพรหมเอราวัณเป็นหนึ่งในสถานที่สักการะที่มีผู้คนทั้งชาวไทยและชาวต่างชาติ โดยเฉพาะนักท่องเที่ยวจากจีน ฮ่องกง สิงคโปร์ และไต้หวัน เดินทางมากราบไหว้ขอพรอย่างต่อเนื่องตลอดทั้งปี และเป็นที่นิยมของผู้ที่ต้องการว่าจ้างคณะรำไทยมาแก้บนเมื่อคำอธิษฐานสัมฤทธิ์ผล",
    ],
  },
  en: {
    title: "History of Erawan Shrine",
    paragraphs: [
      "Erawan Shrine, officially known as the Thao Maha Phrom Shrine, is located at the Ratchaprasong intersection in front of the Grand Hyatt Erawan Bangkok. It was built in 1956 during the construction of the then government-owned Erawan Hotel.",
      "During the hotel's construction, a series of mishaps occurred — budget overruns, injuries to laborers, and the loss of a shipload of Italian marble intended for the building. It was believed that the hotel's foundation had been laid on an inauspicious date. The Ratchaprasong intersection had also once been used to publicly display criminals. An astrologer advised building a shrine to a guardian deity to counter the negative influences.",
      "The four-faced Brahma image was designed and cast by the Fine Arts Department and was ceremonially enshrined on 9 November 1956. Construction of the hotel then proceeded without further incident.",
      "Although Brahma is a deity of Hinduism, in the context of Erawan Shrine he is worshipped as a guardian spirit within Thai folk belief, reflecting a harmonious blending of Hinduism and Buddhism.",
      "Today, Erawan Shrine is one of Bangkok's most visited places of worship, drawing both Thai devotees and international visitors — especially from China, Hong Kong, Singapore, and Taiwan — year-round. It is also popular among those who hire Thai classical dance troupes to fulfil a vow after a prayer has been answered.",
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

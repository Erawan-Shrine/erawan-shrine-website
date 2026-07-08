"use client";

import { useLanguage } from "@/context/LanguageContext";
import { thaiText } from "@/lib/thaiText";

const text = {
  th: {
    title: "ประวัติศาลพระพรหมเอราวัณ",
    paragraphs: [
      "ศาลพระพรหมเอราวัณ หรือชื่อทางการว่า “ศาลท้าวมหาพรหม” ตั้งอยู่บริเวณสี่แยกราชประสงค์ หน้าโรงแรมแกรนด์ ไฮแอท เอราวัณ กรุงเทพฯ เป็นหนึ่งในสถานที่สักการะสำคัญของกรุงเทพมหานคร ที่ได้รับความเคารพศรัทธาจากทั้งชาวไทยและชาวต่างชาติมาอย่างยาวนาน",
      "ศาลแห่งนี้สร้างขึ้นในปี พ.ศ. 2499 ในช่วงการก่อสร้างโรงแรมเอราวัณในขณะนั้นได้เกิดอุปสรรคและเหตุขัดข้องหลายประการ จึงมีการปรึกษาผู้เชี่ยวชาญด้านโหราศาสตร์และคติความเชื่อไทย ซึ่งได้แนะนำให้สร้างศาลเทพารักษ์ขึ้นเพื่อความเป็นสิริมงคลแก่สถานที่ และเป็นที่ยึดเหนี่ยวทางจิตใจของผู้คน",
      "องค์พระพรหมสี่หน้าได้รับการออกแบบและปั้นขึ้นโดยกรมศิลปากร ก่อนจะมีพิธีบวงสรวงและอัญเชิญขึ้นประดิษฐาน ณ ศาลแห่งนี้ เมื่อวันที่ 9 พฤศจิกายน พ.ศ. 2499 หลังจากนั้น การก่อสร้างโรงแรมเอราวัณจึงดำเนินต่อไปได้อย่างราบรื่น",
      "แม้พระพรหมจะเป็นเทพเจ้าสำคัญในศาสนาฮินดู แต่ในบริบทของศาลพระพรหมเอราวัณ องค์ท้าวมหาพรหมได้รับการเคารพบูชาในฐานะสิ่งศักดิ์สิทธิ์ผู้คุ้มครองสถานที่ตามคติความเชื่อแบบไทย สะท้อนถึงการผสมผสานระหว่างศาสนาฮินดู พุทธศาสนา และความเชื่อพื้นบ้านของไทยอย่างกลมกลืน",
      "ปัจจุบัน ศาลพระพรหมเอราวัณเป็นสถานที่สักการะที่มีผู้คนเดินทางมากราบไหว้ขอพรอย่างต่อเนื่องตลอดทั้งปี ทั้งชาวไทยและนักท่องเที่ยวจากหลากหลายประเทศ โดยเฉพาะจากจีน ฮ่องกง สิงคโปร์ ไต้หวัน และภูมิภาคเอเชีย",
    ],
  },
  en: {
    title: "History of Erawan Shrine",
    paragraphs: [
      "The Erawan Shrine, officially known as the Thao Maha Phrom Shrine, is located at the Ratchaprasong intersection in front of the Grand Hyatt Erawan Bangkok. It is one of Bangkok's most revered places of worship, deeply respected by both Thai people and visitors from around the world.",
      "The shrine was established in 1956 during the construction of the original Erawan Hotel. During the construction period, several obstacles and difficulties arose. As a result, specialists in Thai astrology and traditional beliefs were consulted, and it was recommended that a shrine dedicated to a guardian deity be built to bring auspiciousness to the site and serve as a spiritual anchor for the people.",
      "The four-faced Brahma image was designed and crafted by the Fine Arts Department of Thailand. A consecration ceremony was held, and the image was enshrined at this location on 9 November 1956. Following the establishment of the shrine, the construction of the Erawan Hotel proceeded smoothly.",
      "Although Brahma is an important deity in Hinduism, within the context of the Erawan Shrine, Thao Maha Phrom is revered as a sacred guardian figure according to Thai spiritual beliefs. The shrine reflects the harmonious blending of Hinduism, Buddhism, and Thai folk traditions.",
      "Today, the Erawan Shrine continues to welcome worshippers throughout the year, including Thai devotees and international visitors from many countries, particularly China, Hong Kong, Singapore, Taiwan, and other parts of Asia.",
    ],
  },
  zh: {
    title: "伊拉旺神壇的歷史",
    paragraphs: [
      "伊拉旺神壇，正式名稱為「他瓦瑪哈梵天神壇」，位於曼谷拉差帕頌路口、君悅酒店（Grand Hyatt Erawan Bangkok）前方，是曼谷最受敬重的參拜地點之一，長久以來深受泰國民眾與世界各地訪客的敬仰。",
      "神壇建於西元1956年，當時正值伊拉旺酒店興建期間，工程過程中屢屢遭遇各種阻礙與波折。因此業主諮詢了泰國占星與傳統信仰專家的意見，經建議興建一座守護神壇，以為此地帶來吉祥，並成為人們的心靈依歸。",
      "四面梵天神像由泰國藝術廳設計並塑造完成，其後舉行祈福儀式，並於1956年11月9日正式迎奉安座於此。自此之後，伊拉旺酒店的興建工程便得以順利進行。",
      "雖然梵天在印度教中是重要的神祇，但在伊拉旺神壇的信仰脈絡裡，他瓦瑪哈梵天被視為守護此地的聖靈，依循泰式信仰受到尊崇與供奉，體現出印度教、佛教與泰國民間信仰彼此交融的獨特樣貌。",
      "如今，伊拉旺神壇終年香火不絕，泰國信眾與來自世界各地的訪客絡繹不絕地前來參拜祈福，尤其以來自中國大陸、香港、新加坡、台灣及其他亞洲地區的訪客最為常見。",
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
          <p key={i}>{lang === "th" ? thaiText(p) : p}</p>
        ))}
      </div>
    </div>
  );
}

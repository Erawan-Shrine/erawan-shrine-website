"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const text = {
  th: {
    title: "แกลเลอรีภาพ",
    subtitle: "ภาพบรรยากาศศาลพระพรหมเอราวัณ",
  },
  en: {
    title: "Gallery",
    subtitle: "Photos of Erawan Shrine",
  },
  zh: {
    title: "相片集",
    subtitle: "伊拉旺神壇現場相片",
  },
};

const images = [
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084289/ErawanShrine1_zy7uce.jpg",
    alt: {
      th: "มุมมองจากมุมสูงของลานศาลพระพรหมเอราวัณและผู้มาสักการะ หน้าโรงแรมแกรนด์ ไฮแอท เอราวัณ",
      en: "Aerial view of the Erawan Shrine plaza and worshippers in front of the Grand Hyatt Erawan Bangkok",
      zh: "從高處俯瞰伊拉旺神壇廣場與前來參拜的信眾，背景為曼谷君悅酒店",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg",
    alt: {
      th: "องค์พระพรหมสี่หน้าปิดทองภายในศาลา ประดับด้วยพวงมาลัยดอกดาวเรือง",
      en: "The gold Four-Faced Brahma image inside its shrine pavilion, decorated with marigold garlands",
      zh: "供奉於亭閣內的金色四面梵天神像，四周裝飾著萬壽菊花環",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084289/ErawanShrine3_dvoewt.jpg",
    alt: {
      th: "ศาลาประดิษฐานพระพรหมเอราวัณ มองเห็นรางรถไฟฟ้า BTS ด้านหลัง",
      en: "The Brahma shrine pavilion with the BTS Skytrain tracks visible behind it",
      zh: "供奉梵天神像的亭閣，後方可見BTS空鐵軌道",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine4_ie8skm.jpg",
    alt: {
      th: "ศาลาพระพรหมเอราวัณกับพวงมาลัยดอกดาวเรืองเบื้องหน้า และตึกกระจกด้านหลัง",
      en: "The shrine pavilion with marigold garland offerings in the foreground and modern glass buildings behind",
      zh: "神壇亭閣前方擺放著萬壽菊花環供品，背景為現代玻璃帷幕大樓",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine5_dew3wa.jpg",
    alt: {
      th: "ภาพระยะใกล้พระพักตร์และพระวรกายปิดทองขององค์พระพรหมสี่หน้า",
      en: "Close-up of the gilded face and figure of the Four-Faced Brahma image",
      zh: "四面梵天神像金色面容與身軀的特寫",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine6_tvu8py.jpg",
    alt: {
      th: "องค์พระพรหมมองผ่านซุ้มกระจกสีของศาลา พร้อมพานดอกไม้ถวาย",
      en: "The Brahma image viewed through the mirrored glass archway of the pavilion, with a floral offering tray",
      zh: "透過亭閣彩色鏡面拱門所見的梵天神像，前方擺放著獻花供盤",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine7_bfmjia.jpg",
    alt: {
      th: "ศาลาพระพรหมเอราวัณยามเย็น มีพวงมาลัยดอกดาวเรืองและช้างไม้แกะสลักวางถวาย",
      en: "The shrine pavilion with marigold garlands and carved elephant offerings placed around its base",
      zh: "傍晚時分的神壇亭閣，基座周圍擺放著萬壽菊花環與木雕大象供品",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine8_eyeta0.jpg",
    alt: {
      th: "มุมมองจากด้านบนของศาลาพระพรหม มีนางรำกำลังแสดงถวายและผู้คนมากราบไหว้",
      en: "Elevated view of the shrine pavilion with traditional dancers performing an offering and devotees paying respects",
      zh: "從高處拍攝的神壇亭閣，可見舞者正在表演還願舞蹈，信眾則在一旁參拜",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084291/ErawanShrine10_oz4lhv.jpg",
    alt: {
      th: "แผงจำหน่ายช้างไม้แกะสลักและเครื่องสักการะบริเวณศาลพระพรหมเอราวัณ",
      en: "A vendor stall selling carved elephant statues and offerings near Erawan Shrine",
      zh: "伊拉旺神壇附近販售木雕大象與供品的攤位",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine9_k4yppc.jpg",
    alt: {
      th: "นางรำไทยในชุดโบราณกำลังแสดงรำถวายแก้บนที่ศาลพระพรหมเอราวัณ",
      en: "Traditional Thai dancers in classical costume performing a votive dance offering at Erawan Shrine",
      zh: "身著傳統服飾的泰國舞者在伊拉旺神壇表演還願舞蹈",
    },
  },
];

export default function GalleryContent() {
  const { lang } = useLanguage();
  const t = text[lang];
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-3">
        {t.title}
      </h1>
      <p className="text-center text-shrine-ink/60 max-w-xl mx-auto mb-10 text-sm">
        {t.subtitle}
      </p>

      {/* Strict grid, left-to-right / top-to-bottom in the exact given order.
          Row height follows the tallest image in that row, so nothing is cropped. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-start">
        {images.map((img) => (
          <button
            key={img.src}
            onClick={() => setSelected({ src: img.src, alt: img.alt[lang] })}
            className="block w-full rounded-xl overflow-hidden border border-shrine-gold/30 card-shadow bg-shrine-paper"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt[lang]}
              className="w-full h-auto block"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setSelected(null)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-h-[90vh] max-w-[95vw] w-auto h-auto object-contain rounded-lg"
          />
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white text-3xl leading-none"
            aria-label="close"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}

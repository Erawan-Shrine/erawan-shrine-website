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
};

const images = [
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084289/ErawanShrine1_zy7uce.jpg",
    alt: {
      th: "มุมมองจากมุมสูงของลานศาลพระพรหมเอราวัณและผู้มาสักการะ หน้าโรงแรมแกรนด์ ไฮแอท เอราวัณ",
      en: "Aerial view of the Erawan Shrine plaza and worshippers in front of the Grand Hyatt Erawan Bangkok",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg",
    alt: {
      th: "องค์พระพรหมสี่หน้าปิดทองภายในศาลา ประดับด้วยพวงมาลัยดอกดาวเรือง",
      en: "The gold Four-Faced Brahma image inside its shrine pavilion, decorated with marigold garlands",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084289/ErawanShrine3_dvoewt.jpg",
    alt: {
      th: "ศาลาประดิษฐานพระพรหมเอราวัณ มองเห็นรางรถไฟฟ้า BTS ด้านหลัง",
      en: "The Brahma shrine pavilion with the BTS Skytrain tracks visible behind it",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine4_ie8skm.jpg",
    alt: {
      th: "ศาลาพระพรหมเอราวัณกับพวงมาลัยดอกดาวเรืองเบื้องหน้า และตึกกระจกด้านหลัง",
      en: "The shrine pavilion with marigold garland offerings in the foreground and modern glass buildings behind",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine5_dew3wa.jpg",
    alt: {
      th: "ภาพระยะใกล้พระพักตร์และพระวรกายปิดทองขององค์พระพรหมสี่หน้า",
      en: "Close-up of the gilded face and figure of the Four-Faced Brahma image",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine6_tvu8py.jpg",
    alt: {
      th: "องค์พระพรหมมองผ่านซุ้มกระจกสีของศาลา พร้อมพานดอกไม้ถวาย",
      en: "The Brahma image viewed through the mirrored glass archway of the pavilion, with a floral offering tray",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine7_bfmjia.jpg",
    alt: {
      th: "ศาลาพระพรหมเอราวัณยามเย็น มีพวงมาลัยดอกดาวเรืองและช้างไม้แกะสลักวางถวาย",
      en: "The shrine pavilion with marigold garlands and carved elephant offerings placed around its base",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine8_eyeta0.jpg",
    alt: {
      th: "มุมมองจากด้านบนของศาลาพระพรหม มีนางรำกำลังแสดงถวายและผู้คนมากราบไหว้",
      en: "Elevated view of the shrine pavilion with traditional dancers performing an offering and devotees paying respects",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084291/ErawanShrine10_oz4lhv.jpg",
    alt: {
      th: "แผงจำหน่ายช้างไม้แกะสลักและเครื่องสักการะบริเวณศาลพระพรหมเอราวัณ",
      en: "A vendor stall selling carved elephant statues and offerings near Erawan Shrine",
    },
  },
  {
    src: "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine9_k4yppc.jpg",
    alt: {
      th: "นางรำไทยในชุดโบราณกำลังแสดงรำถวายแก้บนที่ศาลพระพรหมเอราวัณ",
      en: "Traditional Thai dancers in classical costume performing a votive dance offering at Erawan Shrine",
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

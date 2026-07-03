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
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084289/ErawanShrine1_zy7uce.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084289/ErawanShrine3_dvoewt.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine4_ie8skm.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine5_dew3wa.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine6_tvu8py.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine7_bfmjia.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine8_eyeta0.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084291/ErawanShrine10_oz4lhv.jpg",
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine9_k4yppc.jpg",
];

export default function GalleryContent() {
  const { lang } = useLanguage();
  const t = text[lang];
  const [selected, setSelected] = useState<string | null>(null);

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
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setSelected(src)}
            className="block w-full rounded-xl overflow-hidden border border-shrine-gold/30 card-shadow bg-shrine-paper"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Erawan Shrine ${i + 1}`}
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
            src={selected}
            alt="Erawan Shrine"
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

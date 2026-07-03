"use client";

import { useState } from "react";

type Lang = "th" | "en" | "zh";

const chants: Record<Lang, { title: string; lines: string[]; note: string }> = {
  th: {
    title: "คาถาบูชาพระพรหม (ท้าวมหาพรหม)",
    note: "สวดด้วยความเคารพและจิตใจที่สงบ สามารถสวดซ้ำได้ 3 หรือ 9 จบ",
    lines: [
      "โอมปะระเมสะ นะมัสการัม",
      "องการะนิสสะวะรัง พรหมเวสสะยัม",
      "ภูปัสสะวะวิษณุ",
      "ไวยะทานะโมโทติ ลูกปัมทะระมา",
      "ยิกยานัง ยะไวยะลา คะมุลัม",
      "สะทา นันตะระ",
      "วิมุสะตินัน นะมัตเต นะมัตตะเร",
      "จะ อะการัง ตโถวาจะ",
      "เอตามาตาระยัต ตะมัน",
      "ตะรามา กัตถะนารัมลา จะสะระวะ",
      "ปะติตัม สัมโภพะกลโล",
      "ทิวะทิยัม มะตัมยะ",
    ],
  },
  en: {
    title: "Four Face Brahma Bhucha Chanting",
    note: "Chant with respect and a calm mind. You may repeat the chant 3 or 9 times.",
    lines: [
      "Om paramesa namaskaram",
      "Ongkara nissavarang",
      "Brahmavessayam",
      "pupassavavisanu",
      "Vaiyadhanamodhoti",
      "lukabamdharama",
      "yikyanang yavaiyala kamulam",
      "sadha nandara",
      "vimusatinan namatte namuttare",
      "ca akarang tathovaca",
      "etamatarayat taman",
      "tarama katthanaramla casarava",
      "patitam sambhophakalalo",
      "dhivadhiyam matamya",
    ],
  },
  zh: {
    title: "四面佛經咒",
    note: "请以恭敬、平静的心持诵。可持诵 3 遍或 9 遍。",
    lines: [
      "吽叭喇咪薩 那媽薩噶嚷",
      "吽噶喇呢薩哇嚷 嘭喂薩呀么",
      "菩帕薩哇微薩奴",
      "哇呀嗒那牟豆啼",
      "嚕噶叭嗒喇嘛",
      "咿呀嚷 呀哇呀喇 喀牟喇",
      "薩嗒 喃噠喇",
      "微牟薩底喃 那媽嘚",
      "那媽嗒喏",
      "咋 阿嘎嚷 噠豆哇咋",
      "誒噠媽噠喇呀 噠蔓",
      "噠喇媽 咖嗒呐喇么喇",
      "咋薩喇哇",
      "叭底噠 薩吥帕噶喇嘍",
      "啼哇啼吖 嘛噠呀",
    ],
  },
};

const tabLabels: Record<Lang, string> = {
  th: "ไทย",
  en: "English",
  zh: "中文",
};

export default function PrayerChant() {
  const [lang, setLang] = useState<Lang>("th");
  const chant = chants[lang];

  return (
    <div
      id="prayer"
      className="relative rounded-2xl border border-shrine-gold/40 bg-shrine-paper card-shadow px-5 py-8 sm:px-10 sm:py-12"
    >
      <div className="absolute inset-0 rounded-2xl bg-mandala pointer-events-none" />

      <div className="relative">
        <div className="divider-ornament mb-6">
          <span className="text-shrine-gold text-xs">
            บทสวดหลัก
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-shrine-red text-center mb-6">
          {chant.title}
        </h2>

        <p className="text-center text-xs text-shrine-ink/50 mb-3">
          เลือกภาษาบทสวด · Select chant language
        </p>
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          {(Object.keys(tabLabels) as Lang[]).map((key) => (
            <button
              key={key}
              onClick={() => setLang(key)}
              className={`min-w-[110px] px-6 py-3 rounded-full text-lg sm:text-xl font-bold border-2 shadow-sm transition-colors ${
                lang === key
                  ? "bg-shrine-red text-shrine-cream border-shrine-red scale-105"
                  : "border-shrine-gold/60 text-shrine-red bg-shrine-cream hover:bg-shrine-gold/10"
              }`}
            >
              {tabLabels[key]}
            </button>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center space-y-2 text-lg sm:text-xl leading-relaxed text-shrine-ink">
          {chant.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <p className="text-center text-xs text-shrine-ink/50 mt-8">
          {chant.note}
        </p>
      </div>
    </div>
  );
}

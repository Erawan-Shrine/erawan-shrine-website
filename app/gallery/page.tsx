import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "แกลเลอรี | ศาลพระพรหมเอราวัณ",
  description: "ภาพบรรยากาศศาลพระพรหมเอราวัณ",
};

// TODO: แทนที่ placeholder ด้วยรูปถ่ายจริง — วางไฟล์ไว้ใน /public/gallery/
// แล้วเปลี่ยนแต่ละ item เป็น <Image src="/gallery/xxx.jpg" ... />
const placeholders = Array.from({ length: 8 }, (_, i) => i + 1);

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-3">
        แกลเลอรีภาพ
      </h1>
      <p className="text-center text-shrine-ink/60 max-w-xl mx-auto mb-10 text-sm">
        ยังไม่มีรูปภาพจริง — ช่องด้านล่างเป็นตัวอย่างตำแหน่งสำหรับใส่ภาพถ่ายบรรยากาศศาล
        องค์พระพรหม และพิธีกรรมต่าง ๆ ในอนาคต
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {placeholders.map((n) => (
          <div
            key={n}
            className="aspect-square rounded-xl bg-gradient-to-br from-shrine-gold/20 to-shrine-red/10 border border-dashed border-shrine-gold/40 flex items-center justify-center text-shrine-gold/60 text-3xl"
          >
            🖼️
          </div>
        ))}
      </div>
    </div>
  );
}

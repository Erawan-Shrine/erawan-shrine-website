import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ข้อมูลการเดินทาง | ศาลพระพรหมเอราวัณ",
  description: "แผนที่ เวลาเปิด-ปิด และวิธีเดินทางมาศาลพระพรหมเอราวัณ",
};

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-14">
      <h1 className="font-display text-3xl sm:text-4xl font-bold text-shrine-red text-center mb-10">
        ข้อมูลการเดินทาง
      </h1>

      <div className="grid sm:grid-cols-2 gap-5 mb-10">
        <div className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6">
          <div className="text-2xl mb-2">🕒</div>
          <h2 className="font-semibold text-shrine-red mb-1">เวลาเปิด-ปิด</h2>
          <p className="text-shrine-ink/80">ทุกวัน 06:00 – 22:00 น.</p>
          <p className="text-shrine-ink/60 text-sm mt-1">ไม่มีค่าเข้าชม</p>
        </div>
        <div className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6">
          <div className="text-2xl mb-2">📍</div>
          <h2 className="font-semibold text-shrine-red mb-1">ที่อยู่</h2>
          <p className="text-shrine-ink/80">
            สี่แยกราชประสงค์ ถนนราชดำริ แขวงลุมพินี เขตปทุมวัน
            กรุงเทพมหานคร 10330
          </p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-shrine-gold/30 card-shadow mb-10">
        <iframe
          title="แผนที่ศาลพระพรหมเอราวัณ"
          src="https://www.google.com/maps?q=Erawan+Shrine+Bangkok&output=embed"
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
        />
      </div>

      <div className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6">
        <h2 className="font-semibold text-shrine-red mb-3">การเดินทาง</h2>
        <ul className="space-y-2 text-shrine-ink/80">
          <li className="flex gap-2">
            <span className="text-shrine-gold">🚉</span>
            <span>
              รถไฟฟ้า BTS สายสุขุมวิท ลงสถานีชิดลม (Chit Lom) ทางออก 8
              เดินเชื่อมสกายวอล์กมาที่สี่แยกราชประสงค์
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-shrine-gold">🚌</span>
            <span>รถประจำทางสาย 15, 25, 40 และสายอื่น ๆ ที่ผ่านถนนราชดำริ</span>
          </li>
          <li className="flex gap-2">
            <span className="text-shrine-gold">🚕</span>
            <span>
              แท็กซี่/แอปเรียกรถ ระบุจุดหมายว่า &ldquo;ศาลพระพรหมเอราวัณ
              ราชประสงค์&rdquo;
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

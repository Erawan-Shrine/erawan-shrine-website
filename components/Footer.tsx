export default function Footer() {
  return (
    <footer className="bg-shrine-redDark text-shrine-cream/80 mt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <h3 className="text-shrine-goldLight font-display text-lg mb-2">
            ศาลพระพรหมเอราวัณ
          </h3>
          <p className="leading-relaxed">
            สี่แยกราชประสงค์ ถนนราชดำริ แขวงลุมพินี
            <br />
            เขตปทุมวัน กรุงเทพมหานคร 10330
          </p>
        </div>
        <div>
          <h3 className="text-shrine-goldLight font-display text-lg mb-2">
            เวลาเปิด-ปิด
          </h3>
          <p className="leading-relaxed">
            เปิดให้สักการะทุกวัน 06:00 – 22:00 น.
            <br />
            ไม่มีค่าเข้าชม
          </p>
        </div>
        <div>
          <h3 className="text-shrine-goldLight font-display text-lg mb-2">
            เกี่ยวกับเว็บไซต์นี้
          </h3>
          <p className="leading-relaxed">
            จัดทำขึ้นเพื่อเผยแพร่บทสวดมนต์บูชาพระพรหมและข้อมูลการสักการะ
            สำหรับผู้ศรัทธาที่สแกน QR Code ณ ศาลพระพรหมเอราวัณ
          </p>
        </div>
      </div>
      <div className="border-t border-shrine-gold/20 py-4 text-center text-xs text-shrine-cream/50">
        © {new Date().getFullYear()} ศาลพระพรหมเอราวัณ — สร้างด้วยศรัทธา
      </div>
    </footer>
  );
}

import Link from "next/link";
import PrayerChant from "@/components/PrayerChant";

const faces = [
  { title: "หน้าที่ 1", meaning: "หน้าที่การงาน", icon: "💼" },
  { title: "หน้าที่ 2", meaning: "ความรักและครอบครัว", icon: "❤️" },
  { title: "หน้าที่ 3", meaning: "โชคลาภและทรัพย์สิน", icon: "💰" },
  { title: "หน้าที่ 4", meaning: "สุขภาพและความปลอดภัย", icon: "🌿" },
];

const quickLinks = [
  {
    href: "/worship",
    title: "วิธีสักการะ",
    desc: "ขั้นตอนไหว้ เครื่องสักการะ และข้อควรปฏิบัติ",
    icon: "🕯️",
  },
  {
    href: "/history",
    title: "ประวัติศาลพระพรหม",
    desc: "ความเป็นมาของศาลพระพรหมเอราวัณตั้งแต่ พ.ศ. 2499",
    icon: "📜",
  },
  {
    href: "/visit",
    title: "ข้อมูลการเดินทาง",
    desc: "แผนที่ เวลาเปิด-ปิด และการเดินทางมาศาล",
    icon: "🗺️",
  },
  {
    href: "/gallery",
    title: "แกลเลอรีภาพ",
    desc: "ภาพบรรยากาศศาลพระพรหมเอราวัณ",
    icon: "🖼️",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-shrine-redDark via-shrine-red to-shrine-redDark text-shrine-cream">
        <div className="absolute inset-0 opacity-20 bg-mandala" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 py-14 sm:py-20 text-center">
          <div className="text-4xl mb-3 float-slow">🙏</div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-shrine-goldLight mb-3">
            ศาลพระพรหมเอราวัณ
          </h1>
          <p className="text-sm sm:text-base text-shrine-cream/80 mb-1">
            Erawan Shrine — Thao Maha Phrom, Ratchaprasong, Bangkok
          </p>
          <p className="text-sm sm:text-base text-shrine-cream/70 max-w-xl mx-auto">
            บทสวดบูชาพระพรหมสี่หน้า พร้อมคำแปลไทย · อังกฤษ · จีน
            สำหรับผู้ศรัทธาที่มาสักการะ ณ ศาลพระพรหมเอราวัณ
          </p>
        </div>
      </section>

      {/* Prayer — primary content, this is what the QR at the shrine links to */}
      <section className="mx-auto max-w-3xl px-4 sm:px-6 -mt-8 sm:-mt-10 pb-4">
        <PrayerChant />
      </section>

      {/* Four faces */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 py-14">
        <div className="divider-ornament mb-3 max-w-xs mx-auto">
          <span className="text-shrine-gold text-xs tracking-[0.3em] uppercase whitespace-nowrap">
            ความหมายสี่หน้า
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-semibold text-shrine-red text-center mb-8">
          พระพรหมสี่หน้า ประทานพรครบทุกด้าน
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {faces.map((f) => (
            <div
              key={f.title}
              className="rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-5 text-center"
            >
              <div className="text-3xl mb-2">{f.icon}</div>
              <div className="text-xs text-shrine-gold uppercase tracking-wide mb-1">
                {f.title}
              </div>
              <div className="font-medium text-shrine-ink">{f.meaning}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-shrine-ink/50 mt-6">
          เดินเวียนขวา (ตามเข็มนาฬิกา) ครบทั้ง 4 หน้า พร้อมจุดธูป 3 ดอก
          วางเทียน 1 เล่ม และพวงมาลัย 1 พวงในแต่ละหน้า
        </p>
      </section>

      {/* Quick links */}
      <section className="bg-shrine-red/5 py-14">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-shrine-red text-center mb-8">
            เรียนรู้เพิ่มเติม
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {quickLinks.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="group rounded-xl bg-shrine-paper border border-shrine-gold/30 card-shadow p-6 flex items-start gap-4 hover:border-shrine-gold transition-colors"
              >
                <div className="text-3xl">{q.icon}</div>
                <div>
                  <h3 className="font-semibold text-shrine-red group-hover:text-shrine-gold transition-colors">
                    {q.title}
                  </h3>
                  <p className="text-sm text-shrine-ink/70 mt-1">{q.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import type { Metadata } from "next";
import Script from "next/script";
import VisitContent from "@/components/pages/VisitContent";

export const metadata: Metadata = {
  title: "ข้อมูลการเดินทาง | ศาลพระพรหมเอราวัณ",
  description:
    "ศาลพระพรหมเอราวัณเปิดกี่โมง ปิดกี่โมง แผนที่ เวลาเปิด-ปิด และวิธีเดินทางมาศาลพระพรหมเอราวัณ",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ศาลพระพรหมเอราวัณเปิด-ปิดกี่โมง?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ศาลพระพรหมเอราวัณเปิดให้เข้าสักการะทุกวัน เริ่มตั้งแต่เวลา 06:00 น. และปิดเวลา 22:00 น. เวลาเปิด-ปิดอาจมีการเปลี่ยนแปลงตามประกาศของพื้นที่",
      },
    },
    {
      "@type": "Question",
      name: "ศาลพระพรหมเอราวัณมีค่าเข้าชมหรือไม่?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ไม่มีค่าเข้าชม ศาลพระพรหมเอราวัณเปิดให้ประชาชนและนักท่องเที่ยวเข้าสักการะได้ฟรีทุกวัน",
      },
    },
  ],
};

export default function VisitPage() {
  return (
    <>
      <Script id="visit-faq-structured-data" type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(faqStructuredData)}
      </Script>
      <VisitContent />
    </>
  );
}

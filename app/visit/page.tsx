import type { Metadata } from "next";
import VisitContent from "@/components/pages/VisitContent";

export const metadata: Metadata = {
  title: "ข้อมูลการเดินทาง | ศาลพระพรหมเอราวัณ",
  description: "แผนที่ เวลาเปิด-ปิด และวิธีเดินทางมาศาลพระพรหมเอราวัณ",
};

export default function VisitPage() {
  return <VisitContent />;
}

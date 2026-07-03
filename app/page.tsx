import type { Metadata } from "next";
import HomeContent from "@/components/pages/HomeContent";

export const metadata: Metadata = {
  title: "ศาลพระพรหมเอราวัณ | Erawan Shrine — บทสวดมนต์และวิธีสักการะ",
  description:
    "บทสวดบูชาพระพรหมสี่หน้า (ท้าวมหาพรหม) ศาลพระพรหมเอราวัณ พร้อมคำแปลไทย-อังกฤษ-จีน วิธีการสักการะ ประวัติศาล และข้อมูลการเดินทาง",
};

export default function Home() {
  return <HomeContent />;
}

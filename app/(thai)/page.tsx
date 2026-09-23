import { pageMetadata } from "@/lib/metadata";
import HomeContent from "@/components/pages/HomeContent";

export const metadata = pageMetadata("/", "ศาลพระพรหมเอราวัณ | Erawan Shrine — บทสวดมนต์และวิธีสักการะ", "บทสวดบูชาพระพรหมสี่หน้า (ท้าวมหาพรหม) ศาลพระพรหมเอราวัณ พร้อมคำแปลไทย-อังกฤษ-จีน วิธีการสักการะ ประวัติศาล และข้อมูลการเดินทาง");

export default function Home() {
  return <HomeContent />;
}

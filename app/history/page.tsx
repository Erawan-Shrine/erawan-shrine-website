import type { Metadata } from "next";
import HistoryContent from "@/components/pages/HistoryContent";

export const metadata: Metadata = {
  title: "ประวัติศาลพระพรหมเอราวัณ",
  description: "ความเป็นมาของศาลพระพรหมเอราวัณ ตั้งแต่ พ.ศ. 2499 จนถึงปัจจุบัน",
};

export default function HistoryPage() {
  return <HistoryContent />;
}

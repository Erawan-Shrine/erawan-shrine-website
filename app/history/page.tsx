import { pageMetadata } from "@/lib/metadata";
import HistoryContent from "@/components/pages/HistoryContent";

export const metadata = pageMetadata("/history", "ประวัติศาลพระพรหมเอราวัณ", "ความเป็นมาของศาลพระพรหมเอราวัณ ตั้งแต่ พ.ศ. 2499 จนถึงปัจจุบัน");

export default function HistoryPage() {
  return <HistoryContent />;
}

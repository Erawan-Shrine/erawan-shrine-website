import { pageMetadata } from "@/lib/metadata";
import WorshipContent from "@/components/pages/WorshipContent";

export const metadata = pageMetadata("/worship", "วิธีไหว้พระพรหมเอราวัณ | เครื่องสักการะและข้อควรปฏิบัติ", "ขั้นตอนการสักการะพระพรหม เครื่องสักการะ และข้อควรปฏิบัติ");

export default function WorshipPage() {
  return <WorshipContent />;
}

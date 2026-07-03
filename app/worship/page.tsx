import type { Metadata } from "next";
import WorshipContent from "@/components/pages/WorshipContent";

export const metadata: Metadata = {
  title: "วิธีสักการะ | ศาลพระพรหมเอราวัณ",
  description: "ขั้นตอนการสักการะพระพรหม เครื่องสักการะ และข้อควรปฏิบัติ",
};

export default function WorshipPage() {
  return <WorshipContent />;
}

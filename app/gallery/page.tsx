import type { Metadata } from "next";
import GalleryContent from "@/components/pages/GalleryContent";

export const metadata: Metadata = {
  title: "แกลเลอรี | ศาลพระพรหมเอราวัณ",
  description: "ภาพบรรยากาศศาลพระพรหมเอราวัณ",
};

export default function GalleryPage() {
  return <GalleryContent />;
}

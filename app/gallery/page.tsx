import { pageMetadata } from "@/lib/metadata";
import GalleryContent from "@/components/pages/GalleryContent";

export const metadata = pageMetadata("/gallery", "แกลเลอรี | ศาลพระพรหมเอราวัณ", "ภาพบรรยากาศศาลพระพรหมเอราวัณ");

export default function GalleryPage() {
  return <GalleryContent />;
}

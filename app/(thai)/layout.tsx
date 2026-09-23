import type { Metadata } from "next";
import "../globals.css";
import SiteBody from "@/components/SiteBody";

export const metadata: Metadata = { metadataBase: new URL("https://www.erawanshrine.com") };

export default function ThaiLayout({ children }: { children: React.ReactNode }) {
  return <html lang="th"><SiteBody lang="th">{children}</SiteBody></html>;
}

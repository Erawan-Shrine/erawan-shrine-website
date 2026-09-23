import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../../globals.css";
import SiteBody from "@/components/SiteBody";
import { isTranslatedLanguage } from "@/lib/i18n";

export const metadata: Metadata = { metadataBase: new URL("https://www.erawanshrine.com") };
export const dynamicParams = false;
export function generateStaticParams() { return [{ lang: "en" }, { lang: "zh" }]; }

export default function LocalizedLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  if (!isTranslatedLanguage(params.lang)) notFound();
  return <html lang={params.lang}><SiteBody lang={params.lang}>{children}</SiteBody></html>;
}

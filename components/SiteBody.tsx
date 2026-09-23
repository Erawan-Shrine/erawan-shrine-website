import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";
import type { Lang } from "@/lib/i18n";

const GA_MEASUREMENT_ID = "G-9JHYBWCDBZ";
const SITE_URL = "https://www.erawanshrine.com";
const OG_IMAGE =
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "PlaceOfWorship",
  name: "ศาลพระพรหมเอราวัณ",
  alternateName: "Erawan Shrine",
  description:
    "ศาลพระพรหมเอราวัณ (ท้าวมหาพรหม) สถานที่สักการะสำคัญของกรุงเทพมหานคร ณ สี่แยกราชประสงค์",
  url: SITE_URL,
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "สี่แยกราชประสงค์ ถนนราชดำริ",
    addressLocality: "แขวงลุมพินี เขตปทุมวัน",
    addressRegion: "กรุงเทพมหานคร",
    postalCode: "10330",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.7440,
    longitude: 100.5403,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "06:00",
    closes: "22:00",
  },
  isAccessibleForFree: true,
};

export default function SiteBody({ children, lang }: { children: React.ReactNode; lang: Lang }) {
  return (
    <body className="font-thai antialiased">
      <script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <LanguageProvider lang={lang}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </LanguageProvider>
    </body>
  );
}

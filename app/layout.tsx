import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const GA_MEASUREMENT_ID = "G-9JHYBWCDBZ";
const SITE_URL = "https://www.erawanshrine.com";
const OG_IMAGE =
  "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ศาลพระพรหมเอราวัณ | Erawan Shrine — บทสวดมนต์และวิธีสักการะ",
  description:
    "บทสวดบูชาพระพรหมสี่หน้า (ท้าวมหาพรหม) ศาลพระพรหมเอราวัณ พร้อมคำแปลไทย-อังกฤษ-จีน วิธีการสักการะ ประวัติศาล และข้อมูลการเดินทาง",
  keywords: [
    "ศาลพระพรหมเอราวัณ",
    "Erawan Shrine",
    "บทสวดพระพรหม",
    "ท้าวมหาพรหม",
    "Four Face Buddha",
    "四面佛",
  ],
  openGraph: {
    title: "ศาลพระพรหมเอราวัณ | Erawan Shrine",
    description: "บทสวดบูชาพระพรหมสี่หน้า พร้อมวิธีสักการะและข้อมูลศาล",
    type: "website",
    url: SITE_URL,
    siteName: "ศาลพระพรหมเอราวัณ | Erawan Shrine",
    locale: "th_TH",
    images: [
      {
        url: OG_IMAGE,
        width: 1148,
        height: 2040,
        alt: "องค์พระพรหมสี่หน้าปิดทอง ณ ศาลพระพรหมเอราวัณ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ศาลพระพรหมเอราวัณ | Erawan Shrine",
    description: "บทสวดบูชาพระพรหมสี่หน้า พร้อมวิธีสักการะและข้อมูลศาล",
    images: [OG_IMAGE],
  },
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="font-thai antialiased">
        <Script id="structured-data" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(structuredData)}
        </Script>
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
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

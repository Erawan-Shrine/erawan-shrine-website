import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="font-thai antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

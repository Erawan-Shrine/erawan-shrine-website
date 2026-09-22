import type { Metadata } from "next";

const siteUrl = "https://www.erawanshrine.com";
const image = "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title, description, url: `${siteUrl}${path}`, type: "website",
      siteName: "ศาลพระพรหมเอราวัณ | Erawan Shrine", locale: "th_TH",
      images: [{ url: image, width: 1148, height: 2040, alt: "องค์พระพรหม ณ ศาลพระพรหมเอราวัณ" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

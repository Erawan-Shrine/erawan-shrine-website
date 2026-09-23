import type { Metadata } from "next";
import { languages, localizedPath, type Lang } from "@/lib/i18n";

const siteUrl = "https://www.erawanshrine.com";
const image = "https://res.cloudinary.com/svvh2e0y/image/upload/v1783084290/ErawanShrine2_qhe7lx.jpg";

export function pageMetadata(path: string, title: string, description: string, lang: Lang = "th"): Metadata {
  const url = `${siteUrl}${localizedPath(lang, path)}`;
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(languages.map((language) => [language, `${siteUrl}${localizedPath(language, path)}`])),
        "x-default": `${siteUrl}${path}`,
      },
    },
    openGraph: {
      title, description, url, type: "website",
      siteName: "ศาลพระพรหมเอราวัณ | Erawan Shrine",
      locale: { th: "th_TH", en: "en_US", zh: "zh_TW" }[lang],
      images: [{ url: image, width: 1148, height: 2040, alt: "องค์พระพรหม ณ ศาลพระพรหมเอราวัณ" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

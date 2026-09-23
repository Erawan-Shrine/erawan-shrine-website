import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeContent from "@/components/pages/HomeContent";
import WorshipContent from "@/components/pages/WorshipContent";
import HistoryContent from "@/components/pages/HistoryContent";
import VisitContent from "@/components/pages/VisitContent";
import GalleryContent from "@/components/pages/GalleryContent";
import { pageMetadata } from "@/lib/metadata";
import { isTranslatedLanguage } from "@/lib/i18n";

const pages = {
  "": {
    component: HomeContent,
    en: {
      title: "Erawan Shrine | Prayer, Worship Guide and Visitor Information",
      description: "Erawan Shrine in Bangkok: Four-Faced Brahma prayer, worship steps, history, opening hours and directions.",
    },
    zh: {
      title: "伊拉旺神壇｜四面佛經咒、參拜方式與交通資訊",
      description: "曼谷伊拉旺神壇參拜資訊：四面佛經咒、參拜步驟、歷史、開放時間與交通方式。",
    },
  },
  worship: {
    component: WorshipContent,
    en: {
      title: "How to Worship at Erawan Shrine | Offerings and Etiquette",
      description: "Worship steps at Erawan Shrine, offerings for the Four-Faced Brahma and etiquette for your visit.",
    },
    zh: {
      title: "伊拉旺神壇參拜方式｜供品與注意事項",
      description: "了解曼谷伊拉旺神壇四面佛的參拜步驟、供品與現場注意事項。",
    },
  },
  history: {
    component: HistoryContent,
    en: {
      title: "History of Erawan Shrine in Bangkok",
      description: "Learn about the history of Erawan Shrine in Bangkok since its founding in 1956.",
    },
    zh: {
      title: "伊拉旺神壇歷史｜曼谷四面佛的由來",
      description: "了解曼谷伊拉旺神壇自1956年以來的歷史與由來。",
    },
  },
  visit: {
    component: VisitContent,
    en: {
      title: "Visit Erawan Shrine | Opening Hours, Map and Directions",
      description: "Plan your visit to Erawan Shrine: opening hours, free admission, map and directions from BTS Chit Lom.",
    },
    zh: {
      title: "伊拉旺神壇交通資訊｜開放時間、地圖與路線",
      description: "規劃前往曼谷伊拉旺神壇：查看開放時間、免費入場資訊、地圖與BTS奇隆站交通路線。",
    },
  },
  gallery: {
    component: GalleryContent,
    en: {
      title: "Erawan Shrine Photo Gallery",
      description: "Photos of Erawan Shrine and the Four-Faced Brahma in Bangkok.",
    },
    zh: {
      title: "伊拉旺神壇相片集｜曼谷四面佛",
      description: "瀏覽曼谷伊拉旺神壇與四面佛的現場照片。",
    },
  },
} as const;

type PageKey = keyof typeof pages;
type Params = { lang: string; slug?: string[] };

function pageKey(params: Params): PageKey | null {
  const key = params.slug?.join("/") ?? "";
  return Object.prototype.hasOwnProperty.call(pages, key) ? key as PageKey : null;
}

export const dynamicParams = false;
export function generateStaticParams() {
  return (["en", "zh"] as const).flatMap((lang) =>
    (Object.keys(pages) as PageKey[]).map((key) => ({ lang, slug: key ? [key] : [] }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const key = pageKey(params);
  if (!isTranslatedLanguage(params.lang) || key === null) notFound();
  const content = pages[key][params.lang];
  return pageMetadata(key ? `/${key}` : "/", content.title, content.description, params.lang);
}

export default function LocalizedPage({ params }: { params: Params }) {
  const key = pageKey(params);
  if (!isTranslatedLanguage(params.lang) || key === null) notFound();
  const Content = pages[key].component;
  return <Content />;
}

"use client";

import { createContext, useContext } from "react";
import type { Lang } from "@/lib/i18n";

interface LanguageContextType {
  lang: Lang;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "th",
});

export function LanguageProvider({ children, lang }: { children: React.ReactNode; lang: Lang }) {
  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

"use client";

import { createContext, useContext, useState } from "react";

export type Lang = "th" | "en" | "zh";

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "th",
  setLang: () => {},
});

// Language choice is intentionally NOT persisted (no localStorage) — every
// fresh page load/visit should always start in Thai, regardless of what a
// visitor previously selected.
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("th");

  const setLang = (l: Lang) => {
    setLangState(l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

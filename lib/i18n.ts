export type Lang = "th" | "en" | "zh";

export const languages: Lang[] = ["th", "en", "zh"];

export function isTranslatedLanguage(value: string): value is "en" | "zh" {
  return value === "en" || value === "zh";
}

export function localizedPath(lang: Lang, path: string): string {
  if (lang === "th") return path;
  if (path === "/") return `/${lang}`;
  if (path.startsWith("/#")) return `/${lang}${path.slice(1)}`;
  return `/${lang}${path}`;
}

export function pathInLanguage(pathname: string, lang: Lang): string {
  const basePath = pathname.replace(/^\/(en|zh)(?=\/|$)/, "") || "/";
  return localizedPath(lang, basePath);
}

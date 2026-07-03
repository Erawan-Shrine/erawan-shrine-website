import type { MetadataRoute } from "next";

const BASE_URL = "https://www.erawanshrine.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/worship", "/history", "/visit", "/gallery"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}

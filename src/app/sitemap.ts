import type { MetadataRoute } from "next";

const base = "https://futurewindow.me";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/pricing", "/terms", "/refund-policy", "/privacy"].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

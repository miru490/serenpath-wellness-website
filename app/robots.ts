import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const isPreviewDeployment =
    process.env.VERCEL_ENV !== undefined && process.env.VERCEL_ENV !== "production";

  return {
    rules: isPreviewDeployment
      ? {
          userAgent: "*",
          disallow: "/",
        }
      : {
          userAgent: "*",
          allow: "/",
        },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

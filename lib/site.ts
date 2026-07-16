const DEFAULT_SITE_URL = "https://serenpath-wellness-website.vercel.app";

function normalizeSiteUrl(url: string) {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;

  return withProtocol.replace(/\/+$/, "");
}

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  DEFAULT_SITE_URL;

export const siteConfig = {
  name: "SerenPath",
  title: "SerenPath | Wellness Website Case Study",
  description:
    "A self-directed wellness website case study for a fictional mindset coaching and intuitive reflection brand.",
  url: normalizeSiteUrl(configuredSiteUrl),
  locale: "en_US",
  creator: "Hujin",
} as const;

export const SITE = {
  name: "Paradosxia Cars",
  tagline: "ハイパーカーの世界へ。",
  blog: "https://renchicun4.com",
  email: "hello@paradosxia.com",
  tiktokHandle: "paradoxia.cars",
  tiktokVideos: [] as string[],
  splineScene: "https://prod.spline.design/OlkR9onG89bHQrUa/scene.splinecode",
} as const;

export const tiktokUrl = `https://www.tiktok.com/@${SITE.tiktokHandle}`;

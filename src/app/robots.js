export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_FRONTEND_URL;
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/user/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

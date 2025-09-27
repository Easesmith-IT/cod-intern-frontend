import { DetailPageClient } from "@/components/new-and-updates/new-and-updates-client";

async function getPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/news-and-updates?slug=${slug}`,
    { next: { revalidate: 60 } } // ISR (cache & revalidate every 60s)
  );
  if (!res.ok) return null;
  const posts = await res.json();
  return posts?.[0] || null;
}

async function getMedia(id) {
  if (!id) return null;
  const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/media/${id}`);
  if (!res.ok) return null;
  return res.json();
}

// ✅ Dynamic Metadata
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "News & Updates not found - CodIntern",
      description: "This News & Updates article does not exist.",
    };
  }

  const media = await getMedia(post.featured_media);
  const imageUrl =
    media?.guid?.rendered ||
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/default-news.png`;

  const plainExcerpt = post.excerpt?.rendered
    ?.replace(/<[^>]+>/g, "")
    .slice(0, 160);

  return {
    title: `${post.title?.rendered} | CodIntern`,
    description:
      plainExcerpt || "Stay updated with the latest news from CodIntern.",
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news-updates/${params.slug}`,
    },
    openGraph: {
      title: post.title?.rendered,
      description: plainExcerpt,
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news-updates/${params.slug}`,
      siteName: "CodIntern",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title?.rendered,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title?.rendered,
      description: plainExcerpt,
      images: [imageUrl],
    },
  };
}

export default function DetailPage({ params }) {
  return (
    <section>
      <DetailPageClient slug={params.slug} />
    </section>
  );
}

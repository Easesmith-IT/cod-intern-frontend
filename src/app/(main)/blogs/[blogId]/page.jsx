import { BlogDetailsClient } from "@/components/blogs/blog-details-client";

async function getPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_API_URL}/posts?slug=${slug}`,
    { next: { revalidate: 60 } } // ISR (optional)
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

// ✅ Dynamic metadata
export async function generateMetadata({ params }) {
  const post = await getPost(params.blogId);

  if (!post) {
    return {
      title: "Blog not found - CodIntern",
      description: "This blog post does not exist.",
    };
  }

  const media = await getMedia(post.featured_media);
  const imageUrl = media?.guid?.rendered || "/blog/1.png";
  const plainExcerpt =
    typeof post.excerpt?.rendered === "string"
      ? post.excerpt.rendered.replace(/<[^>]+>/g, "")
      : "";


  return {
    title: post.title?.rendered,
    description: plainExcerpt, // strip HTML
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/blogs/${params.blogId}`,
    },
    openGraph: {
      title: post.title?.rendered,
      description: plainExcerpt,
      url: `https://codintern.com/blogs/${params.blogId}`,
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
  };
}

const BlogDetails = () => {
  return <BlogDetailsClient />;
};

export default BlogDetails;

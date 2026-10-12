import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleMeta } from "@/components/news-list";
import { findPost, posts } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  return { title: post ? post.title : "Tin tức" };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  return (
    <main className="subpage">
      <div className="container">
        <p className="crumb"><Link href="/">Trang chủ</Link> · <Link href="/tin-tuc">Tin tức</Link></p>
        <div className="news-hero">
          <p>Khám phá ngay các tin tức mới nhất từ <span>Langfarm</span></p>
        </div>
        <Link className="back-link" href="/tin-tuc">← Tất cả tin tức</Link>
        <article className="article-view">
          <h1>{post.title}</h1>
          <ArticleMeta post={post} />
          <img src={post.image} alt="" />
          <p>{post.excerpt}</p>
          <p>Langfarm tuyển chọn nông sản Đà Lạt, đóng gói cẩn thận và giao đi khắp cả nước. Bài viết này tóm tắt những điểm đáng chú ý của sản phẩm để bạn dễ chọn quà và món dùng mỗi ngày.</p>
        </article>
      </div>
    </main>
  );
}

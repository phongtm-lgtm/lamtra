import Link from "next/link";
import { NewsList } from "@/components/news-list";

export const metadata = {
  title: "Tin tức",
};

export default function NewsPage() {
  return (
    <main className="subpage">
      <div className="container">
        <p className="crumb"><Link href="/">Trang chủ</Link> · Tin tức</p>
        <div className="news-hero">
          <p>Khám phá ngay các tin tức mới nhất từ <span>Langfarm</span></p>
        </div>
        <NewsList />
      </div>
    </main>
  );
}

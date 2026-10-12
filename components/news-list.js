"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { posts } from "@/lib/posts";

function Meta({ post }) {
  return (
    <div className="meta">
      <span className="pill">{post.tag}</span>
      <span>Đăng bởi {post.author}</span>
      <span>{post.date}</span>
      <span>{post.views.toLocaleString("en-US")} lượt xem</span>
    </div>
  );
}

export function NewsList() {
  const [tag, setTag] = useState("");
  const [sort, setSort] = useState("new");
  const rows = useMemo(() => {
    const filtered = posts.filter((post) => !tag || post.tag === tag);
    const copy = [...filtered];
    if (sort === "views") copy.sort((a, b) => b.views - a.views);
    if (sort === "old") copy.reverse();
    return copy;
  }, [tag, sort]);
  const [first, ...rest] = rows;

  return (
    <>
      <div className="news-tools">
        <label>
          Danh mục
          <select value={tag} onChange={(event) => setTag(event.target.value)}>
            <option value="">Tất cả</option>
            <option>Tin Tức</option>
            <option>Đặc sản</option>
            <option>Cà phê</option>
            <option>Quà tặng</option>
          </select>
        </label>
        <label>
          Xếp theo
          <select value={sort} onChange={(event) => setSort(event.target.value)}>
            <option value="new">Mới nhất</option>
            <option value="old">Cũ nhất</option>
            <option value="views">Xem nhiều</option>
          </select>
        </label>
      </div>
      {!first && <p className="empty-note">Không có bài viết trong danh mục này.</p>}
      {first && (
        <Link className="featured" href={`/tin-tuc/${first.slug}`}>
          <img src={first.image} alt="" />
          <div>
            <h2>{first.title}</h2>
            <Meta post={first} />
            <p>{first.excerpt}</p>
          </div>
        </Link>
      )}
      {rest.map((post) => (
        <Link className="article" href={`/tin-tuc/${post.slug}`} key={post.slug}>
          <img src={post.image} alt="" />
          <div>
            <h2>{post.title}</h2>
            <Meta post={post} />
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export function ArticleMeta({ post }) {
  return <Meta post={post} />;
}

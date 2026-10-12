"use client";

import { useEffect, useRef, useState } from "react";
import { formatMoney } from "@/lib/catalog";
import { useApp } from "@/components/site-shell";

export function ProductSlider({ title, products }) {
  const scroller = useRef(null);
  const [edges, setEdges] = useState({ prev: true, next: false });
  const { addItem } = useApp();

  useEffect(() => {
    const node = scroller.current;
    if (!node) return undefined;
    const update = () => {
      setEdges({
        prev: node.scrollLeft < 8,
        next: node.scrollLeft + node.clientWidth >= node.scrollWidth - 8,
      });
    };
    update();
    node.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      node.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [products]);

  function step(dir) {
    const node = scroller.current;
    const card = node.querySelector(".card");
    const amount = card ? card.getBoundingClientRect().width + 40 : 320;
    node.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="slider">
          <button className="arrow prev" type="button" aria-label="Trước" disabled={edges.prev} onClick={() => step(-1)}>‹</button>
          <div className="track" ref={scroller}>
            {products.map((product) => (
              <article className="card" key={product.name}>
                <button className="add" type="button" aria-label="Thêm vào giỏ" onClick={() => addItem(product)}>+</button>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">{formatMoney(product.price)}</p>
              </article>
            ))}
          </div>
          <button className="arrow next" type="button" aria-label="Sau" disabled={edges.next} onClick={() => step(1)}>›</button>
        </div>
      </div>
    </section>
  );
}

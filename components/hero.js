"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { heroSlides } from "@/lib/catalog";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Banner">
      <div className="hero-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {heroSlides.map((slide) => (
          <Link className="hero-slide" href={slide.href} key={slide.src}>
            <img src={slide.src} alt={slide.alt} />
          </Link>
        ))}
      </div>
      <div className="hero-dots">
        {heroSlides.map((slide, dotIndex) => (
          <button
            key={slide.src}
            type="button"
            className={dotIndex === index ? "active" : undefined}
            aria-label={`Banner ${dotIndex + 1}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/images/hero/hero-1.jpg",
    eyebrow: "ASUS TECHNOLOGY",
    title: "Innovation for Every Possibility",
    description:
      "Discover powerful technology designed to help you work, create, and play without limits.",
    button: "Explore Products",
    link: "/products",
  },
  {
    image: "/images/hero/hero-2.jpg",
    eyebrow: "NEXT LEVEL PERFORMANCE",
    title: "Power Meets Precision",
    description:
      "Experience performance and design built for the way you live and create.",
    button: "Discover More",
    link: "/products",
  },
  {
    image: "/images/hero/hero-3.jpg",
    eyebrow: "DESIGNED FOR YOU",
    title: "Technology That Moves With You",
    description:
      "From everyday productivity to immersive entertainment, find the right ASUS experience for you.",
    button: "View Products",
    link: "/products",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vh-64px)] min-h-[600px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 lg:px-16">
            <div className="max-w-xl text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]">
                {slide.eyebrow}
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                {slide.title}
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
                {slide.description}
              </p>

              <Link
                href={slide.link}
                className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
              >
                {slide.button}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
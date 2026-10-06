import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="bg-black px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            About ASUS
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Inspiring innovation.
            <br />
            Creating possibilities.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            ASUS is a global technology company dedicated to
            creating innovative products that empower people to
            reach their full potential.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center">

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100">
            <Image
              src="/images/about/innovation.jpg"
              alt="ASUS innovation"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology with purpose.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-500">
              ASUS is committed to developing technology that
              combines performance, design, and innovation to
              create better experiences for people everywhere.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-500">
              From laptops and gaming devices to professional
              displays and everyday accessories, ASUS continues
              to explore new possibilities through technology.
            </p>

            <Link
              href="/products"
              className="mt-8 flex w-fit items-center gap-2 text-sm font-semibold underline underline-offset-4 transition hover:text-gray-500"
            >
              Explore Our Products
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f5f5f5] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1440px]">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              What Drives Us
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Built around innovation.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                01
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Innovation
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                We continuously explore new ideas and technologies
                to create meaningful experiences.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                02
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Design
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                We combine thoughtful design with powerful
                technology to create products people love to use.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                03
              </div>

              <h3 className="mt-8 text-2xl font-semibold">
                Possibility
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                We create technology that helps people work,
                create, connect, and achieve more.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Discover More
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Find the technology made for you.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500">
            Explore the ASUS product lineup and discover
            technology designed for work, creativity, gaming,
            and everyday life.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Explore Products
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}
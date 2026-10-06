import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-3xl bg-black lg:grid-cols-2">

        {/* Image */}
        <div className="relative min-h-[400px] lg:min-h-[620px]">
          <Image
            src="/images/about/innovation.jpg"
            alt="ASUS innovation"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center px-8 py-14 text-white sm:px-12 lg:px-16 xl:px-20">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            About ASUS
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Inspiring technology. Creating possibilities.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
            ASUS is a global technology company dedicated to creating
            innovative products that empower people to reach their full
            potential.
          </p>

          {/* Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/15 pt-8">
            <div>
              <p className="text-3xl font-bold">35+</p>
              <p className="mt-1 text-sm text-white/50">
                Years of Innovation
              </p>
            </div>

            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="mt-1 text-sm text-white/50">
                Markets Worldwide
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-10 flex w-fit items-center gap-2 text-sm font-semibold underline underline-offset-4 transition hover:text-white/60"
          >
            Discover ASUS
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
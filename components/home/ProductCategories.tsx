import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Laptops",
    description: "Powerful devices for work and everyday life.",
    image: "/images/categories/laptops.jpg",
  },
  {
    name: "Gaming",
    description: "Experience gaming without limits.",
    image: "/images/categories/gaming.jpg",
  },
  {
    name: "Monitors",
    description: "See every detail with stunning clarity.",
    image: "/images/categories/monitors.jpg",
  },
  {
    name: "Accessories",
    description: "Complete your setup with the right gear.",
    image: "/images/categories/accessories.jpg",
  },
];

export default function ProductCategories() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Explore ASUS
          </p>

          <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Find the technology that fits you.
          </h2>
        </div>

        {/* Categories */}
        <div className="grid gap-5 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${category.name.toLowerCase()}`}
              className="group relative aspect-[16/9] overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-white sm:p-8">
                <div>
                  <h3 className="text-2xl font-semibold sm:text-3xl">
                    {category.name}
                  </h3>

                  <p className="mt-2 max-w-sm text-sm text-white/75 sm:text-base">
                    {category.description}
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:scale-110">
                  <ArrowUpRight size={19} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
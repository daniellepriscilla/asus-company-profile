import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Featured Products
            </p>

            <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
              Technology designed for what&apos;s next.
            </h2>
          </div>

          <Link
            href="/products"
            className="flex w-fit items-center gap-2 text-sm font-semibold underline underline-offset-4 transition hover:text-gray-500"
          >
            View All Products
            <ArrowRight size={17} />
          </Link>
        </div>

        {/* Products */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
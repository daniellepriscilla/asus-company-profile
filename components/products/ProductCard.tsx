import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-[#f5f5f5]">
      {/* Product Image */}
      <Link
        href={`/products/${product.id}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 transition duration-500 group-hover:scale-105"
        />

        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 shadow-sm transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold tracking-tight">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {product.tagline}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="font-semibold">
            {product.price}
          </p>

          <Link
            href={`/products/${product.id}`}
            className="text-sm font-medium underline underline-offset-4 transition hover:text-gray-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
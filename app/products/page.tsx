"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";

const categories = [
  "All",
  "Laptops",
  "Gaming",
  "Monitors",
  "Accessories",
];

function ProductsContent() {
  const searchParams = useSearchParams();

  const searchFromUrl = searchParams.get("search") || "";
  const categoryFromUrl = searchParams.get("category") || "";

  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState(searchFromUrl);

  useEffect(() => {
    setSearch(searchFromUrl);

    const matchedCategory = categories.find(
      (category) =>
        category.toLowerCase() === categoryFromUrl.toLowerCase()
    );

    setActiveCategory(matchedCategory || "All");
  }, [searchFromUrl, categoryFromUrl]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        searchText === "" ||
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.tagline.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="bg-black px-6 py-20 text-white lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1440px]">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            ASUS Products
          </p>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Technology made for every possibility.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Explore laptops, gaming devices, monitors, and technology
            designed to help you work, create, and play.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="bg-white px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                    activeCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="h-11 w-full rounded-full border border-gray-200 bg-gray-50 pl-11 pr-5 text-sm outline-none transition focus:border-black"
              />
            </div>

          </div>

          {/* Search Result */}
          {search.trim() && (
            <p className="mt-8 text-sm text-gray-500">
              Search results for{" "}
              <span className="font-semibold text-black">
                &quot;{search}&quot;
              </span>
            </p>
          )}

          {/* Category Result */}
          {!search.trim() && activeCategory !== "All" && (
            <p className="mt-8 text-sm text-gray-500">
              Showing{" "}
              <span className="font-semibold text-black">
                {activeCategory}
              </span>{" "}
              products
            </p>
          )}

          {/* Product Grid */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg font-medium">
                No products found.
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Try another search or category.
              </p>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center pt-16">
          <p className="text-sm text-gray-500">
            Loading products...
          </p>
        </main>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
"use client";

import { use, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

type CartItem = {
  id: number;
  quantity: number;
};

export default function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = use(params);

  const productId = Number(id);

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 pt-16">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>

        <Link
          href="/products"
          className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Back to Products
        </Link>
      </main>
    );
  }

  // Setelah pengecekan di atas, productId adalah ID produk yang valid.
  const selectedProductId = product.id;

  function handleAddToCart() {
    const savedCart = localStorage.getItem("asus-cart");

    const cart: CartItem[] = savedCart
      ? JSON.parse(savedCart)
      : [];

    const existingItem = cart.find(
      (item) => item.id === selectedProductId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        id: selectedProductId,
        quantity,
      });
    }

    localStorage.setItem(
      "asus-cart",
      JSON.stringify(cart)
    );

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  function handleBuyNow() {
    handleAddToCart();
    window.location.href = "/cart";
  }

  return (
    <main className="pt-16">
      <section className="px-6 py-12 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1440px]">

          <Link
            href="/products"
            className="mb-10 flex w-fit items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black"
          >
            <ArrowLeft size={17} />
            Back to Products
          </Link>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-[#f5f5f5]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain p-10 transition duration-500 hover:scale-105"
              />
            </div>

            <div className="max-w-xl">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                {product.category}
              </p>

              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {product.name}
              </h1>

              <p className="mt-5 text-lg leading-8 text-gray-500">
                {product.tagline}
              </p>

              <div className="mt-8 h-px bg-gray-200" />

              <p className="mt-8 text-2xl font-semibold">
                {product.price}
              </p>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                Experience powerful performance, premium design,
                and reliable technology built for your everyday
                needs.
              </p>

              <div className="mt-8">
                <p className="mb-3 text-sm font-medium">
                  Quantity
                </p>

                <div className="flex w-fit items-center overflow-hidden rounded-full border border-gray-200">

                  <button
                    onClick={() =>
                      setQuantity((value) =>
                        Math.max(1, value - 1)
                      )
                    }
                    className="flex h-11 w-11 items-center justify-center text-lg transition hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="flex h-11 w-12 items-center justify-center text-sm font-medium">
                    {quantity}
                  </span>

                  <button
                    onClick={() =>
                      setQuantity((value) => value + 1)
                    }
                    className="flex h-11 w-11 items-center justify-center text-lg transition hover:bg-gray-100"
                  >
                    +
                  </button>

                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <button
                  onClick={handleAddToCart}
                  className="flex h-13 flex-1 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                  {added ? (
                    <>
                      <Check size={18} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Add to Cart
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="h-13 rounded-full border border-black px-8 text-sm font-semibold transition hover:bg-black hover:text-white"
                >
                  Buy Now
                </button>

              </div>

              {added && (
                <p className="mt-4 text-sm text-gray-500">
                  Product has been added to your cart.
                </p>
              )}

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
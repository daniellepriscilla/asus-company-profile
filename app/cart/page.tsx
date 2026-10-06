"use client";

import Link from "next/link";
import { ArrowLeft, Trash2, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { products } from "@/data/products";

type CartItem = {
  id: number;
  quantity: number;
};

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("asus-cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  function updateCart(updatedCart: CartItem[]) {
    setCart(updatedCart);
    localStorage.setItem("asus-cart", JSON.stringify(updatedCart));
  }

  function increaseQuantity(id: number) {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    updateCart(updatedCart);
  }

  function decreaseQuantity(id: number) {
    const updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);

    updateCart(updatedCart);
  }

  function removeItem(id: number) {
    const updatedCart = cart.filter((item) => item.id !== id);

    updateCart(updatedCart);
  }

  const cartProducts = cart
    .map((item) => {
      const product = products.find(
        (product) => product.id === item.id
      );

      return product
        ? {
            ...product,
            quantity: item.quantity,
          }
        : null;
    })
    .filter(Boolean);

  const total = cartProducts.reduce((sum, product) => {
    if (!product) return sum;

    const numericPrice = Number(
      product.price.replace(/[^\d]/g, "")
    );

    return sum + numericPrice * product.quantity;
  }, 0);

  const formattedTotal = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(total);

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 pb-20 pt-28 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/products"
          className="mb-8 flex w-fit items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-black"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Your Cart
        </h1>

        {cartProducts.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Add some ASUS products to your cart.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              {cartProducts.map((product) => {
                if (!product) return null;

                return (
                  <div
                    key={product.id}
                    className="flex flex-col gap-5 rounded-3xl bg-white p-5 sm:flex-row sm:items-center"
                  >
                    <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-2xl bg-[#f5f5f5] sm:w-32">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-contain p-4"
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                        {product.category}
                      </p>

                      <h2 className="mt-2 text-lg font-semibold">
                        {product.name}
                      </h2>

                      <p className="mt-1 text-sm text-gray-500">
                        {product.price}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">
                      <div className="flex items-center overflow-hidden rounded-full border border-gray-200">
                        <button
                          onClick={() =>
                            decreaseQuantity(product.id)
                          }
                          className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100"
                        >
                          <Minus size={15} />
                        </button>

                        <span className="flex h-9 w-10 items-center justify-center text-sm font-medium">
                          {product.quantity}
                        </span>

                        <button
                          onClick={() =>
                            increaseQuantity(product.id)
                          }
                          className="flex h-9 w-9 items-center justify-center transition hover:bg-gray-100"
                        >
                          <Plus size={15} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(product.id)}
                        className="flex items-center gap-2 text-xs font-medium text-gray-400 transition hover:text-red-500"
                      >
                        <Trash2 size={15} />
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="h-fit rounded-3xl bg-white p-7">
              <h2 className="text-xl font-semibold">
                Order Summary
              </h2>

              <div className="mt-8 flex items-center justify-between border-b border-gray-200 pb-5 text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-semibold">
                  {formattedTotal}
                </span>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium">
                  Calculated at checkout
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between text-lg font-semibold">
                <span>Total</span>
                <span>{formattedTotal}</span>
              </div>

              <button
                onClick={() =>
                    alert(
                    "Checkout is ready. This is a frontend simulation, so no real payment will be processed."
                    )
                }
                className="mt-8 w-full rounded-full bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-gray-800"
                >
                Proceed to Checkout
             </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
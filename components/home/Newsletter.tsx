"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  }

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
          Stay Connected
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Get the latest from ASUS.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-500">
          Subscribe to receive the latest product news, special offers,
          events, and updates from ASUS.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-13 flex-1 rounded-full border border-gray-300 bg-white px-5 text-sm outline-none transition placeholder:text-gray-400 focus:border-black"
            />

            <button
              type="submit"
              className="flex h-13 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Subscribe
              <ArrowRight size={17} />
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-white">
              <Check size={14} />
            </div>

            Thank you for subscribing.
          </div>
        )}

        <p className="mt-5 text-xs text-gray-400">
          By subscribing, you agree to receive communications from ASUS.
        </p>
      </div>
    </section>
  );
}
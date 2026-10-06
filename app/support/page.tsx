"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  Laptop,
  Wrench,
  Download,
} from "lucide-react";

const faqs = [
  {
    question: "How do I find the right ASUS product?",
    answer:
      "Explore our product categories and compare products based on your needs, performance requirements, and preferred features.",
  },
  {
    question: "Where can I find product specifications?",
    answer:
      "Open a product detail page to view the available product information, pricing, category, and specifications.",
  },
  {
    question: "How can I get help with my ASUS device?",
    answer:
      "For technical assistance, product support, drivers, and troubleshooting, use the ASUS support resources available for your device.",
  },
  {
    question: "How can I stay updated with ASUS offers?",
    answer:
      "Subscribe to the ASUS newsletter on our homepage to receive product news, special offers, events, and updates.",
  },
];

export default function SupportPage() {
  const [search, setSearch] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="pt-16">

      {/* Hero */}
      <section className="bg-black px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[1440px] text-center">

          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            ASUS Support
          </p>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            How can we help?
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Find product information, troubleshooting resources,
            and answers to common questions.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-10 max-w-2xl">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search support questions..."
              className="h-14 w-full rounded-full bg-white pl-13 pr-6 text-sm text-black outline-none"
            />
          </div>

        </div>
      </section>

      {/* Support Categories */}
      <section className="bg-white px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1200px]">

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Laptop size={21} />
              </div>

              <h2 className="mt-7 text-xl font-semibold">
                Product Support
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Find information and assistance for your ASUS
                products.
              </p>

              <button className="mt-6 text-sm font-semibold underline underline-offset-4">
                Learn More
              </button>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Wrench size={21} />
              </div>

              <h2 className="mt-7 text-xl font-semibold">
                Troubleshooting
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Get help with common device issues and find
                troubleshooting information.
              </p>

              <button className="mt-6 text-sm font-semibold underline underline-offset-4">
                Learn More
              </button>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white">
                <Download size={21} />
              </div>

              <h2 className="mt-7 text-xl font-semibold">
                Drivers & Downloads
              </h2>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Find drivers, software, manuals, and useful
                downloads for your device.
              </p>

              <button className="mt-6 text-sm font-semibold underline underline-offset-4">
                Learn More
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f5f5f5] px-6 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-3xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Common questions.
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-2xl bg-white"
                >
                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={19}
                      className={`shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-5">
                      <p className="text-sm leading-7 text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFaqs.length === 0 && (
            <p className="mt-10 text-center text-sm text-gray-500">
              No support questions found.
            </p>
          )}

        </div>
      </section>

    </main>
  );
}
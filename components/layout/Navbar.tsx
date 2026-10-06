"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-black tracking-[-0.08em]"
        >
          ASUS
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link
            href="/products"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            About
          </Link>

          <Link
            href="/support"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Support
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* Search */}
          <div className="relative">
            <button
              onClick={() =>
                setIsSearchOpen(!isSearchOpen)
              }
              aria-label="Search"
              className="rounded-full p-2 transition hover:bg-gray-100"
            >
              {isSearchOpen ? (
                <X size={19} strokeWidth={1.8} />
              ) : (
                <Search size={19} strokeWidth={1.8} />
              )}
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-12 w-72 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg">
                <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3">
                  <Search
                    size={17}
                    className="text-gray-400"
                  />

                  <input
                    type="text"
                    autoFocus
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    placeholder="Search products..."
                    className="h-10 w-full bg-transparent text-sm outline-none"
                  />
                </div>

                <div className="mt-3">
                  {search.trim() ? (
                    <Link
                      href={`/products?search=${encodeURIComponent(
                        search
                      )}`}
                      onClick={() =>
                        setIsSearchOpen(false)
                      }
                      className="block rounded-xl px-3 py-3 text-sm text-gray-600 transition hover:bg-gray-100 hover:text-black"
                    >
                      Search for{" "}
                      <span className="font-semibold text-black">
                        &quot;{search}&quot;
                      </span>
                    </Link>
                  ) : (
                    <p className="px-3 py-2 text-xs text-gray-400">
                      Search ASUS products
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Login */}
          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition hover:bg-gray-100"
          >
            <User size={18} strokeWidth={1.8} />
            Login
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Sign Up
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            aria-label="Shopping Cart"
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <ShoppingCart
              size={19}
              strokeWidth={1.8}
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 transition hover:bg-gray-100 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-5">

            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium"
            >
              Products
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium"
            >
              About
            </Link>

            <Link
              href="/support"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium"
            >
              Support
            </Link>

            <div className="h-px bg-gray-200" />

            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium"
            >
              Login
            </Link>

            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium"
            >
              Sign Up
            </Link>

            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="text-base font-medium"
            >
              Shopping Cart
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}
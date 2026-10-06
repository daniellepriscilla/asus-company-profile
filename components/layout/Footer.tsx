import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-20">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-3xl font-black tracking-[-0.08em]"
            >
              ASUS
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/50">
              Inspiring innovation and creating technology that empowers
              people around the world.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Products
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/50">
              <Link
                href="/products?category=laptops"
                className="transition hover:text-white"
              >
                Laptops
              </Link>

              <Link
                href="/products?category=gaming"
                className="transition hover:text-white"
              >
                Gaming
              </Link>

              <Link
                href="/products?category=monitors"
                className="transition hover:text-white"
              >
                Monitors
              </Link>

              <Link
                href="/products?category=accessories"
                className="transition hover:text-white"
              >
                Accessories
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Company
            </h3>

            <div className="flex flex-col gap-3 text-sm text-white/50">
              <Link
                href="/about"
                className="transition hover:text-white"
              >
                About ASUS
              </Link>

              <Link
                href="/support"
                className="transition hover:text-white"
              >
                Support
              </Link>

              <Link
                href="/login"
                className="transition hover:text-white"
              >
                My Account
              </Link>

              <Link
                href="/cart"
                className="transition hover:text-white"
              >
                Shopping Cart
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Follow ASUS
            </h3>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition hover:bg-white hover:text-black"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition hover:bg-white hover:text-black"
              >
                YT
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition hover:bg-white hover:text-black"
              >
                FB
              </a>

              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-semibold transition hover:bg-white hover:text-black"
              >
                X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ASUS. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms of Use
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
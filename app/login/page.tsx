"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) return;

    alert("Login successful!");
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 pb-20 pt-28">
      <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-8 shadow-sm sm:p-10">

          <div className="text-center">
            <Link
              href="/"
              className="text-3xl font-black tracking-[-0.08em]"
            >
              ASUS
            </Link>

            <h1 className="mt-8 text-3xl font-bold tracking-tight">
              Welcome back
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Sign in to your ASUS account.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-black focus:bg-white"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm outline-none transition focus:border-black focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
             <button
                type="button"
                onClick={() =>
                    alert(
                    "Password reset instructions would be sent to your email."
                    )
                }
                className="text-sm font-medium text-gray-500 transition hover:text-black"
                >
                Forgot password?
             </button>
            </div>

            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Sign In
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs text-gray-400">
              OR
            </span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <p className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-semibold text-black underline underline-offset-4"
            >
              Sign Up
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 pb-20 pt-28">
      <div className="mx-auto flex min-h-[calc(100vh-160px)] max-w-md items-center justify-center">
        <div className="w-full rounded-3xl bg-white p-8 shadow-sm sm:p-10">

          {/* Header */}
          <div className="text-center">
            <Link
              href="/"
              className="text-3xl font-black tracking-[-0.08em]"
            >
              ASUS
            </Link>

            <h1 className="mt-8 text-3xl font-bold tracking-tight">
              Create an account
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Join ASUS and stay connected with the latest
              technology.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm outline-none transition focus:border-black focus:bg-white"
              />
            </div>

            {/* Email */}
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

            {/* Password */}
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
                  minLength={6}
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Create a password"
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium"
              >
                Confirm Password
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  required
                  minLength={6}
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm your password"
                  className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 pr-12 text-sm outline-none transition focus:border-black focus:bg-white"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-black"
                  aria-label="Toggle password visibility"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Create Account
              <ArrowRight size={17} />
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-black underline underline-offset-4"
            >
              Sign In
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}
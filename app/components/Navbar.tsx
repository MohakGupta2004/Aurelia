"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // initialize theme from localStorage or system preference
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
      setIsDark(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch (e) {
      // ignore
    }
  }

  return (
    <nav className="w-full bg-card/60 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-4">
          {/* left: textual logo */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span
                style={{ fontFamily: "var(--font-logo)" }}
                className="text-2xl font-bold tracking-tight text-foreground"
              >
                Aurelia
              </span>
            </Link>
          </div>

          {/* center: search */}
          <div className="flex-1 px-4">
            <form role="search" onSubmit={(e) => e.preventDefault()}>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <svg
                    className="h-5 w-5 text-muted"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                    />
                  </svg>
                </span>
                <input
                  className="block w-full max-w-xl mx-auto pl-10 pr-4 py-2 rounded-lg bg-popover/80 border border-input text-sm placeholder:opacity-60 text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Search products, categories..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
            </form>
          </div>

          {/* right: theme toggle + auth */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-md hover:bg-muted/20 text-foreground"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.03a1 1 0 011.415 1.415l-.707.707a1 1 0 11-1.414-1.414l.706-.708zM18 9a1 1 0 110 2h-1a1 1 0 110-2h1zM15.636 14.95a1 1 0 10-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-6.364-1.05a1 1 0 00-1.414 1.414l.707.707A1 1 0 004.343 17.07l-.707-.707zM3 9a1 1 0 100 2H2a1 1 0 100-2h1zm2.05-5.636a1 1 0 10-1.414-1.414l-.707.707A1 1 0 104.343 4.07l.707-.707z" />
                </svg>
              )}
            </button>

            <div className="hidden sm:flex sm:items-center sm:gap-3">
              <Link
                href="/login"
                style={{ fontFamily: "var(--font-sans)" }}
                className="px-3 py-1.5 text-sm rounded-md text-primary hover:bg-primary/10 border border-transparent hover:border-primary/30 transition duration-150 font-medium"
              >
                Login
              </Link>

              <Link
                href="/signup"
                style={{ fontFamily: "var(--font-sans)" }}
                className="px-4 py-1.5 text-sm rounded-md bg-primary text-primary-foreground shadow-md hover:brightness-95 active:scale-95 transform transition font-semibold"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

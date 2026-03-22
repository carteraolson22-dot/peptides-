"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071226]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-base">
            ⚗️
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-100">
              Olsen Peptides
            </p>
            <p className="text-xs text-slate-300">
              Research-grade peptides. Made in the USA.
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "text-sm font-semibold text-white"
                    : "text-sm font-medium text-slate-300 hover:text-white"
                }
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={contactHref}
            className="inline-flex items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Get Started →
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/8 text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-[#071226] px-6 py-5 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={contactHref}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950"
            >
              Get Started →
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

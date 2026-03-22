import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#071226] text-slate-200">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-100">
              Olsen Peptides
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Research-grade peptides. Made in the USA. A direct-response lead
              generation site for research-focused buyers who want a real person
              on the other end.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/products" className="hover:text-white">
                Products
              </Link>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="mailto:carteraolson22@gmail.com"
                className="block hover:text-white"
              >
                carteraolson22@gmail.com
              </a>
              <a href="tel:8016641860" className="block hover:text-white">
                801-664-1860
              </a>
              <p className="text-slate-400">Research use only.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-white/10 bg-white/6 p-6 text-sm leading-7 text-slate-300">
          <p className="font-semibold uppercase tracking-[0.18em] text-sky-100">
            Legal disclaimer
          </p>
          <p className="mt-4">
            All products sold by Olsen Peptides are intended for research
            purposes only and are not for human consumption. These statements
            have not been evaluated by the Food and Drug Administration. These
            products are not intended to diagnose, treat, cure, or prevent any
            disease. By purchasing from Olsen Peptides, you confirm that you
            are a licensed researcher or qualified professional and that all
            products will be used strictly for research purposes in a controlled
            laboratory setting.
          </p>
        </div>

        <div className="mt-8 text-sm text-slate-400">
          © 2025 Olsen Peptides. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

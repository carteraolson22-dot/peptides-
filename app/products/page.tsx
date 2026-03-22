import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsCatalog from "@/components/ProductsCatalog";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Full Olsen Peptides catalog with category filters, product details, and direct inquiry options.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#071226_0%,#0f1e3d_58%,#12377d_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.3),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
            Research Compound Catalog
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-extrabold tracking-tight sm:text-6xl">
            Research compounds manufactured in the United States.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Browse the complete catalog by category, then use the inquiry
            section below to get product guidance, pricing, and direct support.
          </p>
        </div>
      </section>

      <Suspense
        fallback={
          <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="h-72 animate-pulse rounded-[30px] border border-slate-200 bg-white"
                />
              ))}
            </div>
          </section>
        }
      >
        <ProductsCatalog products={products} />
      </Suspense>
    </>
  );
}

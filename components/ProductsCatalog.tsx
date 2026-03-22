"use client";

import { useRef, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Product, ProductCategory } from "@/data/products";
import { categoryFilters, categoryLookup } from "@/data/products";
import LeadForm from "./LeadForm";
import ProductCard from "./ProductCard";

type ProductsCatalogProps = {
  products: Product[];
};

type CategoryFilter = ProductCategory | "all";

function isCategoryFilter(value: string | null): value is CategoryFilter {
  return value === "all" || Boolean(value && value in categoryLookup);
}

export default function ProductsCatalog({ products }: ProductsCatalogProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startRoutingTransition] = useTransition();
  const inquiryRef = useRef<HTMLDivElement>(null);
  const categoryParam = searchParams.get("category");
  const activeCategory = isCategoryFilter(categoryParam) ? categoryParam : "all";
  const selectedProduct = searchParams.get("product") ?? "";

  function updateQuery(nextCategory: CategoryFilter, nextProduct?: string) {
    const params = new URLSearchParams(searchParams.toString());

    if (nextCategory === "all") {
      params.delete("category");
    } else {
      params.set("category", nextCategory);
    }

    if (nextProduct) {
      params.set("product", nextProduct);
    } else {
      params.delete("product");
    }

    const query = params.toString();
    const target = query ? `${pathname}?${query}` : pathname;

    startRoutingTransition(() => {
      router.replace(target, { scroll: false });
    });
  }

  function handleSelectCategory(category: CategoryFilter) {
    updateQuery(category, selectedProduct || undefined);
  }

  function handleInquire(product: Product) {
    const nextCategory =
      activeCategory === "all" ? product.category : activeCategory;

    updateQuery(nextCategory, product.name);

    requestAnimationFrame(() => {
      inquiryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  const visibleProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Catalog size
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">18 listings</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Six categories covering metabolic, GH, recovery, longevity, and
            cognitive research.
          </p>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Positioning
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">Research only</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Product copy is framed around compound type and research focus, not
            human-use outcomes.
          </p>
        </div>
        <div className="rounded-[28px] border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Response path
          </p>
          <p className="mt-3 text-3xl font-bold text-slate-950">Direct to Carter</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Buyers can filter, review compounds, and submit a targeted inquiry
            without leaving the page.
          </p>
        </div>
      </div>

      <div className="sticky top-[88px] z-30 mt-12 rounded-[30px] border border-slate-200 bg-white/90 p-3 shadow-[0_18px_60px_rgba(15,30,61,0.08)] backdrop-blur">
        <div className="flex flex-wrap gap-3">
          {categoryFilters.map((filter) => {
            const isActive = activeCategory === filter.slug;

            return (
              <button
                key={filter.slug}
                type="button"
                onClick={() => handleSelectCategory(filter.slug)}
                className={
                  isActive
                    ? "rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white"
                    : "rounded-full bg-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200"
                }
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Showing
          </p>
          <p className="mt-2 text-2xl font-bold tracking-tight text-slate-950">
            {visibleProducts.length} {visibleProducts.length === 1 ? "compound" : "compounds"}
          </p>
        </div>
        <p className="text-sm text-slate-500">
          {isPending ? "Updating filter..." : "All peptides manufactured in the United States."}
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            onInquire={handleInquire}
          />
        ))}
      </div>

      <div
        ref={inquiryRef}
        id="product-inquiry"
        className="mt-20 rounded-[36px] bg-[linear-gradient(145deg,#071226_0%,#0f1e3d_58%,#133b82_100%)] px-6 py-10 text-white shadow-[0_34px_110px_rgba(15,30,61,0.2)] md:px-8"
      >
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Product inquiry
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Have questions about a specific compound?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Carter will help you find the right product for your research
              goals, clarify availability, and respond directly within 24 hours.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="mailto:carteraolson22@gmail.com"
                className="block rounded-3xl border border-white/12 bg-white/8 px-5 py-4 font-semibold hover:bg-white/12"
              >
                Email Us
              </a>
              <a
                href="tel:8016641860"
                className="block rounded-3xl border border-white/12 bg-white/8 px-5 py-4 font-semibold hover:bg-white/12"
              >
                Call/Text: 801-664-1860
              </a>
            </div>
          </div>

          <LeadForm
            key={selectedProduct || "blank"}
            id="product-lead-form"
            title="Submit a catalog inquiry"
            subtitle="Use the form to ask about a compound, request pricing, or get pointed to the right category."
            selectedProduct={selectedProduct}
            onClearSelectedProduct={() => {
              updateQuery(activeCategory, undefined);
            }}
          />
        </div>
      </div>
    </section>
  );
}

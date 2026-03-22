"use client";

import type { Product } from "@/data/products";
import { categoryLookup } from "@/data/products";

type ProductCardProps = {
  product: Product;
  onInquire: (product: Product) => void;
};

export default function ProductCard({ product, onInquire }: ProductCardProps) {
  const category = categoryLookup[product.category];

  return (
    <article className="flex h-full flex-col rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,30,61,0.05)]">
      <div className="flex items-center justify-between gap-3">
        <span
          className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${category.badgeClass}`}
        >
          {category.icon} {category.label}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
          Research Use Only
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">
        {product.name}
      </h3>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
        {product.type}
      </p>
      <p className="mt-5 flex-1 leading-8 text-slate-600">
        {product.researchFocus}
      </p>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Price
          </p>
          <p className="mt-1 text-lg font-semibold text-slate-950">
            {product.price}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onInquire(product)}
          className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#111d36]"
        >
          Inquire About This Product →
        </button>
      </div>
    </article>
  );
}

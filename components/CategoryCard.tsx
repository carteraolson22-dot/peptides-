import Link from "next/link";
import type { CategoryCardData } from "@/data/products";

type CategoryCardProps = {
  category: CategoryCardData;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className={`group flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-[0_18px_60px_rgba(15,30,61,0.06)] ${category.glow}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-3xl">{category.icon}</span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Research Use Only
        </span>
      </div>
      <h3 className="mt-7 text-2xl font-semibold text-slate-950">
        {category.title}
      </h3>
      <p className="mt-4 flex-1 leading-8 text-slate-600">
        {category.description}
      </p>
      <span className="mt-8 inline-flex items-center text-sm font-semibold text-brand-blue group-hover:text-sky-700">
        View Products →
      </span>
    </Link>
  );
}

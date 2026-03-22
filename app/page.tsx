import Link from "next/link";
import CategoryCard from "@/components/CategoryCard";
import LeadForm from "@/components/LeadForm";
import { categoryCards } from "@/data/products";

export default function Home() {
  const trustItems = [
    { icon: "🇺🇸", label: "Made in the USA" },
    { icon: "🔬", label: "Research-Grade Purity" },
    { icon: "⚡", label: "Fast Shipping" },
    { icon: "🔒", label: "Secure & Discreet" },
  ];

  const whyOlsen = [
    {
      eyebrow: "American-Made Quality",
      icon: "🇺🇸",
      body: "Every peptide in the catalog is manufactured in the United States under strict quality controls. No overseas sourcing and no unknown supply chains.",
    },
    {
      eyebrow: "Research-Grade Purity",
      icon: "🔬",
      body: "Compounds are produced to research-grade purity standards with language and positioning designed for serious lab use only.",
    },
    {
      eyebrow: "Personal Service",
      icon: "🤝",
      body: "Carter Olson handles inquiries directly, so prospects get clear answers, fast follow-through, and a real point of contact.",
    },
  ];

  const spotlightProducts = [
    {
      name: "BPC-157",
      category: "Recovery",
      description:
        "The flagship recovery peptide for tendon, gut, and inflammation-focused research.",
      price: "Price on request",
      href: "/products?category=recovery",
    },
    {
      name: "CJC-1295 + Ipamorelin Stack",
      category: "Growth Hormone",
      description:
        "A classic GH-axis pairing for body-composition, sleep, and recovery research protocols.",
      price: "Stack pricing on request",
      href: "/products?category=growth-hormone",
    },
    {
      name: "Retatrutide",
      category: "Weight Loss",
      description:
        "A next-generation triple incretin research compound focused on appetite and metabolic markers.",
      price: "Price on request",
      href: "/products?category=weight-loss",
    },
  ];

  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(140deg,#071226_0%,#0f1e3d_52%,#12377d_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.36),transparent_26%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              Research Use Only • Direct with Carter Olson
            </span>
            <h1 className="mt-6 text-balance text-5xl font-extrabold tracking-tight sm:text-6xl">
              Research-Grade Peptides.
              <br />
              Made in the USA.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">
              Olsen Peptides sources and supplies high-quality research peptides
              formulated in the United States, positioned for serious
              researchers, biohackers, and performance-minded buyers who want a
              direct point of contact.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-400/20 hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Explore Products →
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/12 bg-white/8 p-4">
                <p className="text-3xl font-bold">18</p>
                <p className="mt-1 text-sm text-slate-200">
                  compounds and blends across six categories
                </p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/8 p-4">
                <p className="text-3xl font-bold">24h</p>
                <p className="mt-1 text-sm text-slate-200">
                  average target for Carter&apos;s follow-up
                </p>
              </div>
              <div className="rounded-3xl border border-white/12 bg-white/8 p-4">
                <p className="text-3xl font-bold">USA</p>
                <p className="mt-1 text-sm text-slate-200">
                  manufactured compounds with premium positioning
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-sky-400/15 blur-3xl" />
            <div className="relative overflow-hidden rounded-[36px] border border-white/14 bg-white/8 p-6 shadow-[0_40px_120px_rgba(6,16,36,0.45)] backdrop-blur">
              <div className="rounded-[28px] border border-white/12 bg-[#081225] p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.22em] text-sky-200">
                      Olsen Research Desk
                    </p>
                    <p className="mt-3 text-2xl font-bold">
                      Premium sourcing without warehouse-brand friction
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-400/14 px-3 py-1 text-xs font-semibold text-emerald-200">
                    Available for inquiry
                  </span>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Catalog Focus
                    </p>
                    <p className="mt-3 text-lg font-semibold">
                      Weight loss, recovery, longevity, cognitive, blends
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/6 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Direct Contact
                    </p>
                    <p className="mt-3 text-lg font-semibold">
                      Email and phone inquiries handled by Carter Olson
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(140deg,rgba(96,165,250,0.22),rgba(255,255,255,0.04))] p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-100">
                    Built for trust
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-100">
                    Clean clinical design, research-only language, and clear
                    disclosure are all positioned to convert serious buyers while
                    avoiding human-use claims.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white/75">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 py-6 md:grid-cols-4 md:px-8">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-700"
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
            Product categories
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            What Are You Optimizing For?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Browse the catalog by research intent, then reach out directly for
            product guidance, availability, and pricing.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {categoryCards.map((category) => (
            <CategoryCard key={category.slug} category={category} />
          ))}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Why Olsen
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Why Researchers and Biohackers Choose Olsen
            </h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whyOlsen.map((item) => (
              <div
                key={item.eyebrow}
                className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 shadow-[0_20px_60px_rgba(15,30,61,0.06)]"
              >
                <div className="flex items-center gap-3 text-slate-950">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-xl font-semibold">{item.eyebrow}</h3>
                </div>
                <p className="mt-5 leading-8 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Featured compounds
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Popular Research Compounds
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-sky-700"
          >
            View full catalog →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {spotlightProducts.map((product) => (
            <div
              key={product.name}
              className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,30,61,0.08)]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  {product.category}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                  Research Use Only
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">
                {product.name}
              </h3>
              <p className="mt-4 flex-1 leading-8 text-slate-600">
                {product.description}
              </p>
              <div className="mt-8 flex items-end justify-between gap-4">
                <p className="text-lg font-semibold text-slate-950">
                  {product.price}
                </p>
                <Link
                  href={product.href}
                  className="inline-flex items-center text-sm font-semibold text-brand-blue hover:text-sky-700"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:px-8 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              Start the conversation
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              Ready to Get Started?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Submit your info and Carter will follow up within 24 hours. Use
              the form for product questions, catalog requests, or general
              research inquiries.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Direct contact
                </p>
                <a
                  href="mailto:carteraolson22@gmail.com"
                  className="mt-3 block text-lg font-semibold text-slate-950 hover:text-brand-blue"
                >
                  carteraolson22@gmail.com
                </a>
                <a
                  href="tel:8016641860"
                  className="mt-1 block text-lg font-semibold text-slate-950 hover:text-brand-blue"
                >
                  801-664-1860
                </a>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Why this form converts
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                  <li>Research-only positioning throughout the inquiry flow.</li>
                  <li>Minimal fields to keep the lead capture friction low.</li>
                  <li>Direct handoff to Carter instead of a generic inbox.</li>
                </ul>
              </div>
            </div>
          </div>
          <LeadForm
            id="homepage-lead-form"
            title="Submit your inquiry"
            subtitle="Tell Carter what you are researching and he will follow up directly."
          />
        </div>
      </section>
    </>
  );
}

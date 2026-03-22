import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why buyers choose Olsen Peptides, with a focus on American-made sourcing and direct support from Carter Olson.",
};

const benefits = [
  "USA-manufactured compounds",
  "Research-grade purity standards",
  "Full catalog across metabolic, recovery, longevity, cognitive, and blend categories",
  "Personal consultation available",
  "Fast, discreet shipping",
  "No minimum order",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(145deg,#071226_0%,#0f1e3d_58%,#133b82_100%)] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.3),transparent_28%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 lg:py-24">
          <span className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
            About Olsen Peptides
          </span>
          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-extrabold tracking-tight sm:text-6xl">
            Why Buy From Olsen Peptides?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            The pitch is simple: domestic sourcing, research-first language, and
            a direct relationship with the person handling every inquiry.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
              The American-made difference
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
              When purity matters, source matters.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                The peptide market is crowded with overseas compounds of unknown
                origin, inconsistent purity, and almost no accountability.
                Olsen Peptides is positioned around a different assumption: if a
                buyer is running a serious research protocol, they should know
                where the compound came from and who stands behind it.
              </p>
              <p>
                Every compound in the catalog is manufactured in the United
                States under tighter quality expectations than anonymous
                offshore listings can offer. That sourcing standard is the
                business model, not a marketing footnote.
              </p>
            </div>
          </div>
          <div className="rounded-[34px] border border-slate-200 bg-white p-8 shadow-[0_28px_90px_rgba(15,30,61,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
              Why this matters
            </p>
            <div className="mt-6 space-y-5">
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Domestic sourcing</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Cleaner positioning for buyers who want accountability and a
                  credible supply story.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Research-only copy</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  The site avoids human-use claims and frames every offer around
                  research focus and catalog guidance.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <p className="font-semibold text-slate-950">Real follow-up</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Prospects are routed to a person, not a faceless ticket queue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
                Carter Olson
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                You&apos;re dealing with a real person.
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                <p>
                  Carter Olson isn&apos;t a faceless brand. He answers his own
                  phone, responds to his own emails, and stands behind every
                  inquiry that comes through the site.
                </p>
                <p>
                  When someone reaches out, they&apos;re talking to a real
                  operator who understands the catalog, the audience, and how to
                  guide a prospect toward the right research compound.
                </p>
              </div>
            </div>
            <div className="rounded-[34px] border border-slate-200 bg-[linear-gradient(145deg,#0f1e3d_0%,#12377d_100%)] p-8 text-white shadow-[0_32px_100px_rgba(15,30,61,0.16)]">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
                Direct contact
              </p>
              <div className="mt-8 space-y-5">
                <a
                  href="mailto:carteraolson22@gmail.com"
                  className="block rounded-3xl border border-white/12 bg-white/8 px-5 py-4 text-lg font-semibold hover:bg-white/12"
                >
                  carteraolson22@gmail.com
                </a>
                <a
                  href="tel:8016641860"
                  className="block rounded-3xl border border-white/12 bg-white/8 px-5 py-4 text-lg font-semibold hover:bg-white/12"
                >
                  801-664-1860
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">
            What we offer
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
            Quick reference for buyers evaluating the catalog
          </h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(15,30,61,0.05)]"
            >
              <p className="text-base font-semibold text-slate-900">✅ {benefit}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(145deg,#0f1e3d_0%,#133b82_100%)] py-24 text-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
            Next step
          </p>
          <h2 className="mt-4 text-balance text-4xl font-bold tracking-tight">
            Ready to find the right compound for your research?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            Use the homepage inquiry form to start the conversation and Carter
            will respond directly.
          </p>
          <Link
            href="/#contact"
            className="mt-10 inline-flex items-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100"
          >
            Inquire Now →
          </Link>
        </div>
      </section>
    </>
  );
}

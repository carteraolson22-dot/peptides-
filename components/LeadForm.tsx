"use client";

import { FormEvent, useState } from "react";
import { interestOptions } from "@/data/products";

type LeadFormProps = {
  id: string;
  title: string;
  subtitle: string;
  selectedProduct?: string;
  onClearSelectedProduct?: () => void;
};

type FormValues = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  selectedProduct: string;
};

type SubmitStatus =
  | { type: "idle"; message: string }
  | { type: "submitting"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function buildInitialValues(selectedProduct?: string): FormValues {
  return {
    name: "",
    email: "",
    phone: "",
    interest: "Not Sure Yet",
    message: selectedProduct
      ? `I would like more information about ${selectedProduct} for research purposes.`
      : "",
    selectedProduct: selectedProduct ?? "",
  };
}

export default function LeadForm({
  id,
  title,
  subtitle,
  selectedProduct,
  onClearSelectedProduct,
}: LeadFormProps) {
  const [values, setValues] = useState<FormValues>(() =>
    buildInitialValues(selectedProduct),
  );
  const [status, setStatus] = useState<SubmitStatus>({
    type: "idle",
    message: "",
  });

  function updateValue(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));

    if (status.type !== "idle") {
      setStatus({ type: "idle", message: "" });
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "submitting", message: "Submitting inquiry..." });

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      const payload = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;

      setStatus({
        type: "error",
        message:
          payload?.error ??
          "Something went wrong while sending your inquiry. Please try again.",
      });
      return;
    }

    setStatus({
      type: "success",
      message: "Thanks! Carter will be in touch within 24 hours.",
    });
    setValues(buildInitialValues(selectedProduct));
  }

  const isSubmitting = status.type === "submitting";
  const fieldClassName =
    "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-0 placeholder:text-slate-400 focus:border-brand-blue";
  const labelClassName =
    "text-sm font-semibold uppercase tracking-[0.16em] text-slate-500";

  return (
    <div className="rounded-[34px] border border-slate-200 bg-white p-7 shadow-[0_28px_90px_rgba(15,30,61,0.08)] sm:p-8">
      <div id={id}>
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-blue">
          Inquiry form
        </p>
        <h3 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-4 text-base leading-8 text-slate-600">{subtitle}</p>
      </div>

      {values.selectedProduct ? (
        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-3xl border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-900">
          <span className="font-semibold">Selected compound:</span>
          <span>{values.selectedProduct}</span>
          {onClearSelectedProduct ? (
            <button
              type="button"
              onClick={onClearSelectedProduct}
              className="ml-auto font-semibold text-sky-700 hover:text-sky-900"
            >
              Clear
            </button>
          ) : null}
        </div>
      ) : null}

      <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Full Name</span>
            <input
              required
              type="text"
              value={values.name}
              onChange={(event) => updateValue("name", event.target.value)}
              className={fieldClassName}
              placeholder="Carter Olson"
            />
          </label>

          <label className="block">
            <span className={labelClassName}>Email Address</span>
            <input
              required
              type="email"
              value={values.email}
              onChange={(event) => updateValue("email", event.target.value)}
              className={fieldClassName}
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className={labelClassName}>Phone Number</span>
            <input
              type="tel"
              value={values.phone}
              onChange={(event) => updateValue("phone", event.target.value)}
              className={fieldClassName}
              placeholder="Optional"
            />
          </label>

          <label className="block">
            <span className={labelClassName}>What are you interested in?</span>
            <select
              value={values.interest}
              onChange={(event) => updateValue("interest", event.target.value)}
              className={fieldClassName}
            >
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="block">
          <span className={labelClassName}>Message / Questions</span>
          <textarea
            value={values.message}
            onChange={(event) => updateValue("message", event.target.value)}
            className={`${fieldClassName} min-h-36 resize-y`}
            placeholder="Tell Carter which compounds or category you want to learn more about."
          />
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-[#1746c2] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry →"}
          </button>
          <p className="text-sm text-slate-500">
            Or call/text directly:{" "}
            <a href="tel:8016641860" className="font-semibold text-slate-900">
              801-664-1860
            </a>
          </p>
        </div>

        <p
          className={
            status.type === "error"
              ? "text-sm font-medium text-rose-600"
              : "text-sm font-medium text-emerald-600"
          }
          aria-live="polite"
        >
          {status.message}
        </p>
      </form>
    </div>
  );
}

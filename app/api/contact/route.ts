import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  selectedProduct?: string;
};

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const interest = body.interest?.trim() ?? "Not Sure Yet";
  const message = body.message?.trim() ?? "";
  const selectedProduct = body.selectedProduct?.trim() ?? "";

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (!resend) {
    return NextResponse.json(
      { error: "Email delivery is not configured yet." },
      { status: 503 },
    );
  }

  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Olsen Peptides <onboarding@resend.dev>";
  const subjectDetail = selectedProduct || interest;

  const { data, error } = await resend.emails.send({
    from,
    to: ["carteraolson22@gmail.com"],
    replyTo: email,
    subject: `New Inquiry: ${name} - ${subjectDetail}`,
    html: `
      <h2>New lead from Olsen Peptides</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
      <p><strong>Interest:</strong> ${escapeHtml(interest)}</p>
      <p><strong>Selected product:</strong> ${escapeHtml(selectedProduct || "None")}</p>
      <p><strong>Message:</strong> ${escapeHtml(message || "None provided")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ success: true, id: data?.id ?? null });
}

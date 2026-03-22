# Olsen Peptides

Lead-generation website for Olsen Peptides, built with Next.js App Router and Tailwind CSS.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment variables:

```bash
cp .env.example .env.local
```

3. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

## Environment

- `RESEND_API_KEY`: Resend API key used by `app/api/contact/route.ts`
- `RESEND_FROM_EMAIL`: Optional sender address. Defaults to `Olsen Peptides <onboarding@resend.dev>` until a custom domain is verified.

## Commands

- `npm run dev`
- `npm run lint`
- `npm run build`

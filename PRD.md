# OLSEN PEPTIDES — Product Requirements Document
## Build Spec for GPT-5.4 (Conductor) — Next.js

---

## 🎯 Project Overview

**Brand:** Olsen Peptides  
**Tagline:** Research-grade peptides. Made in the USA.  
**Purpose:** Lead generation website for Carter Olson's peptide business. Visitors browse products and submit a lead capture form. Carter follows up via email/call.  
**Repo:** https://github.com/carteraolson22-dot/peptides-  
**Deployment:** Vercel (auto-deploy from main branch)  
**Contact:** carteraolson22@gmail.com | 801-664-1860  

---

## 🏗️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Form handling:** Formspree or Resend (email carteraolson22@gmail.com on submission)
- **No backend required** — static-first with API route for form submission only
- **No auth, no checkout, no cart** — this is purely a lead gen site

---

## 📄 Pages (3 Total)

1. `/` — Homepage
2. `/products` — Full product catalog
3. `/about` — Why buy from Olsen Peptides

---

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#1B4FD8` (trust, clinical, authority)
- **Deep Navy:** `#0F1E3D` (backgrounds, hero sections)
- **Light Blue Accent:** `#60A5FA` (highlights, hover states, badges)
- **White:** `#FFFFFF` (text on dark backgrounds, card backgrounds)
- **Off-White/Gray:** `#F1F5F9` (section backgrounds, card fills)
- **Dark Text:** `#0F172A` (body text on light backgrounds)
- **Success/CTA Green:** `#10B981` (optional for CTAs — or stay blue)

### Typography
- **Headings:** Inter or Geist (bold, clean, modern — clinical feel)
- **Body:** Inter (14-16px, readable, minimal)
- **Weight hierarchy:** 800 for hero H1, 700 for section headers, 400-500 for body

### Visual Vibe
- Clean, premium, clinical but accessible
- Dark navy hero sections with white text
- White/light gray product section backgrounds
- Blue accents throughout
- Subtle gradients allowed (navy → deeper navy)
- No aggressive/underground aesthetic — this is premium and trustworthy
- Think: Thorne meets Limitless, with an American-made badge of honor

### Logo
- Text-based logo for now: "OLSEN PEPTIDES" in bold uppercase Inter
- Optional: Small USA flag icon or ⚗️ icon next to brand name

---

## 📱 Responsiveness
- Mobile-first design
- Breakpoints: 320px (mobile), 768px (tablet), 1024px (desktop), 1280px (wide)
- Navigation collapses to hamburger on mobile

---

## 🧭 Navigation

```
[OLSEN PEPTIDES logo]    [Products]  [About]  [Get Started →]
```

- Logo links to `/`
- "Get Started" = CTA button (blue) → scrolls to lead form or links to form on homepage
- Sticky nav on scroll
- Mobile: hamburger menu

---

## 📑 PAGE 1: Homepage (`/`)

### Section 1 — Hero
**Layout:** Full-width, dark navy background, centered content, optional subtle gradient or mesh pattern

**Headline (H1):**
> Research-Grade Peptides.  
> Made in the USA.

**Subheadline:**
> Olsen Peptides sources and supplies the highest-quality research peptides available — formulated in the United States, backed by science, and trusted by biohackers, athletes, and longevity researchers.

**CTA Buttons (two):**
- Primary: `Explore Products →` → links to `/products`
- Secondary: `Get in Touch` → smooth scroll to lead form section below

**Hero Visual:** Clean dark background with subtle blue gradient or abstract molecular/DNA SVG graphic (tasteful, not cheesy). No stock photos in hero — keep it sleek.

---

### Section 2 — Trust Bar (horizontal strip, light background)
Four icons + short labels in a row:

| Icon | Label |
|------|-------|
| 🇺🇸 | Made in the USA |
| 🔬 | Research-Grade Purity |
| ⚡ | Fast Shipping |
| 🔒 | Secure & Discreet |

---

### Section 3 — Category Preview (4 cards)
**Headline:** "What Are You Optimizing For?"

Four category cards linking to `/products` filtered or anchored by category:

| Category | Icon | Description |
|----------|------|-------------|
| Weight Loss & Metabolism | 🔥 | Retatrutide, MOTS-c and next-gen GLP-1 class compounds |
| Recovery & Healing | 💪 | BPC-157, TB-500, GHK-Cu — tissue repair and regeneration |
| Longevity & Anti-Aging | 🧬 | NAD+, Epitalon, GHK-Cu — cellular health and the long game |
| Cognitive & Mood | 🧠 | Semax, Selank, DSIP — clarity, calm, and deep sleep |

Each card: icon, title, 1-sentence description, "View Products →" link

---

### Section 4 — Why Olsen (3-column feature block)
**Headline:** "Why Researchers and Biohackers Choose Olsen"

Three columns:

**🇺🇸 American-Made Quality**  
Every peptide in our catalog is manufactured right here in the United States under strict quality controls. No overseas sourcing, no unknown supply chains.

**🔬 Research-Grade Purity**  
Our compounds are tested and produced at research-grade purity standards. We stand behind every product we offer.

**🤝 Personal Service**  
You're not buying from a warehouse. Carter Olson personally handles every inquiry — real answers, real expertise, real follow-through.

---

### Section 5 — Featured Products (3 spotlight cards)
**Headline:** "Popular Research Compounds"

Highlight 3 hero products:
1. **BPC-157** — The #1 recovery peptide. Tendon, gut, inflammation.
2. **CJC-1295 + Ipamorelin Stack** — The GH axis classic. Fat loss, muscle, sleep.
3. **Retatrutide** — Next-gen weight loss. Triple receptor activation.

Each card: name, category badge, 1-line description, price, "Learn More →" linking to `/products`

---

### Section 6 — Lead Capture Form
**Headline:** "Ready to Get Started?"  
**Subheadline:** Submit your info and Carter will reach out within 24 hours.

**Form Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (optional)
- What are you interested in? (dropdown: Weight Loss / Recovery / Anti-Aging / Cognitive / Not Sure Yet)
- Message / Questions (textarea, optional)
- [Submit Inquiry →] button (blue)

**On Submit:**
- POST to form handler → send email to carteraolson22@gmail.com with all fields
- Show success message: "Thanks! Carter will be in touch within 24 hours."
- No redirect needed

**Below form:** "Or call/text directly: 801-664-1860"

---

### Section 7 — Footer
- Logo + tagline
- Nav links: Home | Products | About
- Email: carteraolson22@gmail.com
- Phone: 801-664-1860
- Legal disclaimer (see below)
- © 2025 Olsen Peptides. All rights reserved.

**Legal Disclaimer (footer, small text):**
> All products sold by Olsen Peptides are intended for research purposes only and are not for human consumption. These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease. By purchasing from Olsen Peptides, you confirm that you are a licensed researcher or qualified professional and that all products will be used strictly for research purposes in a controlled laboratory setting.

---

## 📑 PAGE 2: Products (`/products`)

### Layout
- Page header: "Research Compound Catalog"
- Subheading: "All peptides manufactured in the United States. Research use only."
- Category filter tabs (sticky on scroll):
  - All | Weight Loss | Growth Hormone | Recovery | Longevity | Cognitive | Blends
- Product grid below: 3 columns desktop, 2 tablet, 1 mobile

### Product Card Component
Each card contains:
- Product name (bold)
- Category badge (colored pill: blue, green, purple, etc.)
- Type (e.g., "Triple Incretin Agonist")
- 1-2 line research focus description
- Price
- "Inquire About This Product →" button → smooth scroll to contact form at bottom of page OR opens a mailto with product name pre-filled

### Full Product Catalog

#### 🔥 Weight Loss & Metabolism

**Retatrutide**
- Type: Triple incretin receptor agonist (GLP-1, GIP, Glucagon)
- Research focus: Fat loss, appetite suppression, metabolic markers
- Price: [FROM PRICING SHEET]

**MOTS-c**
- Type: Mitochondrial-derived peptide
- Research focus: Insulin sensitivity, energy production, fat metabolism
- Price: [FROM PRICING SHEET]

---

#### 💪 Growth Hormone / Body Composition

**CJC-1295**
- Type: GHRH analog
- Research focus: GH pulse frequency, IGF-1 elevation, fat metabolism, muscle growth
- Price: [FROM PRICING SHEET]

**Ipamorelin**
- Type: Growth hormone secretagogue
- Research focus: Muscle recovery, fat loss, sleep quality
- Price: [FROM PRICING SHEET]

**Tesamorelin**
- Type: GHRH analog (FDA-approved for specific use)
- Research focus: Visceral fat reduction, metabolic health
- Price: [FROM PRICING SHEET]

**IGF-1**
- Type: Growth factor
- Research focus: Muscle hypertrophy, tissue repair, cell proliferation
- Price: [FROM PRICING SHEET]

---

#### 🏥 Recovery & Healing

**BPC-157**
- Type: Gastric-derived peptide (15 amino acids)
- Research focus: Tendon/ligament healing, gut repair, inflammation reduction
- Price: [FROM PRICING SHEET]

**TB-500 (Thymosin Beta-4 Fragment)**
- Type: Regenerative peptide
- Research focus: Injury recovery, tissue regeneration, muscle repair
- Price: [FROM PRICING SHEET]

**GHK-Cu**
- Type: Copper-binding peptide
- Research focus: Skin regeneration, hair growth, wound healing, collagen
- Price: [FROM PRICING SHEET]

---

#### 🧬 Longevity & Cellular Health

**Epitalon (Epithalon)**
- Type: Synthetic tetrapeptide
- Research focus: Telomerase activation, circadian regulation, cellular aging
- Price: [FROM PRICING SHEET]

**NAD+**
- Type: Coenzyme
- Research focus: ATP production, DNA repair, aging, brain function
- Price: [FROM PRICING SHEET]

**Melanotan 1**
- Type: Melanocortin analog
- Research focus: Melanin/pigmentation, UV protection
- Price: [FROM PRICING SHEET]

---

#### 🧠 Cognitive / Neuropeptides

**Semax**
- Type: Nootropic peptide
- Research focus: BDNF increase, cognitive function, neuroprotection, memory
- Price: [FROM PRICING SHEET]

**Selank**
- Type: Synthetic tuftsin analog
- Research focus: Anxiety reduction, mood stabilization, non-sedative
- Price: [FROM PRICING SHEET]

**DSIP (Delta Sleep-Inducing Peptide)**
- Type: Neuroregulatory peptide
- Research focus: Sleep regulation, stress response
- Price: [FROM PRICING SHEET]

---

#### ⚗️ Advanced Blends

**KLOW Blend (80mg) — $170**
- Composition: BPC-157 + TB-500 + GHK-Cu + KPV
- Research focus: Multi-pathway repair — tissue regeneration, inflammation, collagen, gut healing
- The flagship recovery stack.

**Glow Blend (70mg) — $150**
- Research focus: Skin, hair, and collagen-focused blend
- Separate product from KLOW — skin/beauty optimization angle

---

### Bottom of Products Page
Mini lead capture form (same as homepage form) or prominent CTA:
> "Have questions about a specific compound? Carter will help you find the right protocol."  
> [Email Us] [Call/Text: 801-664-1860]

---

## 📑 PAGE 3: About (`/about`)

### Headline
> Why Buy From Olsen Peptides?

### Section 1 — The American-Made Difference
**Subheadline:** "When purity matters, source matters."

Body copy (write in confident, trustworthy voice — not salesy):
> The peptide market is flooded with overseas compounds of unknown origin, inconsistent purity, and zero accountability. Olsen Peptides was built on a different premise: if you're putting research-grade compounds into a serious protocol, you deserve to know exactly where they came from.
>
> Every compound in our catalog is manufactured in the United States, under quality controls that overseas suppliers simply don't match. That's not a marketing line — it's the foundation of everything we do.

---

### Section 2 — Carter Olson (Personal Credibility Block)
**Subheadline:** "You're dealing with a real person."

> Carter Olson isn't a faceless brand. He's a real person who answers his own phone, responds to his own emails, and stands behind every product he sells.
>
> When you reach out, you're talking to someone who understands the science, knows the protocols, and cares about getting you the right compound for your research goals.
>
> No chatbots. No ticket queues. Just Carter.

**Contact block:**
- 📧 carteraolson22@gmail.com
- 📞 801-664-1860

---

### Section 3 — What We Offer (quick reference grid)
Six bullet benefits:
- ✅ USA-manufactured compounds
- ✅ Research-grade purity standards
- ✅ Full product catalog — metabolic, recovery, longevity, cognitive
- ✅ Personal consultation available
- ✅ Fast, discreet shipping
- ✅ No minimum order

---

### Section 4 — CTA
> Ready to find the right compound for your research?

[Inquire Now →] → links to homepage form or `/` scroll to form

---

## 📁 Recommended File Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with nav + footer
│   ├── page.tsx            # Homepage
│   ├── products/
│   │   └── page.tsx        # Products catalog page
│   ├── about/
│   │   └── page.tsx        # About page
│   └── api/
│       └── contact/
│           └── route.ts    # Form submission handler → email Carter
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── LeadForm.tsx
│   ├── TrustBar.tsx
│   └── CategoryCard.tsx
├── data/
│   └── products.ts         # Product catalog data (name, type, description, price, category)
├── public/
│   └── (images, logo, flags)
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## ⚙️ Form Submission Handler

Use **Resend** or **Formspree** for email delivery.

If Resend:
```ts
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  
  await resend.emails.send({
    from: 'Olsen Peptides <noreply@olsenpeptides.com>',
    to: 'carteraolson22@gmail.com',
    subject: `New Inquiry: ${body.name} — ${body.interest}`,
    html: `
      <h2>New Lead from Olsen Peptides</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
      <p><strong>Interest:</strong> ${body.interest}</p>
      <p><strong>Message:</strong> ${body.message || 'None'}</p>
    `
  });

  return Response.json({ success: true });
}
```

---

## 🚀 Deployment

1. Push to GitHub: https://github.com/carteraolson22-dot/peptides-
2. Connect repo to Vercel
3. Set env vars in Vercel:
   - `RESEND_API_KEY` (or Formspree endpoint)
4. Auto-deploys on every push to `main`
5. Custom domain: TBD (olsenpeptides.com or similar)

---

## ⚠️ Legal Notes for Build

- Footer disclaimer is **mandatory on every page**
- No language claiming products are for human use
- All CTAs should say "Research Use Only" or "For Research Purposes"
- Product descriptions should reference "research focus" not "benefits"
- Do NOT include before/after photos, testimonials claiming health outcomes, or any medical claims

---

## 📝 Pricing — Fill In Before Build

Review the attached pricing sheet from Carter and populate the `price` field in `data/products.ts` for each compound. Glow Blend = $150 (70mg), KLOW = $170 (80mg) are confirmed.

---

## ✅ Definition of Done

- [ ] All 3 pages render correctly on mobile, tablet, desktop
- [ ] Lead form submits successfully and Carter receives email at carteraolson22@gmail.com
- [ ] All 16 products + 2 blends listed on /products
- [ ] Category filter works on /products page
- [ ] Legal disclaimer visible in footer on all pages
- [ ] Deployed to Vercel from GitHub repo
- [ ] No console errors, no broken links

---

*PRD authored by Q (Cutbox.ai) for Carter Olson / Olsen Peptides*  
*Build target: GPT-5.4 via Conductor*  
*Date: March 2026*

export type ProductCategory =
  | "weight-loss"
  | "growth-hormone"
  | "recovery"
  | "longevity"
  | "cognitive"
  | "blends";

export type Product = {
  slug: string;
  name: string;
  category: ProductCategory;
  type: string;
  researchFocus: string;
  price: string;
};

export type CategoryCardData = {
  slug: ProductCategory;
  title: string;
  icon: string;
  description: string;
  href: string;
  badgeClass: string;
  glow: string;
  label: string;
};

export const interestOptions = [
  "Weight Loss",
  "Recovery",
  "Anti-Aging",
  "Cognitive",
  "Not Sure Yet",
];

export const categoryCards: CategoryCardData[] = [
  {
    slug: "weight-loss",
    title: "Weight Loss & Metabolism",
    icon: "🔥",
    description:
      "Retatrutide, MOTS-c, and next-gen GLP-1 class compounds for metabolic marker research.",
    href: "/products?category=weight-loss",
    badgeClass: "bg-sky-100 text-sky-700",
    glow:
      "bg-[radial-gradient(circle_at_top,rgba(191,219,254,0.55),transparent_45%),white]",
    label: "Weight Loss",
  },
  {
    slug: "recovery",
    title: "Recovery & Healing",
    icon: "💪",
    description:
      "BPC-157, TB-500, and GHK-Cu for tissue repair, collagen, and inflammation-focused research.",
    href: "/products?category=recovery",
    badgeClass: "bg-emerald-100 text-emerald-700",
    glow:
      "bg-[radial-gradient(circle_at_top,rgba(187,247,208,0.55),transparent_45%),white]",
    label: "Recovery",
  },
  {
    slug: "longevity",
    title: "Longevity & Anti-Aging",
    icon: "🧬",
    description:
      "NAD+, Epitalon, and GHK-Cu for cellular health, energy systems, and long-horizon protocols.",
    href: "/products?category=longevity",
    badgeClass: "bg-violet-100 text-violet-700",
    glow:
      "bg-[radial-gradient(circle_at_top,rgba(221,214,254,0.55),transparent_45%),white]",
    label: "Longevity",
  },
  {
    slug: "cognitive",
    title: "Cognitive & Mood",
    icon: "🧠",
    description:
      "Semax, Selank, and DSIP for clarity, calm, neuroprotection, and sleep-regulation research.",
    href: "/products?category=cognitive",
    badgeClass: "bg-amber-100 text-amber-700",
    glow:
      "bg-[radial-gradient(circle_at_top,rgba(253,230,138,0.45),transparent_45%),white]",
    label: "Cognitive",
  },
];

export const categoryLookup: Record<ProductCategory, CategoryCardData> = {
  "weight-loss": categoryCards[0],
  recovery: categoryCards[1],
  longevity: categoryCards[2],
  cognitive: categoryCards[3],
  "growth-hormone": {
    slug: "growth-hormone",
    title: "Growth Hormone / Body Composition",
    icon: "📈",
    description:
      "CJC-1295, Ipamorelin, Tesamorelin, and IGF-1 for GH-axis and body-composition research.",
    href: "/products?category=growth-hormone",
    badgeClass: "bg-rose-100 text-rose-700",
    glow:
      "bg-[radial-gradient(circle_at_top,rgba(254,205,211,0.55),transparent_45%),white]",
    label: "Growth Hormone",
  },
  blends: {
    slug: "blends",
    title: "Advanced Blends",
    icon: "⚗️",
    description:
      "Flagship blend products built around repair and skin-health research goals.",
    href: "/products?category=blends",
    badgeClass: "bg-cyan-100 text-cyan-700",
    glow:
      "bg-[radial-gradient(circle_at_top,rgba(165,243,252,0.55),transparent_45%),white]",
    label: "Blends",
  },
};

export const categoryFilters: Array<{
  slug: ProductCategory | "all";
  label: string;
}> = [
  { slug: "all", label: "All" },
  { slug: "weight-loss", label: "Weight Loss" },
  { slug: "growth-hormone", label: "Growth Hormone" },
  { slug: "recovery", label: "Recovery" },
  { slug: "longevity", label: "Longevity" },
  { slug: "cognitive", label: "Cognitive" },
  { slug: "blends", label: "Blends" },
];

export const products: Product[] = [
  {
    slug: "retatrutide",
    name: "Retatrutide",
    category: "weight-loss",
    type: "Triple incretin receptor agonist",
    researchFocus:
      "Research focus: fat-loss markers, appetite suppression, and metabolic signaling across GLP-1, GIP, and glucagon pathways.",
    price: "Price on request",
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "weight-loss",
    type: "Mitochondrial-derived peptide",
    researchFocus:
      "Research focus: insulin sensitivity, energy production, and fat-metabolism pathways.",
    price: "Price on request",
  },
  {
    slug: "cjc-1295",
    name: "CJC-1295",
    category: "growth-hormone",
    type: "GHRH analog",
    researchFocus:
      "Research focus: growth hormone pulse frequency, IGF-1 elevation, fat metabolism, and muscle-growth signaling.",
    price: "Price on request",
  },
  {
    slug: "ipamorelin",
    name: "Ipamorelin",
    category: "growth-hormone",
    type: "Growth hormone secretagogue",
    researchFocus:
      "Research focus: recovery, body-composition work, and sleep-quality research.",
    price: "Price on request",
  },
  {
    slug: "tesamorelin",
    name: "Tesamorelin",
    category: "growth-hormone",
    type: "GHRH analog",
    researchFocus:
      "Research focus: visceral fat reduction and metabolic health protocols.",
    price: "Price on request",
  },
  {
    slug: "igf-1",
    name: "IGF-1",
    category: "growth-hormone",
    type: "Growth factor",
    researchFocus:
      "Research focus: muscle hypertrophy, tissue repair, and cell-proliferation models.",
    price: "Price on request",
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "recovery",
    type: "Gastric-derived peptide",
    researchFocus:
      "Research focus: tendon and ligament healing, gut repair, and inflammation-response research.",
    price: "Price on request",
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "recovery",
    type: "Regenerative peptide",
    researchFocus:
      "Research focus: injury recovery, tissue regeneration, and muscle-repair pathways.",
    price: "Price on request",
  },
  {
    slug: "ghk-cu",
    name: "GHK-Cu",
    category: "recovery",
    type: "Copper-binding peptide",
    researchFocus:
      "Research focus: skin regeneration, hair-growth signaling, wound healing, and collagen support.",
    price: "Price on request",
  },
  {
    slug: "kpv",
    name: "KPV",
    category: "recovery",
    type: "Tripeptide fragment",
    researchFocus:
      "Research focus: inflammatory signaling, gut-health models, and epithelial support research.",
    price: "Price on request",
  },
  {
    slug: "epitalon",
    name: "Epitalon (Epithalon)",
    category: "longevity",
    type: "Synthetic tetrapeptide",
    researchFocus:
      "Research focus: telomerase activation, circadian regulation, and cellular-aging models.",
    price: "Price on request",
  },
  {
    slug: "nad-plus",
    name: "NAD+",
    category: "longevity",
    type: "Coenzyme",
    researchFocus:
      "Research focus: ATP production, DNA repair, aging, and brain-function pathways.",
    price: "Price on request",
  },
  {
    slug: "melanotan-1",
    name: "Melanotan 1",
    category: "longevity",
    type: "Melanocortin analog",
    researchFocus:
      "Research focus: melanin regulation and UV-protection-related pigmentation research.",
    price: "Price on request",
  },
  {
    slug: "semax",
    name: "Semax",
    category: "cognitive",
    type: "Nootropic peptide",
    researchFocus:
      "Research focus: BDNF signaling, cognitive function, neuroprotection, and memory studies.",
    price: "Price on request",
  },
  {
    slug: "selank",
    name: "Selank",
    category: "cognitive",
    type: "Synthetic tuftsin analog",
    researchFocus:
      "Research focus: anxiety modulation, mood stabilization, and non-sedative calm-state research.",
    price: "Price on request",
  },
  {
    slug: "dsip",
    name: "DSIP",
    category: "cognitive",
    type: "Neuroregulatory peptide",
    researchFocus:
      "Research focus: sleep regulation and stress-response studies.",
    price: "Price on request",
  },
  {
    slug: "klow-blend",
    name: "KLOW Blend (80mg)",
    category: "blends",
    type: "Recovery blend",
    researchFocus:
      "Research focus: multi-pathway repair, including tissue regeneration, inflammation response, collagen support, and gut-healing models.",
    price: "$170",
  },
  {
    slug: "glow-blend",
    name: "Glow Blend (70mg)",
    category: "blends",
    type: "Skin and collagen blend",
    researchFocus:
      "Research focus: skin, hair, and collagen-oriented optimization research.",
    price: "$150",
  },
];

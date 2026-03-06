export type ProductCategory = "desk-office" | "travel" | "audio-tech" | "lifestyle";

export interface Product {
  sku: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  image: string;
  images: string[];
  highlights: string[];
  variants: {
    color: string;
    inStock: boolean;
  }[];
  specs: Array<{ key: string; value: string }>;
  relatedSlugs: string[];
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export const products: Product[] = [
  {
    sku: "NC-TRAY-001",
    slug: "modular-desk-tray-set",
    name: "Modular Desk Tray Set",
    description: "Stackable organizer system for desk essentials.",
    category: "desk-office",
    price: 39,
    compareAtPrice: 49,
    rating: 4.8,
    reviewCount: 214,
    badge: "Best Seller",
    image: "/images/products/desk-tray.jpg",
    images: ["/images/products/desk-tray.jpg"],
    highlights: ["Stackable, non-slip base", "Recycled ABS + matte finish", "Fits pens, keys, and cables"],
    variants: [
      { color: "Graphite", inStock: true },
      { color: "Sand", inStock: true },
      { color: "Ice", inStock: true },
    ],
    specs: [
      { key: "Materials", value: "Recycled ABS" },
      { key: "Warranty", value: "1-year limited warranty" },
    ],
    relatedSlugs: ["braided-usbc-cable-2m", "dot-grid-notebook-a5"],
    isBestSeller: true,
  },
  {
    sku: "NC-CHRG-014",
    slug: "magsafe-stand-charger",
    name: "MagSafe-Compatible Stand Charger",
    description: "Weighted aluminum stand with fast magnetic charging.",
    category: "audio-tech",
    price: 59,
    compareAtPrice: 69,
    rating: 4.7,
    reviewCount: 168,
    badge: "Fast Shipping",
    image: "/images/products/stand-charger.jpg",
    images: ["/images/products/stand-charger.jpg"],
    highlights: ["15W peak output", "Weighted aluminum base", "USB‑C cable included"],
    variants: [
      { color: "Graphite", inStock: true },
      { color: "Sand", inStock: true },
    ],
    specs: [
      { key: "Materials", value: "Aluminum + silicone" },
      { key: "Power", value: "Up to 15W" },
    ],
    relatedSlugs: ["braided-usbc-cable-2m", "minimal-desk-lamp"],
    isBestSeller: true,
  },
  {
    sku: "NC-PCH-210",
    slug: "travel-utility-pouch",
    name: "Travel Utility Pouch",
    description: "Water-resistant pouch for cables and accessories.",
    category: "travel",
    price: 28,
    rating: 4.6,
    reviewCount: 92,
    badge: "New",
    image: "/images/products/travel-pouch.jpg",
    images: ["/images/products/travel-pouch.jpg"],
    highlights: ["Water-resistant ripstop", "3 internal pockets", "YKK zipper"],
    variants: [
      { color: "Graphite", inStock: true },
      { color: "Sand", inStock: true },
      { color: "Ice", inStock: false },
    ],
    specs: [
      { key: "Materials", value: "Ripstop nylon" },
      { key: "Closure", value: "YKK zipper" },
    ],
    relatedSlugs: ["insulated-bottle-20oz", "hard-shell-earbuds-case"],
    isNewArrival: true,
  },
  {
    sku: "NC-BTL-033",
    slug: "insulated-bottle-20oz",
    name: "Insulated Bottle (20oz)",
    description: "Double-wall insulated bottle for daily hydration.",
    category: "lifestyle",
    price: 32,
    rating: 4.9,
    reviewCount: 301,
    badge: "Top Rated",
    image: "/images/products/insulated-bottle.jpg",
    images: ["/images/products/insulated-bottle.jpg"],
    highlights: ["Keeps cold 24h / hot 12h", "Powder-coated finish", "Leak-proof lid"],
    variants: [
      { color: "Graphite", inStock: true },
      { color: "Sand", inStock: true },
      { color: "Ice", inStock: true },
    ],
    specs: [
      { key: "Materials", value: "Stainless steel" },
      { key: "Capacity", value: "20oz" },
    ],
    relatedSlugs: ["travel-utility-pouch", "dot-grid-notebook-a5"],
    isBestSeller: true,
  },
  {
    sku: "NC-CBL-008",
    slug: "braided-usbc-cable-2m",
    name: "Braided USB‑C Cable (2m)",
    description: "Durable high-power USB-C cable for fast charging.",
    category: "audio-tech",
    price: 18,
    rating: 4.5,
    reviewCount: 77,
    badge: "Everyday",
    image: "/images/products/braided-cable.jpg",
    images: ["/images/products/braided-cable.jpg"],
    highlights: ["100W charging support", "Tangle-resistant braid", "Reinforced strain relief"],
    variants: [{ color: "Graphite", inStock: true }],
    specs: [
      { key: "Length", value: "2 meters" },
      { key: "Power", value: "Up to 100W" },
    ],
    relatedSlugs: ["magsafe-stand-charger", "hard-shell-earbuds-case"],
  },
  {
    sku: "NC-CASE-101",
    slug: "hard-shell-earbuds-case",
    name: "Hard Shell Earbuds Case",
    description: "Protective shell case with soft microfiber interior.",
    category: "audio-tech",
    price: 22,
    rating: 4.6,
    reviewCount: 54,
    badge: "Giftable",
    image: "/images/products/earbuds-case.jpg",
    images: ["/images/products/earbuds-case.jpg"],
    highlights: ["Scratch-resistant shell", "Carabiner included", "Soft microfiber lining"],
    variants: [
      { color: "Graphite", inStock: true },
      { color: "Sand", inStock: true },
    ],
    specs: [
      { key: "Materials", value: "Polycarbonate + microfiber" },
      { key: "Attachment", value: "Carabiner included" },
    ],
    relatedSlugs: ["braided-usbc-cable-2m", "travel-utility-pouch"],
  },
  {
    sku: "NC-LMP-404",
    slug: "minimal-desk-lamp",
    name: "Minimal Desk Lamp",
    description: "Clean-profile desk lamp with adjustable brightness.",
    category: "desk-office",
    price: 89,
    rating: 4.4,
    reviewCount: 41,
    image: "/images/products/desk-lamp.jpg",
    images: ["/images/products/desk-lamp.jpg"],
    highlights: ["Flicker-free light", "Touch dimming", "Weighted base"],
    variants: [
      { color: "Graphite", inStock: true },
      { color: "Sand", inStock: false },
    ],
    specs: [
      { key: "Power", value: "USB-C input" },
      { key: "Modes", value: "3 brightness levels" },
    ],
    relatedSlugs: ["modular-desk-tray-set", "dot-grid-notebook-a5"],
    isNewArrival: true,
  },
  {
    sku: "NC-NB-055",
    slug: "dot-grid-notebook-a5",
    name: "Dot Grid Notebook (A5)",
    description: "Minimal notebook for planning, sketching, and notes.",
    category: "desk-office",
    price: 14,
    rating: 4.7,
    reviewCount: 120,
    image: "/images/products/dot-grid-notebook.jpg",
    images: ["/images/products/dot-grid-notebook.jpg"],
    highlights: ["Lay-flat binding", "120gsm paper", "A5 size"],
    variants: [{ color: "Sand", inStock: true }],
    specs: [
      { key: "Size", value: "A5" },
      { key: "Paper", value: "120gsm dot grid" },
    ],
    relatedSlugs: ["modular-desk-tray-set", "minimal-desk-lamp"],
  },
];

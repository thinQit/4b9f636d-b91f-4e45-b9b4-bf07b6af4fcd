export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTASparkles from "@/components/CTASparkles"
import NewsletterSignup from "@/components/NewsletterSignup"

export default function StorePage() {
  return (
    <main>
      <HeroAurora
        badge="Bundle deal: Any 2 products — 15% off (auto-applied at checkout)."
        title="Digital products for modern websites"
        subtitle="Templates, UI kits, and starter packs designed for speed, clarity, and conversion."
        primaryCta={{ label: "Shop featured", href: "#product-grid" }}
        secondaryCta={{ label: "Store details", href: "/store/details" }}
      />

      <FeaturesCards3D
        badge="Shop by category"
        title="Find what you need fast"
        subtitle="Then customize it to your brand."
        features={[
          {
            icon: "LayoutTemplate",
            title: "Templates",
            description: "Landing pages, portfolios, and modern marketing layouts.",
          },
          {
            icon: "PanelsTopLeft",
            title: "UI Kits",
            description: "Reusable sections and components with consistent design tokens.",
          },
          {
            icon: "Package",
            title: "Starters",
            description: "Next.js foundations with SEO and structure baked in.",
          },
          {
            icon: "Sparkles",
            title: "Animations",
            description: "Micro-interactions and scroll reveals that feel premium.",
          },
        ]}
      />

      <section id="product-grid">
        <FeaturesCards3D
          badge="Products"
          title="Clean previews, clear pricing, and quick add-to-cart"
          features={[
            {
              icon: "Star",
              title: "Landing Page Kit v2 — $49",
              description: "Rated 4.9 (86 reviews) • conversion-ready responsive sections.",
            },
            {
              icon: "Laptop",
              title: "Portfolio Starter (Next.js) — $39",
              description: "Rated 4.8 (41 reviews) • App Router + case study structure.",
            },
            {
              icon: "Pointer",
              title: "UI Microinteractions Pack — $29",
              description: "Rated 4.7 (58 reviews) • polished hover/focus/scroll states.",
            },
            {
              icon: "FileBadge2",
              title: "Resume → Website Kit — $19",
              description: "Rated 4.6 (33 reviews) • transform CV content into a modern site.",
            },
          ]}
        />
      </section>

      <CTASparkles
        title="Built for trust and speed"
        subtitle="Secure checkout, instant delivery, clear licensing, and support included."
        ctaLabel="Store details"
        ctaHref="/store/details"
        secondaryCtaLabel="Contact"
        secondaryCtaHref="/contact"
      />

      <NewsletterSignup
        headline="Get product drops and updates"
        subheadline="Subscribe and get a free “Pricing Table” component (Tailwind + shadcn styles)."
        ctaLabel="Subscribe"
      />
    </main>
  )
}

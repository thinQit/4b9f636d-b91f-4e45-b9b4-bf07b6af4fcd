export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FiltersSidebar from "@/components/FiltersSidebar"
import ProductGrid from "@/components/ProductGrid"
import CTABanner from "@/components/CTABanner"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function StorePage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="Curated essentials"
        title="Shop NovaCart"
        subtitle="Curated essentials with transparent pricing, fast shipping, and a clean buying experience."
        primaryCta={{ label: "Filter by Category", href: "#filters" }}
        secondaryCta={{ label: "View Store Details", href: "/store-details" }}
      />
      <section id="filters" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 grid gap-6 lg:grid-cols-[280px_1fr]">
          <FiltersSidebar />
          <ProductGrid />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <CTABanner
            headline="Need help choosing?"
            description="Tell us your use case—commute, travel, or home—and we’ll recommend a short list."
            ctaLabel="Ask for Recommendations"
            ctaHref="/contact?topic=recommendation"
            secondaryCtaLabel="Read Testimonials"
            secondaryCtaHref="/testimonials"
          />
        </div>
      </section>
    </main>
  )
}

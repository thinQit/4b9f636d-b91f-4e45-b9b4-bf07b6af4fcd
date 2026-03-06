export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import CTABanner from "@/components/CTABanner"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function TestimonialsPage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="Average rating 4.8/5"
        title="Reviews from real customers"
        subtitle="What people say about NovaCart products, shipping, and support."
        primaryCta={{ label: "Shop Best Sellers", href: "/store?sort=best" }}
        secondaryCta={{ label: "Contact Support", href: "/contact" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <TestimonialsCarousel />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <CTABanner
            headline="Want a recommendation before you buy?"
            description="Tell us what you’re shopping for and we’ll suggest a short list that fits your budget."
            ctaLabel="Get Recommendations"
            ctaHref="/contact?topic=recommendation"
            secondaryCtaLabel="Shop Now"
            secondaryCtaHref="/store"
          />
        </div>
      </section>
    </main>
  )
}

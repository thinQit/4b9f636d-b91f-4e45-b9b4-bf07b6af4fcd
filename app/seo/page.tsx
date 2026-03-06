export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FAQAccordion from "@/components/FAQAccordion"
import CTASparkles from "@/components/CTASparkles"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function SeoPage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="Managed every 3 months"
        title="SEO metadata management"
        subtitle="Centralized titles, descriptions, Open Graph images, and JSON-LD for products—built into the codebase for consistent updates every quarter."
        primaryCta={{ label: "View SEO Rules", href: "#seo-rules" }}
        secondaryCta={{ label: "Go to Store", href: "/store" }}
      />
      <section id="structured-data" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <FAQAccordion
            headline="Structured data FAQ"
            subheadline="How product rich results are supported."
            items={[
              {
                question: "Do product pages include price and availability in schema?",
                answer:
                  "Yes. Product JSON-LD includes Offer fields like price, currency, and availability (e.g., InStock/OutOfStock).",
              },
              {
                question: "Are cart and checkout indexed?",
                answer:
                  "No. Cart and checkout should be set to noindex to avoid thin/duplicate content in search.",
              },
              {
                question: "How are Open Graph images handled?",
                answer:
                  "Default OG images are set site-wide, with product-specific OG images generated from the primary product image when available.",
              },
            ]}
          />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <CTASparkles
            title="Want us to handle quarterly SEO updates?"
            subtitle="We’ll refresh metadata, review Search Console signals, and adjust category copy to match seasonal demand."
            ctaLabel="Request SEO Update"
            ctaHref="/contact?topic=press"
            secondaryCtaLabel="Back to Home"
            secondaryCtaHref="/"
          />
        </div>
      </section>
    </main>
  )
}

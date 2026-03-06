export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FAQAccordion from "@/components/FAQAccordion"
import MapEmbed from "@/components/MapEmbed"
import CTABanner from "@/components/CTABanner"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function StoreDetailsPage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="Support: Mon–Fri, 9am–5pm CT"
        title="Store details, shipping, and returns"
        subtitle="Everything you need to know—policies, support, and where to find us."
        primaryCta={{ label: "Contact Support", href: "/contact" }}
        secondaryCta={{ label: "Shop Now", href: "/store" }}
      />
      <section id="shipping-returns" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <FAQAccordion
            headline="Shipping & returns"
            subheadline="Clear policies that reduce uncertainty and increase confidence at checkout."
            items={[
              {
                question: "Shipping times",
                answer:
                  "Orders ship within 24–48 hours. Standard delivery is 2–5 business days; Express is 1–2 business days (US).",
              },
              {
                question: "Free shipping threshold",
                answer: "Free standard shipping on US orders over $60 (after discounts, before taxes).",
              },
              {
                question: "Returns",
                answer:
                  "Return unused items within 30 days of delivery. Refunds are issued to the original payment method after inspection.",
              },
              {
                question: "Exchanges",
                answer:
                  "We can exchange for a different color/variant if stock is available. Contact support with your order number.",
              },
            ]}
          />
        </div>
      </section>
      <section id="visit" className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <MapEmbed />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <CTABanner
            headline="Questions before you buy?"
            description="We’ll help you pick the right items and confirm sizing, materials, and delivery timelines."
            ctaLabel="Message Support"
            ctaHref="/contact"
            secondaryCtaLabel="Shop the Store"
            secondaryCtaHref="/store"
          />
        </div>
      </section>
    </main>
  )
}

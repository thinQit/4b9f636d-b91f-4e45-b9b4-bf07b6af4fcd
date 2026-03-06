export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import MapEmbed from "@/components/MapEmbed"
import CTABanner from "@/components/CTABanner"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function ContactPage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="We reply within 1 business day"
        title="Contact NovaCart"
        subtitle="Questions about an order, returns, bulk pricing, or product recommendations? We’re here to help."
        primaryCta={{ label: "Email Support", href: "mailto:support@novacart.co" }}
        secondaryCta={{ label: "Store Details", href: "/store-details" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ContactForm
            headline="Send a message"
            subheadline="We typically respond within 1 business day."
            contactInfo={[
              { icon: "Mail", label: "Email", value: "support@novacart.co" },
              { icon: "Phone", label: "Phone", value: "+1 (512) 555-0198" },
              { icon: "Clock3", label: "Hours", value: "Mon–Fri, 9am–5pm CT" },
            ]}
          />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <MapEmbed />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <CTABanner
            headline="Prefer to browse first?"
            description="Start with best-sellers and filter down from there—fast, clean, and mobile-friendly."
            ctaLabel="Shop Best Sellers"
            ctaHref="/store?sort=best"
            secondaryCtaLabel="Browse Categories"
            secondaryCtaHref="/#categories"
          />
        </div>
      </section>
    </main>
  )
}

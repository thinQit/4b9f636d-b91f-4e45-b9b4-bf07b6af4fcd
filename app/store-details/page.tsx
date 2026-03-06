export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient"
import FAQAccordion from "@/components/FAQAccordion"
import MapEmbed from "@/components/MapEmbed"
import CTABanner from "@/components/CTABanner"

export default function StoreDetailsPage() {
  return (
    <div>
      <HeroGradient
        headline="Store details, shipping, and policies"
        subheadline="Everything you need before you buy—shipping times, returns, warranty, and how to reach us."
        primaryCta={{ label: "Shop now", href: "/store" }}
        secondaryCta={{ label: "Contact support", href: "/contact" }}
      />
      <FAQAccordion
        headline="FAQ"
        subheadline="Quick answers to common questions."
        items={[
          {
            question: "Do you ship internationally?",
            answer:
              "Yes—Canada is available by default. For other regions, contact support and we’ll confirm rates and timelines.",
          },
          {
            question: "Are your chargers compatible with iPhone and Android?",
            answer:
              "Our MagSafe-compatible stand works best with MagSafe iPhones and compatible magnetic cases. USB‑C accessories work across most modern devices.",
          },
          {
            question: "How do I get a discount code?",
            answer: "Join the newsletter for a one-time 10% welcome code and early access to seasonal drops.",
          },
          {
            question: "Can I change my order after placing it?",
            answer:
              "If you contact us within 1 hour of purchase (during business hours), we can usually update the address or cancel the order.",
          },
        ]}
      />
      <MapEmbed />
      <CTABanner
        headline="Still have questions?"
        description="Reach out and we’ll reply within 1 business day."
        ctaLabel="Contact support"
        ctaHref="/contact"
        secondaryCtaLabel="Start shopping"
        secondaryCtaHref="/store"
      />
    </div>
  )
}

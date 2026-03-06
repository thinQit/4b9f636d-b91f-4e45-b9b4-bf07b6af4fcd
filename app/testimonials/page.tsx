export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import CTABanner from "@/components/CTABanner"

export default function TestimonialsPage() {
  return (
    <div>
      <HeroGradient
        headline="Reviews that help you buy with confidence"
        subheadline="A few highlights from customers using NeonCart products at home, work, and on the move."
        primaryCta={{ label: "Shop top rated", href: "/store?sort=top-rated" }}
        secondaryCta={{ label: "Contact support", href: "/contact" }}
      />
      <TestimonialsGrid
        headline="What customers are saying"
        subheadline="Short, specific feedback—focused on quality and usability."
        testimonials={[
          {
            quote:
              "The desk tray set instantly made my workspace feel calmer. The finish is premium and it doesn’t slide around.",
            name: "Maya R.",
            title: "Seattle, WA",
            rating: 5,
          },
          {
            quote:
              "Fast shipping and the MagSafe stand is rock solid. It’s the first charger that doesn’t wobble on my desk.",
            name: "Jordan K.",
            title: "Brooklyn, NY",
            rating: 5,
          },
          {
            quote:
              "The travel pouch is perfect for cables and adapters. I wish I bought two—one for work and one for trips.",
            name: "Priya S.",
            title: "Austin, TX",
            rating: 4,
          },
          {
            quote: "The bottle keeps ice overnight. The coating feels durable and doesn’t show fingerprints.",
            name: "Derek W.",
            title: "Denver, CO",
            rating: 5,
          },
          {
            quote: "The braided cable is thick and doesn’t kink. Great value for the length.",
            name: "Hana N.",
            title: "San Jose, CA",
            rating: 4,
          },
        ]}
      />
      <CTABanner
        headline="Need help picking the right item?"
        description="Tell us your device and use-case—we’ll recommend a couple of options."
        ctaLabel="Ask a question"
        ctaHref="/contact?topic=product-question"
        secondaryCtaLabel="Shop best sellers"
        secondaryCtaHref="/store?sort=best-sellers"
      />
    </div>
  )
}

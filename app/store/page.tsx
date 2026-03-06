export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient"
import ProductGrid from "@/components/ProductGrid"
import CTABanner from "@/components/CTABanner"

export default function StorePage() {
  return (
    <div>
      <HeroGradient
        badge="Free shipping over $60 • Dispatch in 1–2 business days • 30-day returns"
        headline="Shop all products"
        subheadline="Browse by category, filter by price, and find your next daily essential."
        primaryCta={{ label: "View best sellers", href: "/store?sort=best-sellers" }}
        secondaryCta={{ label: "Shipping & returns", href: "/store-details#shipping" }}
      />
      <ProductGrid />
      <CTABanner
        headline="Questions about compatibility or materials?"
        description="Tell us what device or use-case you have—we’ll recommend the right pick."
        ctaLabel="Contact support"
        ctaHref="/contact?topic=product-question"
        secondaryCtaLabel="Read FAQ"
        secondaryCtaHref="/store-details#faq"
      />
    </div>
  )
}

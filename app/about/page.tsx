export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTABanner from "@/components/CTABanner"

export default function AboutPage() {
  return (
    <div>
      <HeroGradient
        headline="A small team obsessed with clean design and daily utility."
        subheadline="NeonCart curates essentials that look great, feel durable, and solve tiny everyday annoyances—cable clutter, messy desks, and travel chaos."
        primaryCta={{ label: "Shop the collection", href: "/store" }}
        secondaryCta={{ label: "Store details", href: "/store-details" }}
      />
      <GalleryMasonry
        headline="Meet the team"
        subheadline="Small, fast, and customer-first."
        images={[
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Avery Chen, Founder & Product Curator" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Noah Patel, Operations & Logistics" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg", alt: "Elena Ruiz, Customer Support" },
        ]}
      />
      <CTABanner
        headline="Try NeonCart risk-free"
        description="If it’s not the right fit, return it within 30 days—simple as that."
        ctaLabel="Shop best sellers"
        ctaHref="/store?sort=best-sellers"
        secondaryCtaLabel="Returns policy"
        secondaryCtaHref="/store-details#returns"
      />
    </div>
  )
}

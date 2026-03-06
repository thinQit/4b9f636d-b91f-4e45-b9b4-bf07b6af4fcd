export const dynamic = 'force-dynamic';

import AnnouncementBar from "@/components/AnnouncementBar"
import HeroGradient from "@/components/HeroGradient"
import CategoryCards from "@/components/CategoryCards"
import ProductGrid from "@/components/ProductGrid"
import TrustBadges from "@/components/TrustBadges"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsGrid from "@/components/TestimonialsGrid"
import NewsletterSignup from "@/components/NewsletterSignup"
import CTABanner from "@/components/CTABanner"

export default function HomePage() {
  return (
    <div>
      <AnnouncementBar />
      <HeroGradient
        badge="Spring Drop: 15% off orders over $75 with code SPRING15 (ends Sunday 11:59pm)."
        headline="Shop modern essentials that ship fast—and look even better in real life."
        subheadline="NeonCart is a curated store for desk, travel, and everyday carry. New drops every season, transparent pricing, and a 30‑day returns promise."
        primaryCta={{ label: "Shop best sellers", href: "/store" }}
        secondaryCta={{ label: "View store details", href: "/store-details" }}
      />
      <CategoryCards />
      <ProductGrid />
      <TrustBadges />
      <GalleryMasonry
        headline="See it in real spaces"
        subheadline="Customer setups and product close-ups—clean, minimal, and practical."
        images={[
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg", alt: "Desk tray with keys and wallet on a white desk" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "MagSafe stand charger next to a laptop and notebook" },
          { url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg", alt: "Travel pouch packed with cables and adapters" },
        ]}
      />
      <TestimonialsGrid
        headline="Loved by customers who prefer clean design"
        subheadline="Real feedback from people using NeonCart gear every day."
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
        ]}
      />
      <NewsletterSignup
        headline="Get early access to new drops"
        subheadline="Monthly emails only—product launches, restocks, and occasional subscriber-only discounts."
        ctaLabel="Join the list"
      />
      <CTABanner
        headline="Ready to upgrade your everyday carry?"
        description="Shop curated essentials with fast shipping, easy returns, and a clean aesthetic that fits anywhere."
        ctaLabel="Start shopping"
        ctaHref="/store"
        secondaryCtaLabel="Ask a question"
        secondaryCtaHref="/contact"
      />
    </div>
  )
}

export const dynamic = 'force-dynamic';

import AnnouncementBar from "@/components/AnnouncementBar"
import HeroAurora from "@/components/HeroAurora"
import CategoryCard from "@/components/CategoryCard"
import ProductGrid from "@/components/ProductGrid"
import TrustBadgesRow from "@/components/TrustBadgesRow"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import GalleryMasonry from "@/components/GalleryMasonry"
import NewsletterSignup from "@/components/NewsletterSignup"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function HomePage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <AnnouncementBar />
      <HeroAurora
        badge="Spring Refresh Sale — up to 25% off best-sellers"
        title="Everyday essentials, designed to look good and last longer."
        subtitle="NovaCart curates minimalist gear for work, travel, and home—premium materials, fair pricing, and fast shipping."
        primaryCta={{ label: "Shop New Arrivals", href: "/store?collection=new" }}
        secondaryCta={{ label: "Explore Categories", href: "#categories" }}
      />
      <section id="categories" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl grid gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-4 px-4">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <ProductGrid />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <TrustBadgesRow />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <TestimonialsCarousel />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <GalleryMasonry
            headline="See it in real life"
            subheadline="A quick look at NovaCart essentials in everyday spaces—workspace, travel, and home."
            images={[
              { url: "/images/gallery/gallery-01.jpg", alt: "Wireless charger on a walnut desk" },
              { url: "/images/gallery/gallery-02.jpg", alt: "Messenger bag on a commuter train seat" },
              { url: "/images/gallery/gallery-03.jpg", alt: "Stainless bottle next to a gym towel" },
              { url: "/images/gallery/gallery-04.jpg", alt: "Linen throw blanket on a modern sofa" },
              { url: "/images/gallery/gallery-05.jpg", alt: "Minimal entryway tray with keys and wallet" },
              { url: "/images/gallery/gallery-06.jpg", alt: "Packed travel pouch inside carry-on luggage" },
            ]}
          />
        </div>
      </section>
      <section id="newsletter" className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <NewsletterSignup
            headline="Get early access to drops and deals"
            subheadline="Monthly emails only—new arrivals, limited runs, and members-only discounts. Unsubscribe anytime."
            ctaLabel="Join the List"
          />
        </div>
      </section>
    </main>
  )
}

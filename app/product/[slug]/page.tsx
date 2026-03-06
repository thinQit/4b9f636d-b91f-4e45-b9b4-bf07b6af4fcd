export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import TabsSection from "@/components/TabsSection"
import ReviewsSummary from "@/components/ReviewsSummary"
import ProductGrid from "@/components/ProductGrid"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function ProductDetailsPage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="Best Seller"
        title="Aero Messenger Bag"
        subtitle="A minimalist commuter bag with smart organization and weather-ready materials."
        primaryCta={{ label: "Add to Cart", href: "#purchase" }}
        secondaryCta={{ label: "View Shipping & Returns", href: "/store-details#shipping-returns" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <TabsSection />
        </div>
      </section>
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <ReviewsSummary />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <ProductGrid />
        </div>
      </section>
    </main>
  )
}

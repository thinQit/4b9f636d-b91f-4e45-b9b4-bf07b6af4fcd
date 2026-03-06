export const dynamic = 'force-dynamic';

import HeroGradient from "@/components/HeroGradient"
import ProductGallery from "@/components/ProductGallery"
import PriceBlock from "@/components/PriceBlock"
import TestimonialsCarousel from "@/components/TestimonialsCarousel"
import ProductGrid from "@/components/ProductGrid"
import CTABanner from "@/components/CTABanner"

export default function ProductDetailsPage() {
  return (
    <div>
      <HeroGradient
        headline="Product details"
        subheadline="High-quality materials, clean design, and practical features—built for everyday use."
        primaryCta={{ label: "Add to cart", href: "#add-to-cart" }}
        secondaryCta={{ label: "Shipping & returns", href: "/store-details#shipping" }}
      />
      <ProductGallery />
      <PriceBlock />
      <TestimonialsCarousel />
      <ProductGrid />
      <CTABanner
        headline="Need help before you buy?"
        description="Our team can help with compatibility, materials, and recommendations."
        ctaLabel="Ask a question"
        ctaHref="/contact?topic=product-question"
        secondaryCtaLabel="Store policies"
        secondaryCtaHref="/store-details#policies"
      />
    </div>
  )
}

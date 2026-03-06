export const dynamic = 'force-dynamic';

import ProductImageGallery from "@/components/ProductImageGallery";
import PriceBlock from "@/components/PriceBlock";
import ProductTabs from "@/components/ProductTabs";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

export default function ProductDetailsPage() {
  return (
    <main>
      <SEOHead />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-8 lg:grid-cols-2">
          <ProductImageGallery />
          <PriceBlock />
        </div>
      </section>
      <ProductTabs />
      <TestimonialsGrid />
      <CTASection />
    </main>
  );
}

export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import CTASparkles from "@/components/CTASparkles";
import SEOHead from "@/components/SEOHead";

export default function TestimonialsPage() {
  return (
    <main>
      <SEOHead />
      <Hero />
      <TestimonialsGrid />
      <CTASparkles
        title="Join thousands of happy customers."
        subtitle="Start with a best seller and see the difference in build quality and support."
        ctaLabel="Shop Best Sellers"
        ctaHref="/store?sort=best"
        secondaryCtaLabel="Browse All Products"
        secondaryCtaHref="/store"
      />
    </main>
  );
}

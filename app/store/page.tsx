export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FilterSidebar from "@/components/FilterSidebar";
import ProductGrid from "@/components/ProductGrid";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

export default function StorePage() {
  return (
    <main>
      <SEOHead />
      <Hero />
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid gap-6 md:gap-8 lg:grid-cols-[280px_1fr]">
          <FilterSidebar />
          <div className="space-y-6">
            <SearchBar />
            <ProductGrid />
          </div>
        </div>
      </section>
      <CTASection />
    </main>
  );
}

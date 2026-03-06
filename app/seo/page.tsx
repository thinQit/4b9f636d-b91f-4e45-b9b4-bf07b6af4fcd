export const dynamic = 'force-dynamic';

import HeroSpotlight from "@/components/HeroSpotlight";
import CTASparkles from "@/components/CTASparkles";
import SEOHead from "@/components/SEOHead";

export default function SEOPage() {
  return (
    <main>
      <SEOHead />
      <HeroSpotlight
        title="SEO metadata management (site-wide)."
        subtitle="A single source of truth for titles, descriptions, Open Graph, and JSON-LD—kept consistent across pages and products."
        primaryCta={{ label: "View Store", href: "/store" }}
        secondaryCta={{ label: "Contact Support", href: "/contact" }}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Metadata inventory</h2>
          <p className="mt-4 text-muted-foreground">What we manage and where it appears.</p>
          <ul className="mt-6 space-y-3 text-muted-foreground list-disc pl-5">
            <li>Title tags: Benefit-led titles with category/product keywords and brand suffix.</li>
            <li>Meta descriptions: Conversion-focused summaries with shipping/returns trust cues.</li>
            <li>Open Graph / Twitter: Share-ready images and copy for social previews.</li>
            <li>Canonical URLs: Prevents duplicate content across filters/sorts.</li>
            <li>Structured data (JSON-LD): Product schema with price, availability, and aggregateRating when available.</li>
          </ul>
        </div>
      </section>
      <CTASparkles
        title="Want SEO tuned to your next campaign?"
        subtitle="We’ll align metadata with seasonal promos and new collections every quarter."
        ctaLabel="Plan Next Update"
        ctaHref="/contact?topic=Other"
        secondaryCtaLabel="Shop Best Sellers"
        secondaryCtaHref="/store?sort=best"
      />
    </main>
  );
}

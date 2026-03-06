export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import TeamGrid from "@/components/TeamGrid";
import CTASparkles from "@/components/CTASparkles";
import SEOHead from "@/components/SEOHead";

export default function AboutPage() {
  return (
    <main>
      <SEOHead />
      <Hero />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Our promise: fewer, better products.</h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            We’d rather stock 30 items we love than 3,000 we can’t stand behind.
          </p>
          <ul className="mt-6 space-y-3 list-disc pl-5 text-muted-foreground">
            <li>Materials-first selection: aluminum, reinforced braids, durable zippers</li>
            <li>Honest pricing: no inflated MSRP games</li>
            <li>Real-world testing: commute, desk, and travel scenarios</li>
            <li>Clear policies: shipping, returns, and warranties explained upfront</li>
          </ul>
        </div>
      </section>
      <TeamGrid
        headline="Meet the team."
        subheadline="A lean crew that handles sourcing, support, and fulfillment with care."
        members={[
          {
            name: "Avery Chen",
            title: "Founder & Product Curator",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Former hardware buyer who loves clean design and products that survive daily use.",
          },
          {
            name: "Samira Patel",
            title: "Customer Experience Lead",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Runs support and returns with a focus on fast, human help—no scripts.",
          },
          {
            name: "Noah Martinez",
            title: "Operations & Fulfillment",
            imageUrl: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg",
            bio: "Keeps shipping fast and packaging tidy, with quality checks on every batch.",
          },
        ]}
      />
      <CTASparkles
        title="Ready to upgrade your everyday carry?"
        subtitle="Start with a best seller and see why customers come back for the details."
        ctaLabel="Shop Best Sellers"
        ctaHref="/store"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}

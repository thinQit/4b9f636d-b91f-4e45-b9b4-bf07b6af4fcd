export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import FAQAccordion from "@/components/FAQAccordion";
import MapEmbed from "@/components/MapEmbed";
import CTASparkles from "@/components/CTASparkles";
import SEOHead from "@/components/SEOHead";

export default function StoreDetailsPage() {
  return (
    <main>
      <SEOHead />
      <Hero />
      <section id="shipping" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Shipping</h2>
          <p className="mt-4 text-muted-foreground">Fast, trackable shipping with clear thresholds.</p>
          <ul className="mt-6 space-y-2 text-muted-foreground list-disc pl-5">
            <li>Standard (2–4 business days): $5 — Free on orders $60+</li>
            <li>Express (1–2 business days): $12 — Available for most US addresses</li>
            <li>Orders placed before 1 PM CT ship same day (Mon–Fri).</li>
            <li>International shipping is not available at this time.</li>
          </ul>
        </div>
      </section>
      <section id="returns" className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold">Returns & exchanges</h2>
          <ul className="mt-6 space-y-2 text-muted-foreground list-disc pl-5">
            <li>30-day return window from delivery date</li>
            <li>Items must be unused and in original packaging</li>
            <li>Refunds issued to original payment method within 3–5 business days after inspection</li>
            <li>Prepaid return label available for $4.95 (deducted from refund). Exchanges ship free.</li>
          </ul>
        </div>
      </section>
      <FAQAccordion
        headline="FAQ"
        subheadline="Quick answers to common questions."
        items={[
          {
            question: "Do you include cables with chargers?",
            answer: "Most chargers are sold without cables so you can choose the right length and wattage. Product pages list what’s included.",
          },
          {
            question: "How do I know if a charger will fast-charge my laptop?",
            answer: "Check your laptop’s USB‑C PD wattage requirement. If it’s 65W or less, the AeroCharge 65W is a great fit.",
          },
          {
            question: "Can I change or cancel an order?",
            answer: "If your order hasn’t shipped, contact support as soon as possible and we’ll do our best to update it.",
          },
        ]}
      />
      <MapEmbed />
      <CTASparkles
        title="Shop with confidence."
        subtitle="Clear policies, fast shipping, and support that responds within 24 hours on business days."
        ctaLabel="Shop the Store"
        ctaHref="/store"
        secondaryCtaLabel="Contact Us"
        secondaryCtaHref="/contact"
      />
    </main>
  );
}

export const dynamic = 'force-dynamic';

import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import CTASparkles from "@/components/CTASparkles";
import SEOHead from "@/components/SEOHead";

export default function ContactPage() {
  return (
    <main>
      <SEOHead />
      <Hero />
      <ContactForm
        headline="Contact form"
        subheadline="For returns, exchanges, shipping questions, or product recommendations."
        contactInfo={[
          { icon: "Mail", label: "Email", value: "support@indigoskyshop.com" },
          { icon: "Phone", label: "Phone", value: "+1 (512) 555-0148" },
          { icon: "Clock", label: "Hours", value: "Mon–Fri, 9:00 AM–5:00 PM CT" },
        ]}
      />
      <MapEmbed />
      <CTASparkles
        title="Prefer self-serve?"
        subtitle="Check shipping, returns, and FAQs in Store Details—built to answer questions fast."
        ctaLabel="Store Details"
        ctaHref="/store/details"
        secondaryCtaLabel="Shop the Store"
        secondaryCtaHref="/store"
      />
    </main>
  );
}

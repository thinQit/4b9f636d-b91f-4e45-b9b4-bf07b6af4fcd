export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import ContactForm from "@/components/ContactForm"
import CTASparkles from "@/components/CTASparkles"

export default function ContactPage() {
  return (
    <main>
      <HeroAurora
        title="Contact"
        subtitle="Tell me what you’re building. I’ll reply within 1–2 business days with next steps."
        primaryCta={{ label: "Send a message", href: "#contact-form" }}
        secondaryCta={{ label: "Browse store", href: "/store" }}
      />

      <section id="contact-form">
        <ContactForm
          headline="Send a message"
          subheadline="Share your goals, timeline, and references. If it’s a store, include product count and categories."
          contactInfo={[
            { icon: "Mail", label: "Email", value: "hello@parv.dev" },
            { icon: "Clock3", label: "Response time", value: "1–2 business days" },
            {
              icon: "CalendarDays",
              label: "Update cadence",
              value: "Quarterly (every 3 months)",
            },
          ]}
        />
      </section>

      <CTASparkles
        title="Remote-first, available globally"
        subtitle="Schedule a call and share your timeline, goals, and must-have pages."
        ctaLabel="Book a call"
        ctaHref="/contact#contact-form"
        secondaryCtaLabel="About"
        secondaryCtaHref="/about"
      />
    </main>
  )
}

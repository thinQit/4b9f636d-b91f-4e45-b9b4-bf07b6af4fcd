export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTASparkles from "@/components/CTASparkles"

export default function StoreDetailsPage() {
  return (
    <main>
      <HeroAurora
        title="Store details"
        subtitle="Licensing, delivery, refunds, and support—everything you need before purchasing."
        primaryCta={{ label: "Browse products", href: "/store" }}
        secondaryCta={{ label: "Contact support", href: "/contact" }}
      />

      <FeaturesCards3D
        badge="Delivery"
        title="Instant access after purchase"
        features={[
          {
            icon: "Download",
            title: "Post-checkout delivery",
            description: "Digital products are delivered via download link after payment.",
          },
          {
            icon: "MailCheck",
            title: "Email receipt included",
            description: "You’ll receive a receipt with download instructions.",
          },
          {
            icon: "LifeBuoy",
            title: "Support fallback",
            description:
              "If your email doesn’t arrive within 10 minutes, contact support.",
          },
        ]}
      />

      <FeaturesCards3D
        badge="Licensing + refunds"
        title="Simple terms designed for real-world use"
        features={[
          {
            icon: "User",
            title: "Personal license",
            description: "Use in one personal project. Modify as needed. No redistribution.",
          },
          {
            icon: "Briefcase",
            title: "Commercial license",
            description:
              "Use in up to 3 client projects. Production use allowed. No reselling as-is.",
          },
          {
            icon: "ShieldCheck",
            title: "Refund policy",
            description:
              "Case-by-case review within 7 days for access issues or major mismatch.",
          },
        ]}
      />

      <CTASparkles
        title="Need a custom version for your brand?"
        subtitle="I can adapt templates to your design system and launch goals."
        ctaLabel="Contact"
        ctaHref="/contact"
        secondaryCtaLabel="View projects"
        secondaryCtaHref="/projects"
      />
    </main>
  )
}

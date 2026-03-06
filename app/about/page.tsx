export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTASparkles from "@/components/CTASparkles"

export default function AboutPage() {
  return (
    <main>
      <HeroAurora
        title="About Parv"
        subtitle="A modern builder focused on websites that look sharp, load fast, and stay easy to update."
        primaryCta={{ label: "See projects", href: "/projects" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <FeaturesCards3D
        badge="How I work"
        title="A repeatable system for quarterly updates"
        subtitle="Wireframes → design system → build → SEO → launch."
        features={[
          {
            icon: "Target",
            title: "Clarify goals + audience",
            description:
              "Align success metrics around leads, sales, and trust-building user flows.",
          },
          {
            icon: "Palette",
            title: "Build a design system",
            description:
              "Set tokens for color, spacing, typography, and components to avoid drift.",
          },
          {
            icon: "Blocks",
            title: "Component-driven build",
            description:
              "Reusable sections for faster delivery and consistent page quality.",
          },
          {
            icon: "Gauge",
            title: "SEO + performance pass",
            description:
              "Metadata, OpenGraph, structured data, and Core Web Vitals optimization.",
          },
        ]}
      />

      <CTASparkles
        title="Resume and experience highlights"
        subtitle="Download the latest PDF resume and review structured strengths for modern portfolio + storefront builds."
        ctaLabel="Download PDF"
        ctaHref="https://codexstudiofiles.blob.core.windows.net/discovery-attachments/a240ebe6-4b4e-461f-b612-c68bf8639300/4b9f636d-b91f-4e45-b9b4-bf07b6af4fcd/1772756664184-updated_resume_parv.pdf"
        secondaryCtaLabel="Contact me"
        secondaryCtaHref="/contact"
      />
    </main>
  )
}

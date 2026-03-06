export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTASparkles from "@/components/CTASparkles"

export default function SEOPage() {
  return (
    <main>
      <HeroAurora
        title="SEO metadata system"
        subtitle="A structured approach to titles, descriptions, OpenGraph, and JSON-LD across portfolio and store pages."
        primaryCta={{ label: "View projects", href: "/projects" }}
        secondaryCta={{ label: "Browse store", href: "/store" }}
      />

      <FeaturesCards3D
        badge="Metadata rules (site-wide)"
        title="Consistent defaults with page-level overrides"
        features={[
          {
            icon: "Heading1",
            title: "Title format",
            description: "Default: {Page} | Parv — Portfolio + Storefront.",
          },
          {
            icon: "FileSearch",
            title: "Description strategy",
            description:
              "Concise value proposition plus primary keyword focus per page intent.",
          },
          {
            icon: "Image",
            title: "OpenGraph",
            description:
              "1200×630 social previews using brand gradient and clear page context.",
          },
          {
            icon: "Braces",
            title: "JSON-LD",
            description: "Person, WebSite, and Product schema for better discoverability.",
          },
        ]}
      />

      <CTASparkles
        title="Want SEO baked into your build?"
        subtitle="Metadata, OpenGraph, and structured data ship as standard workflow."
        ctaLabel="Contact"
        ctaHref="/contact"
        secondaryCtaLabel="About"
        secondaryCtaHref="/about"
      />
    </main>
  )
}

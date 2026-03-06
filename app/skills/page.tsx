export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import CTASparkles from "@/components/CTASparkles"

export default function SkillsPage() {
  return (
    <main>
      <HeroAurora
        title="Skills built for modern websites"
        subtitle="A practical toolkit for fast, accessible, SEO-friendly marketing sites and storefronts."
        primaryCta={{ label: "See projects", href: "/projects" }}
        secondaryCta={{ label: "Contact", href: "/contact" }}
      />

      <FeaturesCards3D
        badge="Core strengths"
        title="Design system consistency, performance, and conversion-focused UX"
        features={[
          {
            icon: "Code2",
            title: "Frontend",
            description: "Next.js App Router, TypeScript, Tailwind, shadcn/ui patterns.",
          },
          {
            icon: "ShoppingCart",
            title: "E-commerce UX",
            description:
              "Product grids, trust badges, review layouts, and pricing clarity.",
          },
          {
            icon: "Search",
            title: "SEO + Performance",
            description:
              "Metadata, JSON-LD, image optimization, and Core Web Vitals improvements.",
          },
          {
            icon: "Server",
            title: "Backend (lightweight)",
            description:
              "API routes, contact workflows, and data modeling for products/testimonials.",
          },
        ]}
      />

      <CTASparkles
        title="Need a site that’s easy to update every quarter?"
        subtitle="A consistent design system keeps new pages and sections feeling native from day one."
        ctaLabel="Plan an update"
        ctaHref="/contact"
        secondaryCtaLabel="About"
        secondaryCtaHref="/about"
      />
    </main>
  )
}

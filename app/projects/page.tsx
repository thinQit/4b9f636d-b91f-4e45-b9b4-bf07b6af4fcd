export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import GalleryMasonry from "@/components/GalleryMasonry"
import CTASparkles from "@/components/CTASparkles"

export default function ProjectsPage() {
  return (
    <main>
      <HeroAurora
        title="Projects that balance aesthetics and conversion"
        subtitle="Case studies and builds across marketing, e-commerce, and portfolio systems."
        primaryCta={{ label: "Contact for a build", href: "/contact" }}
        secondaryCta={{ label: "View skills", href: "/skills" }}
      />

      <GalleryMasonry
        headline="Project showcase"
        subheadline="Thumbnail, role, stack, and outcomes aligned to approved wireframes."
        images={[
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            alt: "Aurora Skin storefront with sticky header and trust badges",
            caption: "Aurora Skin — Improved discovery and reduced purchase friction",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg",
            alt: "FinWise marketing site hero with clear value hierarchy",
            caption: "FinWise — Stronger lead intent with pricing clarity",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            alt: "Studio portfolio case study template with reusable sections",
            caption: "Studio Portfolio — Scalable quarterly update system",
          },
        ]}
      />

      <CTASparkles
        title="Want your next project to look premium and load instantly?"
        subtitle="Ship a modern site with a consistent design system and SEO built in."
        ctaLabel="Contact"
        ctaHref="/contact"
        secondaryCtaLabel="About me"
        secondaryCtaHref="/about"
      />
    </main>
  )
}

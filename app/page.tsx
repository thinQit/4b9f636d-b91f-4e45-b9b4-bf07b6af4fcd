export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import FeaturesCards3D from "@/components/FeaturesCards3D"
import GalleryMasonry from "@/components/GalleryMasonry"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"
import NewsletterSignup from "@/components/NewsletterSignup"

export default function HomePage() {
  return (
    <main>
      <HeroAurora
        badge='New: “Landing Page Kit v2” — 24 sections, Figma + Tailwind components.'
        title="Designing fast, modern websites—and shipping digital products that sell."
        subtitle="I’m Parv, a full-stack builder focused on clean UI, performance, and conversion. Explore my work, skills, and the digital store for templates, UI kits, and starter packs."
        primaryCta={{ label: "View Projects", href: "/projects" }}
        secondaryCta={{ label: "Browse Store", href: "/store" }}
      />

      <FeaturesCards3D
        badge="Featured digital products"
        title="High-quality assets to speed up your next build"
        subtitle="Designed with Tailwind + shadcn/ui in mind."
        features={[
          {
            icon: "Sparkles",
            title: "Landing Page Kit v2 — $49",
            description:
              "24 responsive sections + CTA patterns optimized for conversion.",
          },
          {
            icon: "Rocket",
            title: "Portfolio Starter (Next.js) — $39",
            description:
              "App Router, metadata defaults, and reusable section components.",
          },
          {
            icon: "MousePointerClick",
            title: "UI Microinteractions Pack — $29",
            description:
              "Accessible hover, focus, and scroll animation recipes.",
          },
          {
            icon: "FileText",
            title: "Resume → Website Kit — $19",
            description:
              "Structured templates for about, skills, projects, and contact pages.",
          },
        ]}
      />

      <GalleryMasonry
        headline="Selected projects"
        subheadline="A mix of portfolio work and commerce-focused builds optimized for speed, clarity, and conversion."
        images={[
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
            alt: "Aurora Skin storefront redesign with clean product grid",
            caption: "Aurora Skin — Storefront Redesign",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg",
            alt: "FinWise marketing site with modern hero and pricing clarity",
            caption: "FinWise — Marketing Site",
          },
          {
            url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
            alt: "Studio portfolio case study layout with metrics and gallery",
            caption: "Studio Portfolio — Case Study System",
          },
        ]}
      />

      <TestimonialsAnimated
        title="What clients say"
        subtitle="Trust is built through clarity, speed, and follow-through."
        autoplay
        testimonials={[
          {
            quote:
              "Parv delivered a storefront refresh that made our products feel premium without adding complexity.",
            name: "Maya R.",
            designation: "Founder, DTC Brand",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            quote:
              "Strong design system thinking. The site shipped with consistent spacing and reusable sections.",
            name: "Daniel K.",
            designation: "Product Lead, SaaS",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            quote:
              "Great attention to detail: micro-interactions, accessibility, and performance.",
            name: "Aisha S.",
            designation: "Creative Director",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
          },
        ]}
      />

      <CTASparkles
        title="Get monthly UI + conversion notes"
        subtitle="Short, practical insights on building modern marketing sites and storefronts—no spam."
        ctaLabel="Join the newsletter"
        ctaHref="/contact#newsletter"
        secondaryCtaLabel="Browse products"
        secondaryCtaHref="/store"
      />

      <NewsletterSignup
        headline="Product drops + practical build notes"
        subheadline="Design patterns, Tailwind + shadcn tips, and SEO/performance checklists each month."
        ctaLabel="Subscribe"
      />
    </main>
  )
}

export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"

export default function TestimonialsPage() {
  return (
    <main>
      <HeroAurora
        title="Testimonials"
        subtitle="Feedback from clients and collaborators—focused on outcomes, not hype."
        primaryCta={{ label: "Start a project", href: "/contact" }}
        secondaryCta={{ label: "View projects", href: "/projects" }}
      />

      <TestimonialsAnimated
        title="Client feedback"
        subtitle="Clear communication, consistent design, and fast delivery."
        testimonials={[
          {
            quote:
              "The site feels premium and trustworthy. Product pages are clearer, and the design system keeps everything consistent.",
            name: "Maya R.",
            designation: "Founder, DTC Brand",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            quote:
              "Parv’s component library approach made future updates straightforward. We shipped fast and stayed on-brand.",
            name: "Daniel K.",
            designation: "Product Lead, SaaS",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            quote:
              "Excellent polish—typography, spacing, and micro-interactions. The final build is modern and responsive.",
            name: "Aisha S.",
            designation: "Creative Director",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg",
          },
          {
            quote:
              "Reliable delivery and strong technical decisions. SEO and performance were handled thoughtfully from the start.",
            name: "Jon P.",
            designation: "Agency Partner",
            src: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg",
          },
        ]}
      />

      <CTASparkles
        title="Ready to ship a modern website?"
        subtitle="Build a clean system that stays fresh with quarterly updates."
        ctaLabel="Contact"
        ctaHref="/contact"
        secondaryCtaLabel="Browse store"
        secondaryCtaHref="/store"
      />
    </main>
  )
}

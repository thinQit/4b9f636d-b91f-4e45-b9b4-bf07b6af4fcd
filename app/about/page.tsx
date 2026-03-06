export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora"
import TestimonialsAnimated from "@/components/TestimonialsAnimated"
import CTASparkles from "@/components/CTASparkles"
import SeoHead from "@/components/SeoHead"
import JsonLd from "@/components/JsonLd"

export default function AboutPage() {
  return (
    <main>
      <SeoHead />
      <JsonLd />
      <HeroAurora
        badge="Our mission"
        title="Designed for everyday life"
        subtitle="NovaCart is a small team obsessed with clean design, honest materials, and products that hold up to real use."
        primaryCta={{ label: "Shop Best Sellers", href: "/store?sort=best" }}
        secondaryCta={{ label: "Meet the Team", href: "#team" }}
      />
      <section id="team" className="py-20 md:py-28 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4">
          <TestimonialsAnimated
            title="Meet the team"
            subtitle="Small team, high standards."
            testimonials={[
              {
                quote:
                  "Former industrial designer focused on minimalist carry goods and durable materials.",
                name: "Avery Chen",
                designation: "Founder & Product Curator",
                src: "/images/team/avery-chen.jpg",
              },
              {
                quote:
                  "Runs fulfillment and vendor coordination to keep shipping fast and reliable.",
                name: "Samira Patel",
                designation: "Operations Lead",
                src: "/images/team/samira-patel.jpg",
              },
              {
                quote:
                  "Handles support, returns, and product guidance with a customer-first approach.",
                name: "Noah Brooks",
                designation: "Customer Experience",
                src: "/images/team/noah-brooks.jpg",
              },
            ]}
            autoplay
          />
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4">
          <CTASparkles
            title="Ready to upgrade your everyday essentials?"
            subtitle="Start with best-sellers or browse by category—either way, you’ll find fewer, better choices."
            ctaLabel="Shop the Store"
            ctaHref="/store"
            secondaryCtaLabel="Read Testimonials"
            secondaryCtaHref="/testimonials"
          />
        </div>
      </section>
    </main>
  )
}

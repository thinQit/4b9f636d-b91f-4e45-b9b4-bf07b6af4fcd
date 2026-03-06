"use client";
import { AuroraBackground } from "@/components/ui/backgrounds/aurora-background";
import { TextGenerateEffect } from "@/components/ui/text/text-generate-effect";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroAuroraProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  headline?: string;
  subheadline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroAurora({
  badge = "Limited Time Offer",
  // Accept both `title` and `headline` props for compatibility with all pages
  title,
  headline,
  subtitle,
  subheadline,
  primaryCta = { label: "Shop Bestsellers", href: "#featured-products" },
  secondaryCta = { label: "Browse Categories", href: "#categories" },
}: Partial<HeroAuroraProps>) {
  const resolvedTitle = title ?? headline ?? "Elevate Everyday Shopping with Curated Essentials";
  const resolvedSubtitle =
    subtitle ?? subheadline ?? "Discover premium picks, trusted quality, and exclusive deals designed for modern living.";
  return (
    <AuroraBackground auroraColors={['#4f46e5', '#38bdf8', '#10b981', '#8b5cf6', '#a5f3fc']}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative flex flex-col items-center justify-center gap-4 px-4 py-24 md:py-36"
      >
        {badge && (
          <span className="mb-2 inline-block rounded-full border bg-background/50 px-4 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm">
            {badge}
          </span>
        )}
        <TextGenerateEffect
          words={resolvedTitle}
          className="max-w-4xl text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <p className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">{resolvedSubtitle}</p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          {primaryCta && (
            <Button size="lg" className="px-8 py-6 text-lg" asChild>
              <a href={primaryCta.href}>{primaryCta.label}</a>
            </Button>
          )}
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

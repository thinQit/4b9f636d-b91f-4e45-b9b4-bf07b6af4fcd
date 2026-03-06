'use client';

import { Button } from '@/components/ui/button';

interface HeroGradientProps {
  badge?: string;
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroGradient({
  badge = 'Limited Time Offer',
  headline = 'Shop Smart. Live Better.',
  subheadline = 'Discover premium everyday essentials with fast shipping, secure checkout, and prices you can trust.',
  primaryCta = { label: 'Shop Best Sellers', href: '#featured-products' },
  secondaryCta = { label: 'Browse Categories', href: '#categories' },
}: Partial<HeroGradientProps>) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f59e0b]/20 via-[#ef4444]/10 to-[#f97316]/20" />
      <div className="container relative mx-auto max-w-7xl px-4 text-center">
        {badge && (
          <span className="mb-6 inline-block rounded-full border bg-background px-4 py-1.5 text-sm font-medium text-muted-foreground">
            {badge}
          </span>
        )}
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8 py-6 text-lg" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg" asChild>
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

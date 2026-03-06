"use client";

import { Button } from '@/components/ui/button';

interface CTABannerProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTABanner({
  headline = 'Flash Sale: Save Up to 40% Today',
  description = 'Hurry—limited stock on top-rated products. Grab your favorites before they’re gone.',
  ctaLabel = 'Shop Sale',
  ctaHref = '#featured-products',
  secondaryCtaLabel = 'View All Deals',
  secondaryCtaHref = '#categories',
}: Partial<CTABannerProps>) {
  return (
    <section className="bg-[#E63946] py-16 md:py-20">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground md:text-4xl">{headline}</h2>
        {description && <p className="mt-4 text-lg text-primary-foreground/80">{description}</p>}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="secondary" className="px-8" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button size="lg" variant="outline" className="border-primary-foreground px-8 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

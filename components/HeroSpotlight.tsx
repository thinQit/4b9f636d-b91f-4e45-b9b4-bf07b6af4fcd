'use client';
import { Spotlight } from '@/components/ui/backgrounds/spotlight';
import { TypewriterEffect } from '@/components/ui/text/typewriter-effect';
import { Button } from '@/components/ui/button';

interface HeroSpotlightProps {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function HeroSpotlight({
  headline = 'Elevate Your Everyday Essentials',
  subheadline = 'Discover curated products built for quality, comfort, and fast delivery at prices you can trust.',
  primaryCta = { label: 'Shop Featured', href: '#featured-products' },
  secondaryCta = { label: 'Browse Categories', href: '#categories' },
}: Partial<HeroSpotlightProps>) {
  var words = headline.split(' ').map(function (word) {
    return { text: word };
  });
  return (
    <section className="relative flex min-h-[600px] flex-col items-center justify-center overflow-hidden rounded-md bg-black/[0.96] bg-grid-white/[0.02] antialiased md:min-h-[700px]">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#f59e0b" />
      <Spotlight className="top-10 left-1/2" fill="#ef4444" />
      <div className="relative z-10 mx-auto w-full max-w-4xl p-4 pt-20 text-center md:pt-0">
        <TypewriterEffect
          words={words}
          className="bg-gradient-to-b from-amber-100 via-orange-200 to-red-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
        />
        <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-300 md:text-lg">{subheadline}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="bg-primary px-8 py-6 text-lg text-primary-foreground hover:bg-primary/90" asChild>
            <a href={primaryCta.href}>{primaryCta.label}</a>
          </Button>
          {secondaryCta && (
            <Button
              variant="outline"
              size="lg"
              className="border-neutral-500 px-8 py-6 text-lg text-white hover:bg-white/10"
              asChild
            >
              <a href={secondaryCta.href}>{secondaryCta.label}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

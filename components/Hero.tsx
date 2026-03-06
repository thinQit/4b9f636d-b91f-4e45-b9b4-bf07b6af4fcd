"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeroProps {
  headline?: string
  subheadline?: string
  primaryCtaLabel?: string
  primaryCtaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  showCollage?: boolean
  imageSrc?: string
  className?: string
}

export default function Hero({
  headline = 'Everyday Essentials, Elevated.',
  subheadline = 'Shop premium wardrobe staples designed for comfort, longevity, and effortless style.',
  primaryCtaLabel = 'Shop New Arrivals',
  primaryCtaHref = '/collections/new',
  secondaryCtaLabel = 'Explore Best Sellers',
  secondaryCtaHref = '/collections/best-sellers',
  showCollage = true,
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  className = '',
}: Partial<HeroProps>) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
        <div>
          <span className="inline-flex rounded-full bg-[#E63946]/10 px-3 py-1 text-sm font-medium text-[#E63946]">
            Limited Time: Mid-Season Sale
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#1A1A2E] md:text-5xl">{headline}</h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">{subheadline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#E63946] hover:bg-[#d83240]">
              <Link href={primaryCtaHref}>{primaryCtaLabel}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
            </Button>
          </div>
        </div>

        {showCollage && (
          <div className="relative">
            <div className="overflow-hidden rounded-xl border bg-white shadow-sm">
              <Image src={imageSrc} alt="Hero" width={1600} height={900} className="h-auto w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-lg border bg-white px-4 py-2 text-sm shadow">
              Free returns within 30 days
            </div>
            <div className="absolute -right-4 -top-4 rounded-lg border bg-white px-4 py-2 text-sm shadow">
              Rated 4.9 by 12k+ customers
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

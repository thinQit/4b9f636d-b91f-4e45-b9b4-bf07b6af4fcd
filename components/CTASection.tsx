"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  useGradient?: boolean
  className?: string
}

export default function CTASection({
  title = 'Refresh Your Wardrobe for the New Season',
  description = 'Discover limited-run essentials crafted to last. Shop now before sizes sell out.',
  ctaLabel = 'Shop Collection',
  ctaHref = '/collections/new',
  useGradient = true,
  className = '',
}: Partial<CTASectionProps>) {
  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div
        className={cn(
          'mx-auto max-w-7xl rounded-2xl px-6 py-12 text-center md:px-10',
          useGradient ? 'bg-gradient-to-r from-[#1A1A2E] to-[#E63946] text-white' : 'border bg-white'
        )}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
        <p className={cn('mx-auto mt-3 max-w-2xl', useGradient ? 'text-white/90' : 'text-muted-foreground')}>{description}</p>
        <Button asChild className={cn('mt-6', useGradient ? 'bg-white text-[#1A1A2E] hover:bg-white/90' : 'bg-[#E63946] hover:bg-[#d83240]')}>
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
    </section>
  )
}

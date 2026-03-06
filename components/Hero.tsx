'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Spotlight } from '@/components/ui/backgrounds/spotlight'

interface HeroProps {
  headline?: string
  subheadline?: string
  primaryCta?: string
  secondaryCta?: string
  imageSrc?: string
  highlights?: string[]
}

export default function Hero({
  headline = 'Shop smarter with premium essentials',
  subheadline = 'Discover trusted products for home, tech, and lifestyle with fast delivery and easy returns.',
  primaryCta = 'Shop Best Sellers',
  secondaryCta = 'Explore Categories',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  highlights = ['Free shipping over $75', '30-day returns', 'Secure checkout'],
}: Partial<HeroProps>) {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Spotlight className="-top-40 left-0 md:left-60" fill="#E63946" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="space-y-6">
          <Badge className="rounded-full bg-[#E63946]/10 text-[#E63946] hover:bg-[#E63946]/10">
            Seasonal Offers Live
          </Badge>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#1A1A2E] md:text-5xl">
            {headline}
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">{subheadline}</p>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-xl bg-[#E63946] px-6 py-3 text-white hover:bg-[#d5303d]">
              {primaryCta}
            </Button>
            <Button variant="outline" className="rounded-xl px-6 py-3">
              {secondaryCta}
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {highlights.map((item, idx) => (
              <Badge key={item + idx} variant="secondary" className="rounded-full">
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border bg-white shadow-lg">
            <Image
              src={imageSrc}
              alt="Hero shopping banner"
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

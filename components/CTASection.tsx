"use client";

import React from 'react'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title?: string
  description?: string
  primaryText?: string
  secondaryText?: string
}

export default function CTASection({
  title = 'Ready to upgrade your everyday essentials?',
  description = 'Shop curated picks trusted by thousands of happy customers.',
  primaryText = 'Shop Now',
  secondaryText = 'Learn More',
}: Partial<CTASectionProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-3xl bg-gradient-to-r from-[#1A1A2E] to-[#E63946] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-2 max-w-2xl text-white/85">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="rounded-xl bg-white text-[#1A1A2E] hover:bg-white/90">{primaryText}</Button>
            <Button variant="outline" className="rounded-xl border-white text-white hover:bg-white/10">
              {secondaryText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

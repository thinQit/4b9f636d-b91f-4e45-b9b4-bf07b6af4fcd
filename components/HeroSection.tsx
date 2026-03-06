"use client";

import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'

interface HeroSectionProps {
  announcement: string
  headline: string
  subheadline: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
  stats: { label: string; value: string }[]
}

export default function HeroSection({
  announcement = 'Now live: refreshed portfolio + store experience',
  headline = 'Build trust, showcase work, and convert visitors with a modern portfolio commerce site.',
  subheadline = 'Designed with #4f46e5, #38bdf8, and #10b981 to balance professionalism and energy.',
  primaryCtaLabel = 'View Projects',
  primaryCtaHref = '#projects',
  secondaryCtaLabel = 'Contact Me',
  secondaryCtaHref = '#contact',
  stats = [
    { label: 'Projects Delivered', value: '42+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Avg. Response Time', value: '< 24h' },
  ],
}: Partial<HeroSectionProps>) {
  return (
    <AuroraBackground className="min-h-[72vh] border-b border-slate-200">
      <div className="mx-auto flex max-w-7xl flex-col items-start px-4 py-24 md:px-6">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-1.5 text-xs font-medium text-indigo-700">
          <CheckCircle2 className="h-3.5 w-3.5" />
          {announcement}
        </div>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight text-[#1A1A2E] md:text-6xl">{headline}</h1>
        <p className="mt-5 max-w-2xl text-base text-slate-600 md:text-lg">{subheadline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild className="bg-[#4f46e5] hover:bg-[#4338ca]">
            <Link href={primaryCtaHref}>
              {primaryCtaLabel} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={secondaryCtaHref}>{secondaryCtaLabel}</Link>
          </Button>
        </div>
        <div className="mt-12 grid w-full gap-4 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-200 bg-white/80 p-4 backdrop-blur">
              <p className="text-2xl font-bold text-[#1A1A2E]">{s.value}</p>
              <p className="text-sm text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AuroraBackground>
  )
}

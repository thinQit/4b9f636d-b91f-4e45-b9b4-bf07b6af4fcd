"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CTASectionProps {
  title: string
  description: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

export default function CTASection({
  title = 'Ready to launch your next high-converting experience?',
  description = 'Let’s turn your resume, portfolio, and store ideas into a polished website.',
  primaryLabel = 'Start a Project',
  primaryHref = '#contact',
  secondaryLabel = 'Explore Store',
  secondaryHref = '/store',
}: Partial<CTASectionProps>) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="rounded-2xl bg-gradient-to-r from-[#4f46e5] via-[#38bdf8] to-[#10b981] p-8 text-white md:p-12">
          <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-2xl text-white/90">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-white text-[#1A1A2E] hover:bg-slate-100">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href={secondaryHref}>{secondaryLabel}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

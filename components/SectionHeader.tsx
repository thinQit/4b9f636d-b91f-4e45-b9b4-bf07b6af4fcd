"use client";

import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  eyebrow?: string
  title?: string
  description?: string
  cta?: React.ReactNode
  className?: string
}

export default function SectionHeader({
  eyebrow = '',
  title = 'Section Title',
  description = '',
  cta = null,
  className = '',
}: Partial<SectionHeaderProps>) {
  return (
    <div className={cn('mb-8 flex items-end justify-between gap-4', className)}>
      <div>
        {eyebrow ? <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#E63946]">{eyebrow}</p> : null}
        <h2 className="text-2xl font-bold tracking-tight text-[#1A1A2E] md:text-3xl">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm text-muted-foreground md:text-base">{description}</p> : null}
      </div>
      {cta}
    </div>
  )
}

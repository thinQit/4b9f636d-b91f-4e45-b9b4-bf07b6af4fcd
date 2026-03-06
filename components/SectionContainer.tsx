"use client";

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionContainerProps {
  id: string
  className: string
  children: ReactNode
}

export default function SectionContainer({
  id = '',
  className = '',
  children = null,
}: Partial<SectionContainerProps>) {
  return (
    <section id={id} className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  )
}

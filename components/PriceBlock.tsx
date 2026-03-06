"use client";

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PriceBlockProps {
  price?: string
  compareAtPrice?: string
  savingsText?: string
  className?: string
}

export default function PriceBlock({
  price = '$64.00',
  compareAtPrice = '$80.00',
  savingsText = 'Save 20%',
  className = '',
}: Partial<PriceBlockProps>) {
  return (
    <div className={cn('flex flex-wrap items-center gap-3', className)}>
      <span className="text-3xl font-extrabold tracking-tight text-[#1A1A2E]">{price}</span>
      <span className="text-lg text-muted-foreground line-through">{compareAtPrice}</span>
      <Badge className="bg-emerald-600 text-white">{savingsText}</Badge>
    </div>
  )
}

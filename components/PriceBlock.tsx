"use client";

import React from 'react'
import { Badge } from '@/components/ui/badge'

interface PriceBlockProps {
  price?: number
  compareAt?: number
  inStock?: boolean
  stockCount?: number
}

export default function PriceBlock({
  price = 129.99,
  compareAt = 159.99,
  inStock = true,
  stockCount = 14,
}: Partial<PriceBlockProps>) {
  const savings = Math.max(compareAt - price, 0)

  return (
    <div className="rounded-2xl border bg-white p-5">
      <div className="flex items-end gap-2">
        <span className="text-3xl font-bold text-[#1A1A2E]">${price.toFixed(2)}</span>
        {compareAt > price && <span className="text-muted-foreground line-through">${compareAt.toFixed(2)}</span>}
      </div>
      {savings > 0 && <p className="mt-1 text-sm font-medium text-green-600">Save ${savings.toFixed(2)}</p>}
      <div className="mt-3">
        <Badge className={inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}>
          {inStock ? 'In stock (' + stockCount + ' left)' : 'Out of stock'}
        </Badge>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { Star, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  name: string
  price: string
  imageSrc: string
  rating: number
  reviewCount: number
  tag: string
  onQuickAdd?: () => void
}

export default function ProductCard({
  name = 'Portfolio UI Kit',
  price = '$49',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  rating = 4.8,
  reviewCount = 128,
  tag = 'Best Seller',
  onQuickAdd,
}: Partial<ProductCardProps>) {
  return (
    <Card className="group rounded-xl border border-slate-200 bg-white p-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-[#4f46e5]">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={name}
          width={600}
          height={400}
          unoptimized
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-2 top-2 bg-[#10b981] text-white">{tag}</Badge>
      </div>
      <div className="pt-3">
        <h3 className="line-clamp-1 font-semibold text-[#1A1A2E]">{name}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-slate-600">
          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
          <span>({reviewCount})</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-lg font-bold text-[#1A1A2E]">{price}</p>
          <Button size="sm" className="bg-[#4f46e5] hover:bg-[#4338ca]" onClick={onQuickAdd}>
            <ShoppingBag className="mr-1 h-4 w-4" />
            Quick Add
          </Button>
        </div>
      </div>
    </Card>
  )
}

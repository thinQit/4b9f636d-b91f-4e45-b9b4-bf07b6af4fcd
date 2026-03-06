'use client'

import React from 'react'
import Image from 'next/image'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  title?: string
  imageSrc?: string
  price?: number
  compareAtPrice?: number
  rating?: number
  reviewsCount?: number
  badgeText?: string
}

export default function ProductCard({
  title = 'Wireless Noise-Canceling Headphones',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  price = 129.99,
  compareAtPrice = 179.99,
  rating = 4.7,
  reviewsCount = 324,
  badgeText = 'Best Seller',
}: Partial<ProductCardProps>) {
  const savings = Math.max(compareAtPrice - price, 0)

  return (
    <Card className="group rounded-2xl border bg-card p-3 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <div className="relative overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={600}
          className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute left-2 top-2 bg-[#E63946] text-white">{badgeText}</Badge>
        <Button size="icon" variant="secondary" className="absolute right-2 top-2 h-8 w-8 rounded-full">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-3 p-2 pt-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-[#1A1A2E] md:text-base">{title}</h3>

        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({reviewsCount})</span>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-xl font-bold text-[#1A1A2E]">${price.toFixed(2)}</span>
          {compareAtPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              ${compareAtPrice.toFixed(2)}
            </span>
          )}
        </div>

        {savings > 0 && (
          <p className="text-xs font-medium text-green-600">You save ${savings.toFixed(2)}</p>
        )}

        <Button className="w-full rounded-xl bg-[#1A1A2E] text-white hover:bg-[#111120]">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Quick Add
        </Button>
      </div>
    </Card>
  )
}

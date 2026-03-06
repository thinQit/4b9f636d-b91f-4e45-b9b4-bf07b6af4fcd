'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, ShoppingBag, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  title?: string
  imageSrc?: string
  price?: string
  compareAtPrice?: string
  rating?: number
  reviewsCount?: number
  badgeText?: string
  className?: string
}

export default function ProductCard({
  title = 'Classic Everyday Tee',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  price = '$38.00',
  compareAtPrice = '$48.00',
  rating = 4.8,
  reviewsCount = 214,
  badgeText = 'Best Seller',
  className = '',
}: Partial<ProductCardProps>) {
  const [liked, setLiked] = useState(false)

  return (
    <Card className={cn('group overflow-hidden rounded-xl border bg-card shadow-sm transition hover:shadow-md', className)}>
      <div className="relative">
        <Image src={imageSrc} alt={title} width={800} height={600} className="h-64 w-full object-cover" />
        <Badge className="absolute left-3 top-3 bg-[#E63946] text-white">{badgeText}</Badge>
        <Button
          variant="secondary"
          size="icon"
          className="absolute right-3 top-3 bg-white/90"
          onClick={() => setLiked(!liked)}
        >
          <Heart className={cn('h-4 w-4', liked ? 'fill-[#E63946] text-[#E63946]' : 'text-[#1A1A2E]')} />
        </Button>
      </div>

      <div className="space-y-3 p-4">
        <h3 className="line-clamp-1 text-base font-semibold text-[#1A1A2E]">{title}</h3>
        <div className="flex items-center gap-2 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-medium">{rating.toFixed(1)}</span>
          <span className="text-muted-foreground">({reviewsCount})</span>
        </div>
        <div className="flex items-end gap-2">
          <span className="text-xl font-bold text-[#1A1A2E]">{price}</span>
          <span className="text-sm text-muted-foreground line-through">{compareAtPrice}</span>
        </div>
        <Button className="w-full bg-[#E63946] hover:bg-[#d83240]">
          <ShoppingBag className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </Card>
  )
}

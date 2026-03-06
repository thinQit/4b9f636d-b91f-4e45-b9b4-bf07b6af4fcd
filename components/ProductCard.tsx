'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  name?: string
  imageSrc?: string
  price?: number
  compareAt?: number
  rating?: number
  badge?: string
  onAdd?: () => void
}

export default function ProductCard({
  name = 'Everyday Tee',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
  price = 29,
  compareAt = 39,
  rating = 4.7,
  badge = 'Best Seller',
  onAdd = () => {},
}: Partial<ProductCardProps>) {
  return (
    <Card className="rounded-2xl border p-3">
      <div className="relative mb-3 overflow-hidden rounded-xl">
        <Image src={imageSrc} alt={name} width={600} height={600} className="h-56 w-full object-cover" unoptimized />
        {badge ? <Badge className="absolute left-2 top-2 bg-[#E63946] text-white">{badge}</Badge> : null}
      </div>
      <h3 className="line-clamp-1 font-semibold">{name}</h3>
      <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
        <Star className="h-4 w-4 fill-current text-amber-500" />
        {rating.toFixed(1)}
      </div>
      <div className="mt-2 flex items-baseline gap-2">
        <p className="text-lg font-bold">${price}</p>
        {compareAt > price ? <p className="text-sm text-muted-foreground line-through">${compareAt}</p> : null}
      </div>
      <Button onClick={onAdd} className="mt-3 w-full rounded-xl bg-[#E63946] hover:bg-[#c92f3b]">
        Quick Add
      </Button>
    </Card>
  )
}

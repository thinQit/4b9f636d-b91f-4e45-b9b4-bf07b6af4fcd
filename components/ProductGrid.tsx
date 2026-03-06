'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ProductCard'
import { cn } from '@/lib/utils'

interface ProductItem {
  id: string
  title: string
  imageSrc: string
  price: string
  compareAtPrice: string
  rating: number
  reviewsCount: number
  badgeText: string
}

interface ProductGridProps {
  products?: ProductItem[]
  showLoadMore?: boolean
  className?: string
}

export default function ProductGrid({
  products = [
    { id: '1', title: 'Classic Everyday Tee', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', price: '$38.00', compareAtPrice: '$48.00', rating: 4.8, reviewsCount: 214, badgeText: 'Best Seller' },
    { id: '2', title: 'Relaxed Fit Hoodie', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', price: '$72.00', compareAtPrice: '$89.00', rating: 4.7, reviewsCount: 166, badgeText: 'Limited' },
    { id: '3', title: 'Utility Cargo Pants', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', price: '$64.00', compareAtPrice: '$80.00', rating: 4.6, reviewsCount: 140, badgeText: 'New' },
    { id: '4', title: 'Minimal Leather Belt', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', price: '$29.00', compareAtPrice: '$39.00', rating: 4.9, reviewsCount: 88, badgeText: 'Top Rated' },
  ],
  showLoadMore = true,
  className = '',
}: Partial<ProductGridProps>) {
  const [count, setCount] = useState(4)
  const visible = products.slice(0, count)

  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {visible.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        {showLoadMore && count < products.length && (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => setCount(count + 4)}>
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

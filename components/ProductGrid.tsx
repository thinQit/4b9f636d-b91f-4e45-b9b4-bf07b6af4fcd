"use client";

import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'

interface ProductItem {
  name: string
  imageSrc: string
  price: number
  compareAt: number
  rating: number
  badge: string
}

interface ProductGridProps {
  products?: ProductItem[]
}

export default function ProductGrid({
  products = [
    { name: 'Classic Hoodie', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', price: 58, compareAt: 72, rating: 4.8, badge: 'Sale' },
    { name: 'Minimal Sneakers', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', price: 94, compareAt: 120, rating: 4.6, badge: 'Popular' },
    { name: 'Linen Shirt', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', price: 42, compareAt: 52, rating: 4.7, badge: 'New' },
    { name: 'Everyday Backpack', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', price: 68, compareAt: 85, rating: 4.9, badge: 'Top Rated' },
  ],
}: Partial<ProductGridProps>) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {products.map((p) => (
          <ProductCard key={p.name} {...p} />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="outline">Load More</Button>
      </div>
    </section>
  )
}

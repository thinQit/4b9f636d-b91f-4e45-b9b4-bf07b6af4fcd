"use client";

import ProductCard from '@/components/ProductCard'

interface Product {
  id: string
  name: string
  price: string
  imageSrc: string
  rating: number
  reviewCount: number
  tag: string
}

interface ProductGridProps {
  products: Product[]
  className: string
}

export default function ProductGrid({
  products = [
    { id: '1', name: 'Modern Resume Template', price: '$29', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', rating: 4.9, reviewCount: 87, tag: 'New' },
    { id: '2', name: 'Case Study Pack', price: '$59', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', rating: 4.7, reviewCount: 64, tag: 'Popular' },
    { id: '3', name: 'Portfolio Starter Kit', price: '$79', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', rating: 4.8, reviewCount: 132, tag: 'Best Seller' },
  ],
  className = '',
}: Partial<ProductGridProps>) {
  return (
    <div className={className}>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#1A1A2E]">Featured Products</h2>
        <p className="text-sm text-slate-500">Filters and sort hooks ready</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

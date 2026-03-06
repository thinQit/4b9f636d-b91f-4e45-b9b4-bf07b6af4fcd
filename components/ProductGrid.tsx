"use client";

import React from 'react'
import ProductCard from '@/components/ProductCard'

interface ProductItem {
  title: string
  imageSrc: string
  price: number
  compareAtPrice: number
  rating: number
  reviewsCount: number
  badgeText: string
}

interface ProductGridProps {
  products?: ProductItem[]
}

export default function ProductGrid({
  products = [
    {
      title: 'Smart Home Hub Pro',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
      price: 89.99,
      compareAtPrice: 119.99,
      rating: 4.6,
      reviewsCount: 218,
      badgeText: 'Hot',
    },
    {
      title: 'Minimal Desk Lamp',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
      price: 39.99,
      compareAtPrice: 49.99,
      rating: 4.8,
      reviewsCount: 142,
      badgeText: 'New',
    },
    {
      title: 'Travel Organizer Set',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
      price: 24.99,
      compareAtPrice: 34.99,
      rating: 4.5,
      reviewsCount: 88,
      badgeText: 'Deal',
    },
    {
      title: 'Bluetooth Speaker Mini',
      imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
      price: 59.99,
      compareAtPrice: 79.99,
      rating: 4.7,
      reviewsCount: 304,
      badgeText: 'Best Seller',
    },
  ],
}: Partial<ProductGridProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-[#1A1A2E] md:text-3xl">Featured Products</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {products.map((product, idx) => (
            <ProductCard key={product.title + idx} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}

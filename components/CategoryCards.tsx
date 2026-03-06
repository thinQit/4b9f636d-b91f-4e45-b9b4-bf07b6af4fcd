'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface CategoryItem {
  name: string
  imageSrc: string
  count: string
}

interface CategoryCardsProps {
  tabs?: string[]
  categories?: CategoryItem[]
}

export default function CategoryCards({
  tabs = ['Trending', 'Home', 'Tech', 'Lifestyle'],
  categories = [
    { name: 'Audio', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', count: '42 products' },
    { name: 'Office', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', count: '31 products' },
    { name: 'Kitchen', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', count: '28 products' },
    { name: 'Travel', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', count: '19 products' },
  ],
}: Partial<CategoryCardsProps>) {
  const [activeTab, setActiveTab] = useState(tabs[0] || 'Trending')

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-6 text-2xl font-bold text-[#1A1A2E] md:text-3xl">Shop by Category</h2>

        <div className="mb-6 flex flex-wrap gap-2">
          {tabs.map((tab, idx) => (
            <button
              key={tab + idx}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'rounded-full px-4 py-2 text-sm font-medium transition',
                activeTab === tab ? 'bg-[#1A1A2E] text-white' : 'bg-white text-[#1A1A2E] border'
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, idx) => (
            <Card key={cat.name + idx} className="overflow-hidden rounded-2xl border bg-card p-0">
              <Image
                src={cat.imageSrc}
                alt={cat.name}
                width={800}
                height={600}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-[#1A1A2E]">{cat.name}</h3>
                <p className="text-sm text-muted-foreground">{cat.count}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

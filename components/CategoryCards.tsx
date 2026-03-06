"use client";

import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Category {
  id: string
  name: string
  description: string
  href: string
  imageSrc: string
}

interface CategoryCardsProps {
  title?: string
  categories?: Category[]
  className?: string
}

export default function CategoryCards({
  title = 'Shop by Category',
  categories = [
    { id: '1', name: 'Men', description: 'Tailored basics & street essentials', href: '/collections/men', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { id: '2', name: 'Women', description: 'Modern fits for everyday wear', href: '/collections/women', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg' },
    { id: '3', name: 'Accessories', description: 'Bags, caps, belts & more', href: '/collections/accessories', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg' },
  ],
  className = '',
}: Partial<CategoryCardsProps>) {
  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-2xl font-bold tracking-tight text-[#1A1A2E] md:text-3xl">{title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3 md:gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={category.href}>
              <Card className="overflow-hidden rounded-xl border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <Image src={category.imageSrc} alt={category.name} width={800} height={600} className="h-44 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#1A1A2E]">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

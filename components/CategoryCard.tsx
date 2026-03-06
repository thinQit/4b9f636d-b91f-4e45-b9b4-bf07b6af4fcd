"use client";

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CategoryCardProps {
  title?: string
  href?: string
  imageSrc?: string
}

export default function CategoryCard({
  title = 'Category',
  href = '/collections/all',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
}: Partial<CategoryCardProps>) {
  return (
    <Link href={href} className={cn('group relative block overflow-hidden rounded-2xl border')}>
      <Image src={imageSrc} alt={title} width={800} height={600} className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105" unoptimized />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <p className="absolute bottom-4 left-4 text-lg font-semibold text-white">{title}</p>
    </Link>
  )
}

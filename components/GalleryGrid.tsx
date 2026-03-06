"use client";

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

interface GalleryItem {
  id: string
  imageSrc: string
  caption: string
  tags: string[]
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({
  items = [
    { id: '1', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', caption: 'Homepage redesign concept', tags: ['UI', 'Brand'] },
    { id: '2', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', caption: 'Hero campaign visual', tags: ['Marketing'] },
    { id: '3', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', caption: 'About section product shot', tags: ['Web'] },
  ],
}: Partial<GalleryGridProps>) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {items.map((item) => (
        <figure key={item.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
          <Image src={item.imageSrc} alt={item.caption} width={800} height={500} unoptimized className="h-52 w-full rounded-lg object-cover" />
          <figcaption className="mt-3 text-sm text-slate-700">{item.caption}</figcaption>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
        </figure>
      ))}
    </div>
  )
}

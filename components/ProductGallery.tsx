'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductGalleryProps {
  images?: string[]
  alt?: string
  className?: string
}

export default function ProductGallery({
  images = ['https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg'],
  alt = 'Product image',
  className = '',
}: Partial<ProductGalleryProps>) {
  const [active, setActive] = useState(0)

  return (
    <div className={cn('grid gap-4', className)}>
      <div className="overflow-hidden rounded-xl border bg-white">
        <Image
          src={images[active] || 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg'}
          alt={alt}
          width={1200}
          height={1200}
          className="h-auto w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, idx) => (
          <button
            key={img + idx}
            onClick={() => setActive(idx)}
            className={cn(
              'overflow-hidden rounded-lg border',
              idx === active ? 'ring-2 ring-[#E63946]' : 'opacity-80 hover:opacity-100'
            )}
          >
            <Image src={img} alt={alt + ' thumbnail ' + (idx + 1)} width={300} height={300} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

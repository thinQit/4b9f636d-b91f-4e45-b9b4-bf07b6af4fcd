'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductImageGalleryProps {
  images?: string[]
}

export default function ProductImageGallery({
  images = ['https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg'],
}: Partial<ProductImageGalleryProps>) {
  const [active, setActive] = useState(images[0] || 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg')

  return (
    <div className="grid gap-3">
      <div className="overflow-hidden rounded-2xl border">
        <Image src={active} alt="Product image" width={1600} height={900} className="h-auto w-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, idx) => (
          <button
            key={img + idx}
            onClick={() => setActive(img)}
            className={cn(
              'overflow-hidden rounded-lg border',
              active === img ? 'ring-2 ring-[#E63946]' : ''
            )}
            aria-label={'View image ' + (idx + 1)}
          >
            <Image src={img} alt={'Thumbnail ' + (idx + 1)} width={400} height={300} className="h-20 w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

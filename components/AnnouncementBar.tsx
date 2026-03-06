'use client'

import React from 'react'
import { Truck, Sparkles, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementBarProps {
  message?: string
  shippingMessage?: string
  saleCode?: string
  className?: string
}

export default function AnnouncementBar({
  message = 'Spring Sale: Up to 30% off selected essentials.',
  shippingMessage = 'Free shipping on orders over $75',
  saleCode = 'SPRING30',
  className = '',
}: Partial<AnnouncementBarProps>) {
  return (
    <div
      className={cn(
        'w-full bg-[#1A1A2E] text-white border-b border-white/10',
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-2.5 md:px-6">
        <div className="flex flex-col items-center justify-between gap-2 text-xs sm:flex-row sm:text-sm">
          <div className="flex items-center gap-2 font-medium">
            <Sparkles className="h-4 w-4 text-[#E63946]" />
            <span>{message}</span>
          </div>
          <div className="hidden h-4 w-px bg-white/20 sm:block" />
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-[#E63946]" />
              <span>{shippingMessage}</span>
            </div>
            <div className="hidden h-4 w-px bg-white/20 md:block" />
            <div className="flex items-center gap-1.5">
              <Tag className="h-4 w-4 text-[#E63946]" />
              <span>
                Use code: <strong>{saleCode}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

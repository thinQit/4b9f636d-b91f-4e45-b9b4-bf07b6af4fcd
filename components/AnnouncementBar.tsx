'use client'

import Link from 'next/link'
import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface AnnouncementBarProps {
  message?: string
  ctaLabel?: string
  ctaHref?: string
  secondaryCtaLabel?: string
  secondaryCtaHref?: string
  dismissible?: boolean
  className?: string
}

export default function AnnouncementBar({
  message = 'Spring Sale: Up to 40% off selected essentials. Free shipping over $75.',
  ctaLabel = 'Shop Deals',
  ctaHref = '/collections/sale',
  secondaryCtaLabel = 'Learn More',
  secondaryCtaHref = '/shipping',
  dismissible = true,
  className = '',
}: Partial<AnnouncementBarProps>) {
  const [hidden, setHidden] = useState(false)

  if (hidden) return null

  return (
    <div
      className={cn(
        'w-full border-b bg-[#1A1A2E] text-white',
        className
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-sm md:px-6">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-[#E63946]" />
          <p className="font-medium">{message}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={ctaHref}>
            <Button size="sm" className="rounded-xl bg-[#E63946] hover:bg-[#c92f3b]">
              {ctaLabel}
            </Button>
          </Link>
          <Link href={secondaryCtaHref} className="hidden underline-offset-4 hover:underline md:inline-flex">
            {secondaryCtaLabel}
          </Link>
          {dismissible ? (
            <button
              aria-label="Dismiss announcement"
              onClick={() => setHidden(true)}
              className="rounded-md p-1 hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

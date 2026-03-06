'use client'

import Link from 'next/link'
import { Sparkles, Truck, Gift } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AnnouncementItem {
  id: string
  text: string
  href: string
  icon: string
}

interface AnnouncementBarProps {
  items?: AnnouncementItem[]
  className?: string
}

const iconMap = {
  Sparkles,
  Truck,
  Gift,
}

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || Sparkles
}

export default function AnnouncementBar({
  items = [
    { id: '1', text: 'Spring Drop Live — Up to 30% Off', href: '/collections/sale', icon: 'Sparkles' },
    { id: '2', text: 'Free Shipping on Orders Over $75', href: '/shipping', icon: 'Truck' },
    { id: '3', text: 'Bundle & Save on Best Sellers', href: '/collections/bundles', icon: 'Gift' },
  ],
  className = '',
}: Partial<AnnouncementBarProps>) {
  return (
    <div className={cn('w-full bg-[#1A1A2E] text-white', className)}>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-4 py-2 text-sm md:gap-8">
        {items.map((item) => {
          const Icon = getIcon(item.icon)
          return (
            <Link key={item.id} href={item.href} className="inline-flex items-center gap-2 opacity-95 transition hover:opacity-100">
              <Icon className="h-4 w-4 text-[#E63946]" />
              <span>{item.text}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

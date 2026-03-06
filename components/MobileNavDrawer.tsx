'use client'

import Link from 'next/link'
import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MobileNavDrawerProps {
  open?: boolean
  onClose?: () => void
  categories?: string[]
  quickLinks?: { label: string; href: string }[]
  className?: string
}

export default function MobileNavDrawer({
  open = false,
  onClose = () => {},
  categories = ['New Arrivals', 'Women', 'Men', 'Home', 'Sale'],
  quickLinks = [
    { label: 'Track Order', href: '/track-order' },
    { label: 'Help Center', href: '/help' },
    { label: 'Returns', href: '/returns' },
  ],
  className = '',
}: Partial<MobileNavDrawerProps>) {
  return (
    <div className={cn('fixed inset-0 z-50 md:hidden', open ? 'pointer-events-auto' : 'pointer-events-none', className)}>
      <div className={cn('absolute inset-0 bg-black/50 transition-opacity', open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />
      <aside
        className={cn(
          'absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white p-5 shadow-xl transition-transform',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-bold">Browse</p>
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>
        <Input placeholder="Search products..." className="mb-5" />
        <div className="space-y-2">
          {categories.map((cat) => (
            <Link key={cat} href={'/collections/' + cat.toLowerCase().replace(/\s+/g, '-')} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">
              {cat}
            </Link>
          ))}
        </div>
        <div className="mt-6 border-t pt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Quick Links</p>
          {quickLinks.map((item) => (
            <Link key={item.label} href={item.href} className="block py-1.5 text-sm text-[#1A1A2E]">
              {item.label}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  )
}

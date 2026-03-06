'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Menu, Search, ShoppingCart, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  cartCount?: number
  className?: string
}

export default function Navbar({
  logoText = 'NovaMart',
  links = [
    { label: 'New Arrivals', href: '/new-arrivals' },
    { label: 'Best Sellers', href: '/best-sellers' },
    { label: 'Electronics', href: '/category/electronics' },
    { label: 'Home', href: '/category/home' },
    { label: 'Deals', href: '/deals' },
  ],
  cartCount = 0,
  className = '',
}: Partial<NavbarProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')

  const cartLabel = useMemo(() => {
    return cartCount > 99 ? '99+' : String(cartCount)
  }, [cartCount])

  return (
    <header className={cn('sticky top-0 z-50 bg-[#F8F9FA]/95 backdrop-blur border-b', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link href="/" className="text-xl font-bold tracking-tight text-[#1A1A2E]">
              {logoText}
            </Link>
          </div>

          <nav className="hidden items-center gap-5 md:flex">
            {links.map((link, idx) => (
              <Link
                key={link.href + idx}
                href={link.href}
                className="text-sm font-medium text-[#1A1A2E] transition-colors hover:text-[#E63946]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden w-full max-w-sm items-center gap-2 md:flex">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="pl-9 rounded-xl"
              />
            </div>
          </div>

          <Button variant="outline" className="rounded-xl border-[#1A1A2E]/20">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart
            <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-[#E63946] px-1.5 py-0.5 text-[10px] font-semibold text-white">
              {cartLabel}
            </span>
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl">
            <div className="flex h-14 items-center justify-between border-b px-4">
              <span className="font-semibold">{logoText}</span>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="pointer-events-none absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-9 rounded-xl" />
              </div>
              <nav className="flex flex-col gap-1">
                {links.map((link, idx) => (
                  <Link
                    key={link.href + '-mobile-' + idx}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-[#1A1A2E] hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

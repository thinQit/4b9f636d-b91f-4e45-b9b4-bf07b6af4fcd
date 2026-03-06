'use client'

import { useState } from 'react'
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
  logoText = 'Northlane Shop',
  links = [
    { label: 'New Arrivals', href: '/collections/new' },
    { label: 'Men', href: '/collections/men' },
    { label: 'Women', href: '/collections/women' },
    { label: 'Accessories', href: '/collections/accessories' },
    { label: 'Sale', href: '/collections/sale' },
  ],
  cartCount = 2,
  className = '',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className={cn('sticky top-0 z-50 border-b bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:gap-6">
        <Link href="/" className="shrink-0 text-lg font-bold tracking-tight text-[#1A1A2E]">
          {logoText}
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#1A1A2E] hover:text-[#E63946]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden w-full max-w-sm md:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-9" />
          </div>
        </div>

        <Button variant="outline" className="relative hidden md:inline-flex">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Cart
          <span className="ml-2 rounded-full bg-[#E63946] px-2 py-0.5 text-xs text-white">{cartCount}</span>
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} aria-label="Close menu" />
          <aside className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <span className="font-semibold text-[#1A1A2E]">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="mb-5">
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search products..." className="pl-9" />
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-[#1A1A2E] hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <Button className="mt-6 w-full bg-[#E63946] hover:bg-[#d83240]">
              <ShoppingCart className="mr-2 h-4 w-4" />
              View Cart ({cartCount})
            </Button>
          </aside>
        </div>
      )}
    </header>
  )
}

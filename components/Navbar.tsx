'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, Search, ShoppingCart, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NavbarProps {
  logoText: string
  navLinks: { label: string; href: string }[]
  storeLinks: { label: string; href: string }[]
  cartCount: number
  onSearchClick?: () => void
}

export default function Navbar({
  logoText = 'Parv Studio',
  navLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  storeLinks = [
    { label: 'Store', href: '/store' },
    { label: 'Featured', href: '/store?featured=true' },
  ],
  cartCount = 0,
  onSearchClick,
}: Partial<NavbarProps>) {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[#1A1A2E]">
          <Sparkles className="h-5 w-5 text-[#4f46e5]" />
          <span>{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-[#4f46e5]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {storeLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-slate-600 hover:text-[#4f46e5]">
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="icon" onClick={onSearchClick}>
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 rounded-full bg-[#E63946] px-1.5 text-[10px] text-white">
                {cartCount}
              </span>
            )}
          </Button>
        </div>

        <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMobileOpen(!isMobileOpen)}>
          {isMobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div className={cn('border-t border-slate-200 bg-white md:hidden', isMobileOpen ? 'block' : 'hidden')}>
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-4">
          <Input placeholder="Search products or projects..." onFocus={onSearchClick} />
          <div className="grid gap-2">
            {navLinks.concat(storeLinks).map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

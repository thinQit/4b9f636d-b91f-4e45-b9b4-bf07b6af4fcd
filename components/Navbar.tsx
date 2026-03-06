'use client'

import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import CartButton from '@/components/CartButton'

interface NavbarProps {
  logoText?: string
  categories?: string[]
  cartCount?: number
  onOpenMobileNav?: () => void
  className?: string
}

export default function Navbar({
  logoText = 'NexaShop',
  categories = ['New Arrivals', 'Women', 'Men', 'Home', 'Sale'],
  cartCount = 0,
  onOpenMobileNav,
  className = '',
}: Partial<NavbarProps>) {
  return (
    <header className={cn('sticky top-0 z-40 border-b bg-white/95 backdrop-blur', className)}>
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 md:px-6">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onOpenMobileNav}>
          <Menu className="h-5 w-5" />
        </Button>

        <Link href="/" className="text-xl font-bold tracking-tight text-[#1A1A2E]">
          {logoText}
        </Link>

        <nav className="ml-6 hidden items-center gap-5 md:flex">
          {categories.map((cat) => (
            <Link key={cat} href={'/collections/' + cat.toLowerCase().replace(/\s+/g, '-')} className="text-sm font-medium text-[#1A1A2E] hover:text-[#E63946]">
              {cat}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden max-w-sm flex-1 items-center md:flex">
          <div className="relative w-full">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search products..." className="pl-9" />
          </div>
        </div>

        <CartButton count={cartCount} />
      </div>
    </header>
  )
}

"use client";

import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  shopLinks?: FooterLink[]
  companyLinks?: FooterLink[]
  helpLinks?: FooterLink[]
  address?: string
  hours?: string
  legalText?: string
  className?: string
}

export default function Footer({
  shopLinks = [
    { label: 'New Arrivals', href: '/collections/new' },
    { label: 'Best Sellers', href: '/collections/best-sellers' },
    { label: 'Sale', href: '/collections/sale' },
  ],
  companyLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  helpLinks = [
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
    { label: 'Contact', href: '/contact' },
  ],
  address = '128 Market Street, San Francisco, CA 94103',
  hours = 'Mon–Sat 10:00 AM – 7:00 PM',
  legalText = '© 2026 Northlane Shop. All rights reserved.',
  className = '',
}: Partial<FooterProps>) {
  return (
    <footer className={cn('bg-[#1A1A2E] text-white', className)}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-4">
        <div>
          <h4 className="text-lg font-bold">Northlane Shop</h4>
          <p className="mt-3 text-sm text-white/80">{address}</p>
          <p className="mt-1 text-sm text-white/80">{hours}</p>
        </div>
        <div>
          <h5 className="font-semibold">Shop</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {shopLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Company</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {companyLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Help</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            {helpLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator className="bg-white/20" />
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/70">{legalText}</div>
    </footer>
  )
}

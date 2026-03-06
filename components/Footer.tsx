"use client";

import Link from 'next/link'
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  brandName: string
  pageLinks: { label: string; href: string }[]
  storeLinks: { label: string; href: string }[]
  socialLinks: { label: string; href: string; icon: string }[]
  legalText: string
}

export default function Footer({
  brandName = 'Parv Studio',
  pageLinks = [
    { label: 'About Me', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  storeLinks = [
    { label: 'Store Home', href: '/store' },
    { label: 'Store Details', href: '/store/details' },
  ],
  socialLinks = [
    { label: 'LinkedIn', href: '#', icon: 'Linkedin' },
    { label: 'GitHub', href: '#', icon: 'Github' },
    { label: 'Instagram', href: '#', icon: 'Instagram' },
    { label: 'Twitter', href: '#', icon: 'Twitter' },
  ],
  legalText = '© 2026 Parv Studio. All rights reserved.',
}: Partial<FooterProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Linkedin,
    Github,
    Instagram,
    Twitter,
  }

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="text-lg font-semibold text-[#1A1A2E]">{brandName}</h3>
          <p className="mt-2 text-sm text-slate-600">Modern portfolio-commerce experience updated every 3 months.</p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Pages</h4>
          <div className="grid gap-2">
            {pageLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-[#4f46e5]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Store</h4>
          <div className="grid gap-2">
            {storeLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-[#4f46e5]">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">Social</h4>
          <div className="flex gap-3">
            {socialLinks.map((item) => {
              const Icon = iconMap[item.icon] || Linkedin
              return (
                <Link key={item.label} href={item.href} className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">
                  <Icon className="h-4 w-4 text-slate-700" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500 md:px-6">{legalText}</div>
    </footer>
  )
}

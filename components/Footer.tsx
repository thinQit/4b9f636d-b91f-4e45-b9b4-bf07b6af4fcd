"use client";

import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  brandName?: string
  year?: number
}

export default function Footer({
  brandName = 'NovaMart',
  year = new Date().getFullYear(),
}: Partial<FooterProps>) {
  return (
    <footer className="bg-[#1A1A2E] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-2xl font-bold">{brandName}</h3>
            <p className="max-w-md text-sm text-white/75">
              Curated quality products, fast delivery, and trusted support for every order.
            </p>
            <div className="flex max-w-md items-center gap-2">
              <Input placeholder="Enter your email" className="bg-white text-[#1A1A2E]" />
              <Button className="bg-[#E63946] text-white hover:bg-[#d5303d]">Subscribe</Button>
            </div>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Policies</h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link href="/shipping">Shipping Policy</Link></li>
              <li><Link href="/returns">Returns & Refunds</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 210 Market Street, Austin, TX</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (512) 555-0198</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@novamart.com</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <Link href="#" className="text-white/80 hover:text-white"><Facebook className="h-4 w-4" /></Link>
              <Link href="#" className="text-white/80 hover:text-white"><Instagram className="h-4 w-4" /></Link>
              <Link href="#" className="text-white/80 hover:text-white"><Twitter className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-white/15" />
        <p className="text-center text-xs text-white/60">© {year} {brandName}. All rights reserved.</p>
      </div>
    </footer>
  )
}

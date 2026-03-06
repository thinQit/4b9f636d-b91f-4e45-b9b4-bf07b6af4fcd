"use client";

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface FooterProps {
  brandName?: string
}

export default function Footer({ brandName = 'NexaShop' }: Partial<FooterProps>) {
  return (
    <footer className="border-t bg-[#F8F9FA]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="text-lg font-bold text-[#1A1A2E]">{brandName}</h3>
          <p className="mt-2 text-sm text-muted-foreground">Premium everyday essentials with fast delivery and easy returns.</p>
        </div>
        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <div className="mt-3 flex gap-2">
            <Input placeholder="you@example.com" />
            <Button className="bg-[#E63946] hover:bg-[#c92f3b]">Join</Button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold">Policies</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <div className="mt-3 space-y-2 text-sm">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@nexashop.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 202-4410</p>
            <div className="flex gap-3 pt-2">
              <Facebook className="h-4 w-4" />
              <Instagram className="h-4 w-4" />
              <Twitter className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

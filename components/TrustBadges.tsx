"use client";

import React from 'react'
import { Headset, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default function TrustBadges() {
  const items = [
    { icon: Truck, title: 'Fast Shipping', desc: 'Dispatch in 24 hours on most orders' },
    { icon: RefreshCcw, title: 'Easy Returns', desc: '30-day no-hassle return policy' },
    { icon: ShieldCheck, title: 'Secure Checkout', desc: 'Protected payments and data' },
    { icon: Headset, title: '24/7 Support', desc: 'Friendly help whenever you need it' },
  ]

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <Card key={item.title + idx} className="rounded-2xl border bg-card p-5">
              <item.icon className="mb-3 h-5 w-5 text-[#E63946]" />
              <h3 className="font-semibold text-[#1A1A2E]">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

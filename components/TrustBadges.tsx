"use client";

import { ShieldCheck, RotateCcw, Truck, Headphones } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustItem {
  id: string
  title: string
  description: string
  icon: string
}

interface TrustBadgesProps {
  items?: TrustItem[]
  className?: string
}

const iconMap = { ShieldCheck, RotateCcw, Truck, Headphones }

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] || ShieldCheck
}

export default function TrustBadges({
  items = [
    { id: '1', title: 'Secure Payments', description: 'SSL encrypted checkout', icon: 'ShieldCheck' },
    { id: '2', title: 'Easy Returns', description: '30-day hassle free returns', icon: 'RotateCcw' },
    { id: '3', title: 'Fast Shipping', description: 'Delivery in 2-5 business days', icon: 'Truck' },
    { id: '4', title: 'Human Support', description: 'Friendly help, 7 days a week', icon: 'Headphones' },
  ],
  className = '',
}: Partial<TrustBadgesProps>) {
  return (
    <section className={cn('py-12', className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 md:grid-cols-4 md:gap-6">
        {items.map((item) => {
          const Icon = getIcon(item.icon)
          return (
            <div key={item.id} className="rounded-xl border bg-white p-4 text-center shadow-sm">
              <Icon className="mx-auto h-6 w-6 text-[#E63946]" />
              <h3 className="mt-2 text-sm font-semibold text-[#1A1A2E]">{item.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

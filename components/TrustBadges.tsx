"use client";

import { ShieldCheck, Truck, RotateCcw, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBadgeItem {
  icon: string
  title: string
  description: string
}

interface TrustBadgesProps {
  items: TrustBadgeItem[]
  className: string
}

export default function TrustBadges({
  items = [
    { icon: 'ShieldCheck', title: 'Secure Checkout', description: 'Encrypted payments and trusted processors.' },
    { icon: 'Truck', title: 'Fast Delivery', description: 'Quick digital and physical fulfillment.' },
    { icon: 'RotateCcw', title: 'Easy Returns', description: 'Transparent 14-day return policy.' },
    { icon: 'BadgeCheck', title: 'Verified Quality', description: 'Curated, high-standard products and work.' },
  ],
  className = '',
}: Partial<TrustBadgesProps>) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShieldCheck,
    Truck,
    RotateCcw,
    BadgeCheck,
  }

  return (
    <div className={cn('grid gap-4 sm:grid-cols-2 lg:grid-cols-4', className)}>
      {items.map((item) => {
        const Icon = iconMap[item.icon] || ShieldCheck
        return (
          <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <Icon className="mb-3 h-5 w-5 text-[#10b981]" />
            <h4 className="font-semibold text-[#1A1A2E]">{item.title}</h4>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </div>
        )
      })}
    </div>
  )
}

"use client";

import { ShieldCheck, Truck, RotateCcw, Headset } from 'lucide-react'

export default function TrustBadgesRow() {
  const items = [
    { label: 'Secure Checkout', icon: ShieldCheck },
    { label: 'Fast Shipping', icon: Truck },
    { label: '30-Day Returns', icon: RotateCcw },
    { label: '24/7 Support', icon: Headset },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 rounded-xl border bg-white p-3">
          <item.icon className="h-5 w-5 text-[#E63946]" />
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </div>
  )
}

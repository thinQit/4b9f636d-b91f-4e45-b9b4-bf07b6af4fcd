'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProductTabsProps {
  overview?: string
  compatibility?: string
  inTheBox?: string[]
}

export default function ProductTabs({
  overview = 'Designed for daily performance with premium materials and intuitive controls.',
  compatibility = 'Compatible with iOS, Android, Windows, and macOS devices via Bluetooth 5.2.',
  inTheBox = ['Device unit', 'USB-C cable', 'Quick start guide', 'Warranty card'],
}: Partial<ProductTabsProps>) {
  const tabs = ['Overview', 'Compatibility', "What's in the box"]
  const [active, setActive] = useState(tabs[0])

  return (
    <div className="rounded-2xl border bg-white p-4 md:p-6">
      <div className="mb-4 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={cn(
              'rounded-full px-4 py-2 text-sm font-medium',
              active === tab ? 'bg-[#1A1A2E] text-white' : 'bg-muted text-[#1A1A2E]'
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {active === 'Overview' && <p className="text-sm text-muted-foreground">{overview}</p>}
      {active === 'Compatibility' && <p className="text-sm text-muted-foreground">{compatibility}</p>}
      {active === "What's in the box" && (
        <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
          {inTheBox.map((item, idx) => (
            <li key={item + idx}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

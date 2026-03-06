'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

interface FiltersSidebarProps {
  onApply?: () => void
}

export default function FiltersSidebar({ onApply = () => {} }: Partial<FiltersSidebarProps>) {
  const [min, setMin] = useState('0')
  const [max, setMax] = useState('200')

  return (
    <aside className="rounded-2xl border p-4">
      <h3 className="mb-4 font-semibold">Filters</h3>
      <div className="space-y-3">
        <div>
          <Label>Category</Label>
          <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm">
            <option>All</option>
            <option>Women</option>
            <option>Men</option>
            <option>Home</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label>Min</Label>
            <Input value={min} onChange={(e) => setMin(e.target.value)} />
          </div>
          <div>
            <Label>Max</Label>
            <Input value={max} onChange={(e) => setMax(e.target.value)} />
          </div>
        </div>
        <div>
          <Label>Sort</Label>
          <select className="mt-1 w-full rounded-md border px-3 py-2 text-sm">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Newest</option>
          </select>
        </div>
        <Button onClick={onApply} className="w-full bg-[#E63946] hover:bg-[#c92f3b]">Apply Filters</Button>
      </div>
    </aside>
  )
}

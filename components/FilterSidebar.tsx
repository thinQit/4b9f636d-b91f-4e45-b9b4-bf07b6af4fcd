'use client'

import React, { useState } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

export default function FilterSidebar() {
  const [maxPrice, setMaxPrice] = useState('200')

  return (
    <aside className="rounded-2xl border bg-white p-4 md:p-5">
      <h3 className="mb-4 text-lg font-semibold text-[#1A1A2E]">Filters</h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Category</Label>
          <Select>
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Home</option>
            <option>Lifestyle</option>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="price-range">Max Price ($)</Label>
          <Input
            id="price-range"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="rounded-xl"
          />
        </div>

        <div className="space-y-2">
          <Label>Rating</Label>
          <Select>
            <option>Any rating</option>
            <option>4★ & up</option>
            <option>3★ & up</option>
          </Select>
        </div>

        <div className="flex items-center justify-between rounded-xl border p-3">
          <span className="text-sm font-medium">In stock only</span>
          <input type="checkbox" defaultChecked className="h-4 w-4" />
        </div>
      </div>
    </aside>
  )
}

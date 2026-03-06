'use client'

import React, { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  suggestions?: string[]
  placeholder?: string
}

export default function SearchBar({
  suggestions = ['Wireless earbuds', 'Desk organizer', 'Portable charger', 'LED lamp'],
  placeholder = 'Search for products...',
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => suggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase())).slice(0, 6),
    [query, suggestions]
  )

  return (
    <div className="relative w-full max-w-xl">
      <Search className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl pl-9 focus-visible:ring-2 focus-visible:ring-[#E63946]"
      />
      {query.length > 0 && filtered.length > 0 && (
        <div className="absolute z-20 mt-2 w-full rounded-xl border bg-white shadow-lg">
          {filtered.map((item, idx) => (
            <button
              key={item + idx}
              onClick={() => setQuery(item)}
              className="block w-full px-3 py-2 text-left text-sm hover:bg-muted"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

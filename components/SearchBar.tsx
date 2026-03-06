'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface SearchBarProps {
  placeholder?: string
  delay?: number
  onSearch?: (query: string) => void
  className?: string
}

export default function SearchBar({
  placeholder = 'Search products, brands, categories...',
  delay = 400,
  onSearch = () => {},
  className = '',
}: Partial<SearchBarProps>) {
  const [query, setQuery] = useState('')

  useEffect(() => {
    const timer = setTimeout(() => onSearch(query), delay)
    return () => clearTimeout(timer)
  }, [query, delay, onSearch])

  return (
    <div className={cn('relative', className)}>
      <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="h-11 rounded-xl border pl-10 focus-visible:ring-[#E63946]"
      />
    </div>
  )
}

'use client'

import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchDialogProps {
  open: boolean
  query: string
  results: { id: string; title: string; type: string }[]
  onClose?: () => void
  onQueryChange?: (value: string) => void
}

export default function SearchDialog({
  open = false,
  query = '',
  results = [
    { id: '1', title: 'Portfolio Starter Kit', type: 'Product' },
    { id: '2', title: 'SaaS Dashboard Redesign', type: 'Project' },
  ],
  onClose,
  onQueryChange,
}: Partial<SearchDialogProps>) {
  return open ? (
    <div className="fixed inset-0 z-50 bg-black/40 p-4" onClick={onClose}>
      <div className="mx-auto mt-20 max-w-2xl rounded-xl bg-white p-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <Search className="absolute left-3 top-3.5 h-4 w-4 text-slate-400" />
          <Input value={query} onChange={(e) => onQueryChange && onQueryChange(e.target.value)} className="pl-9" placeholder="Search products and projects..." />
        </div>
        <div className="mt-4 space-y-2">
          {results.map((result) => (
            <button key={result.id} className="flex w-full items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-left hover:bg-slate-50">
              <span className="text-sm text-[#1A1A2E]">{result.title}</span>
              <span className="text-xs text-slate-500">{result.type}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  ) : null
}

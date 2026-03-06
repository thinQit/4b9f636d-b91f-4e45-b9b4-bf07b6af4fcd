'use client'

import { cn } from '@/lib/utils'

interface CategoryNavProps {
  categories: { label: string; count: number }[]
  activeCategory: string
  onCategoryChange?: (category: string) => void
}

export default function CategoryNav({
  categories = [
    { label: 'All', count: 24 },
    { label: 'Templates', count: 8 },
    { label: 'UI Kits', count: 5 },
    { label: 'Case Studies', count: 6 },
    { label: 'Services', count: 5 },
  ],
  activeCategory = 'All',
  onCategoryChange,
}: Partial<CategoryNavProps>) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category.label}
          onClick={() => onCategoryChange && onCategoryChange(category.label)}
          className={cn(
            'whitespace-nowrap rounded-full border px-4 py-2 text-sm',
            activeCategory === category.label
              ? 'border-[#4f46e5] bg-[#4f46e5] text-white'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
          )}
        >
          {category.label} ({category.count})
        </button>
      ))}
    </div>
  )
}

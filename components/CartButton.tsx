'use client'

import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface CartButtonProps {
  count?: number
  href?: string
  className?: string
}

export default function CartButton({
  count = 0,
  href = '/cart',
  className = '',
}: Partial<CartButtonProps>) {
  return (
    <Link href={href} className={cn('relative inline-flex', className)}>
      <Button variant="ghost" size="icon" aria-label="Open cart">
        <ShoppingCart className="h-5 w-5" />
      </Button>
      <Badge className="absolute -right-1 -top-1 rounded-full bg-[#E63946] px-1.5 py-0 text-[10px] text-white">
        {count}
      </Badge>
    </Link>
  )
}

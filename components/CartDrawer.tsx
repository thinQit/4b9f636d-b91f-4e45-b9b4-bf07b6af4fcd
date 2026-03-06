'use client'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CartItem {
  id: string
  name: string
  price: number
  imageSrc: string
  quantity: number
}

interface CartDrawerProps {
  open: boolean
  items: CartItem[]
  onClose?: () => void
}

export default function CartDrawer({
  open = false,
  items = [
    { id: '1', name: 'Portfolio Starter Kit', price: 79, imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg', quantity: 1 },
    { id: '2', name: 'Case Study Pack', price: 59, imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', quantity: 1 },
  ],
  onClose,
}: Partial<CartDrawerProps>) {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <aside className={open ? 'fixed inset-0 z-50' : 'hidden'}>
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white p-5 shadow-xl">
        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[#1A1A2E]">Your Cart</h3>
          <Button variant="outline" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-3 rounded-lg border border-slate-200 p-3">
              <Image src={item.imageSrc} alt={item.name} width={64} height={64} unoptimized className="rounded-md object-cover" />
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1A1A2E]">{item.name}</p>
                <p className="text-sm text-slate-600">${item.price}</p>
                <div className="mt-2 flex items-center gap-2">
                  <button className="rounded border border-slate-200 p-1"><Minus className="h-3 w-3" /></button>
                  <span className="text-sm">{item.quantity}</span>
                  <button className="rounded border border-slate-200 p-1"><Plus className="h-3 w-3" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t border-slate-200 pt-4">
          <div className="mb-4 flex items-center justify-between text-sm">
            <span className="text-slate-600">Subtotal</span>
            <span className="font-semibold text-[#1A1A2E]">${subtotal.toFixed(2)}</span>
          </div>
          <Button className="w-full bg-[#4f46e5] hover:bg-[#4338ca]">Proceed to Checkout</Button>
        </div>
      </div>
    </aside>
  )
}

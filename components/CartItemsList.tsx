'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

interface CartItem {
  id: string
  name: string
  imageSrc: string
  price: number
  quantity: number
}

interface CartItemsListProps {
  items?: CartItem[]
}

export default function CartItemsList({
  items = [
    { id: '1', name: 'Classic Hoodie', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg', price: 58, quantity: 1 },
    { id: '2', name: 'Linen Shirt', imageSrc: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg', price: 42, quantity: 2 },
  ],
}: Partial<CartItemsListProps>) {
  const [cart, setCart] = useState(items)

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <div key={item.id} className="flex gap-3 rounded-xl border p-3">
          <Image src={item.imageSrc} alt={item.name} width={100} height={100} className="rounded-md object-cover" unoptimized />
          <div className="flex-1">
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-muted-foreground">${item.price}</p>
            <div className="mt-2 flex items-center gap-2">
              <Button size="sm" variant="outline" onClick={() => setCart(cart.map((c) => c.id === item.id ? { ...c, quantity: Math.max(1, c.quantity - 1) } : c))}>-</Button>
              <span>{item.quantity}</span>
              <Button size="sm" variant="outline" onClick={() => setCart(cart.map((c) => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c))}>+</Button>
              <Button size="sm" variant="ghost" onClick={() => setCart(cart.filter((c) => c.id !== item.id))}>Remove</Button>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between border-t pt-4 font-semibold">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
    </div>
  )
}

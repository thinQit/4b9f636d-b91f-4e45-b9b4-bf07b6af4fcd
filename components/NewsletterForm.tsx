'use client'

import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#1A1A2E]">Get 10% off your first order</h3>
      <p className="mt-1 text-sm text-muted-foreground">Join our newsletter for product drops and exclusive deals.</p>
      <div className="mt-4 space-y-2">
        <Label htmlFor="newsletter-email">Email address</Label>
        <Input
          id="newsletter-email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl"
        />
      </div>
      <Button className="mt-4 w-full rounded-xl bg-[#E63946] text-white hover:bg-[#d5303d]">Subscribe</Button>
      <p className="mt-3 text-xs text-muted-foreground">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  )
}

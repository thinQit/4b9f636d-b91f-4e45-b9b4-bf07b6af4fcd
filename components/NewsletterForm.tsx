'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="rounded-2xl border bg-white p-6">
      <h3 className="text-xl font-bold">Join our newsletter</h3>
      <p className="mt-1 text-sm text-muted-foreground">Get product drops and member-only offers.</p>
      {submitted ? (
        <p className="mt-4 text-sm font-medium text-green-600">Thanks for subscribing!</p>
      ) : (
        <form
          className="mt-4 flex flex-col gap-3 md:flex-row"
          onSubmit={(e) => {
            e.preventDefault()
            setSubmitted(true)
          }}
        >
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          <Button type="submit" className="bg-[#E63946] hover:bg-[#c92f3b]">Subscribe</Button>
        </form>
      )}
      <p className="mt-3 text-xs text-muted-foreground">By subscribing, you agree to our Privacy Policy.</p>
    </div>
  )
}

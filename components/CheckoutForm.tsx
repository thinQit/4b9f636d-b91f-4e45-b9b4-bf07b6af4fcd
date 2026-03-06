'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function CheckoutForm() {
  const [step, setStep] = useState(1)

  return (
    <div className="rounded-2xl border p-5">
      <p className="mb-4 text-sm font-medium">Step {step} of 3</p>
      {step === 1 ? (
        <div className="space-y-3">
          <Label>Full Name</Label>
          <Input placeholder="Jane Doe" />
          <Label>Address</Label>
          <Input placeholder="123 Main Street" />
        </div>
      ) : null}
      {step === 2 ? (
        <div className="space-y-3">
          <Label>Shipping Method</Label>
          <select className="w-full rounded-md border px-3 py-2 text-sm">
            <option>Standard (3-5 days)</option>
            <option>Express (1-2 days)</option>
          </select>
        </div>
      ) : null}
      {step === 3 ? (
        <div className="space-y-3">
          <Label>Payment Preference</Label>
          <select className="w-full rounded-md border px-3 py-2 text-sm">
            <option>Credit Card</option>
            <option>PayPal</option>
            <option>Apple Pay</option>
          </select>
        </div>
      ) : null}
      <div className="mt-5 flex justify-between">
        <Button variant="outline" onClick={() => setStep(Math.max(1, step - 1))}>Back</Button>
        <Button onClick={() => setStep(Math.min(3, step + 1))} className="bg-[#E63946] hover:bg-[#c92f3b]">
          {step === 3 ? 'Review Order' : 'Continue'}
        </Button>
      </div>
    </div>
  )
}

"use client";

import React from 'react'
import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  title: string
  review: string
  rating: number
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsGrid({
  testimonials = [
    {
      name: 'Mia Johnson',
      title: 'Verified Buyer',
      review: 'Great quality and fast dispatch. Packaging was premium and secure.',
      rating: 5,
    },
    {
      name: 'Leo Carter',
      title: 'First-time Customer',
      review: 'Easy browsing experience and the filters helped me find exactly what I needed.',
      rating: 4,
    },
    {
      name: 'Sofia Lee',
      title: 'Loyal Customer',
      review: 'Love the seasonal deals and loyalty perks. Returns process is smooth too.',
      rating: 5,
    },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, idx) => (
            <Card key={item.name + idx} className="rounded-2xl border bg-card p-5">
              <div className="mb-3 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={item.name + '-star-' + i}
                    className={i < item.rating ? 'h-4 w-4 fill-yellow-400 text-yellow-400' : 'h-4 w-4 text-muted'}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">"{item.review}"</p>
              <div className="mt-4">
                <p className="font-semibold text-[#1A1A2E]">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

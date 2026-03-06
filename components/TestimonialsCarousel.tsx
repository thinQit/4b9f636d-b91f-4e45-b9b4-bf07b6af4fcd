'use client'

import { useState } from 'react'
import { Star } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface Testimonial {
  name: string
  location: string
  quote: string
  rating: number
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
}

export default function TestimonialsCarousel({
  testimonials = [
    { name: 'Ava M.', location: 'Austin, TX', quote: 'Fast shipping and quality exceeded expectations.', rating: 5 },
    { name: 'Jordan K.', location: 'Portland, OR', quote: 'The fit guide was accurate. Love my order.', rating: 5 },
    { name: 'Nina R.', location: 'Miami, FL', quote: 'Great support and easy returns process.', rating: 4 },
  ],
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)
  const current = testimonials[index] || testimonials[0]

  return (
    <Card className="rounded-2xl border p-6">
      <div className="mb-3 flex gap-1">
        {Array.from({ length: current.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current text-amber-500" />)}
      </div>
      <p className="text-lg">“{current.quote}”</p>
      <p className="mt-3 text-sm text-muted-foreground">{current.name} · {current.location}</p>
      <div className="mt-5 flex gap-2">
        <Button variant="outline" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>Prev</Button>
        <Button variant="outline" onClick={() => setIndex((index + 1) % testimonials.length)}>Next</Button>
      </div>
    </Card>
  )
}

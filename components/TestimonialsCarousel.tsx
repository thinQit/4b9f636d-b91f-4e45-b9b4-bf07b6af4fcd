'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface Testimonial {
  id: string
  name: string
  location: string
  quote: string
  rating: number
}

interface TestimonialsCarouselProps {
  testimonials?: Testimonial[]
  className?: string
}

export default function TestimonialsCarousel({
  testimonials = [
    { id: '1', name: 'Maya T.', location: 'Austin, TX', quote: 'The quality is consistently excellent and shipping is always fast.', rating: 5 },
    { id: '2', name: 'Jordan P.', location: 'Seattle, WA', quote: 'Best everyday basics I have purchased in years. True to size and durable.', rating: 5 },
    { id: '3', name: 'Elena R.', location: 'Chicago, IL', quote: 'Great customer support and easy returns. I shop here every season.', rating: 4 },
  ],
  className = '',
}: Partial<TestimonialsCarouselProps>) {
  const [index, setIndex] = useState(0)
  const item = testimonials[index] || testimonials[0]

  return (
    <section className={cn('py-20 md:py-28', className)}>
      <div className="mx-auto max-w-3xl px-4">
        <Card className="rounded-xl border bg-white p-8 text-center shadow-sm">
          <div className="mb-4 flex justify-center gap-1">
            {Array.from({ length: item?.rating || 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-lg leading-relaxed text-[#1A1A2E]">“{item?.quote || ''}”</p>
          <p className="mt-5 text-sm font-semibold text-[#1A1A2E]">{item?.name || ''}</p>
          <p className="text-sm text-muted-foreground">{item?.location || ''}</p>
        </Card>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={() => setIndex((index + 1) % testimonials.length)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

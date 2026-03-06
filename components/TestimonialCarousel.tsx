'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Testimonial {
  quote: string
  name: string
  role: string
  rating: number
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay: boolean
  intervalMs: number
}

export default function TestimonialCarousel({
  testimonials = [
    { quote: 'Excellent design system and smooth execution.', name: 'Aarav Singh', role: 'Founder, SaaSFlow', rating: 5 },
    { quote: 'Our conversion rate improved significantly after launch.', name: 'Maya Patel', role: 'Head of Growth', rating: 5 },
    { quote: 'Professional communication and clean implementation.', name: 'Rohan Mehta', role: 'Product Lead', rating: 5 },
  ],
  autoplay = true,
  intervalMs = 4500,
}: Partial<TestimonialCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!autoplay) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, intervalMs)
    return () => clearInterval(timer)
  }, [autoplay, intervalMs, testimonials.length])

  const current = testimonials[index] || testimonials[0]

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: current.rating }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-lg text-[#1A1A2E]">"{current.quote}"</p>
      <p className="mt-4 font-semibold text-slate-800">{current.name}</p>
      <p className="text-sm text-slate-500">{current.role}</p>
      <div className="mt-5 flex gap-2">
        <Button variant="outline" size="icon" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => setIndex((index + 1) % testimonials.length)}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

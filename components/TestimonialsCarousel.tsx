'use client'

import React from 'react'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'

interface TestimonialsCarouselProps {
  items?: { quote: string; name: string; designation: string; src: string }[]
}

export default function TestimonialsCarousel({
  items = [
    {
      quote: 'My order arrived in two days and quality was fantastic.',
      name: 'Amanda R.',
      designation: 'Verified Buyer',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
    },
    {
      quote: 'Checkout was seamless and customer support was super helpful.',
      name: 'David K.',
      designation: 'Returning Customer',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
    },
    {
      quote: 'Best product selection and fair prices. Highly recommended.',
      name: 'Priya N.',
      designation: 'Frequent Shopper',
      src: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_800,h_800,g_auto/v1/site-images/corporate/default.jpg',
    },
  ],
}: Partial<TestimonialsCarouselProps>) {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="mb-8 text-2xl font-bold text-[#1A1A2E] md:text-3xl">What Customers Say</h2>
        <AnimatedTestimonials testimonials={items} />
      </div>
    </section>
  )
}

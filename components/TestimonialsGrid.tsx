"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  rating?: number;
}

interface TestimonialsGridProps {
  headline: string;
  subheadline?: string;
  testimonials: Testimonial[];
}

export default function TestimonialsGrid({
  headline = 'Loved by Thousands of Happy Shoppers',
  subheadline = 'Real feedback from customers who trust us for quality and convenience.',
  testimonials = [
    {
      quote: 'Fast shipping, amazing quality, and super easy checkout. This is now my go-to store.',
      name: 'Ava Thompson',
      title: 'Verified Buyer',
      avatarUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
      rating: 5,
    },
    {
      quote: 'The product looked exactly like the photos. Great value and excellent customer support.',
      name: 'Noah Martinez',
      title: 'Repeat Customer',
      avatarUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
      rating: 5,
    },
    {
      quote: 'I found everything I needed in one place. Smooth experience from browsing to delivery.',
      name: 'Sophia Lee',
      title: 'First-Time Shopper',
      avatarUrl: 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1000,h_750,g_auto/v1/site-images/corporate/default.jpg',
      rating: 4,
    },
  ],
}: Partial<TestimonialsGridProps>) {
  return (
    <section className="py-20 md:py-28" id="testimonials">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(function (t, i) {
            var initials = t.name
              .split(' ')
              .map(function (n) {
                return n[0];
              })
              .join('');
            return (
              <Card key={i} className="border bg-background">
                <CardContent className="p-6">
                  {t.rating && (
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: t.rating }).map(function (_, j) {
                        return (
                          <span key={j} className="text-yellow-500">
                            &#9733;
                          </span>
                        );
                      })}
                    </div>
                  )}
                  <p className="italic text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar>
                      {t.avatarUrl ? <AvatarImage src={t.avatarUrl} alt={t.name} /> : null}
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

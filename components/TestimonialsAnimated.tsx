"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  title?: string;
  headline?: string;
  subtitle?: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

export default function TestimonialsAnimated({
  title,
  headline,
  subtitle,
  subheadline,
  testimonials = [],
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  // Prefer title, then headline for heading; subtitle, then subheadline for sub.
  const resolvedTitle = title ?? headline ?? "Loved by Shoppers Nationwide";
  const resolvedSub = subtitle ?? subheadline ?? "Real stories from customers who trust us for quality and convenience.";
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{resolvedTitle}</h2>
          {resolvedSub && <p className="mt-4 text-lg text-muted-foreground">{resolvedSub}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}

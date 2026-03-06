'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface NewsletterFormProps {
  title?: string
  incentiveText?: string
  privacyHref?: string
  className?: string
}

export default function NewsletterForm({
  title = 'Get 15% Off Your First Order',
  incentiveText = 'Join our newsletter for product drops, exclusive offers, and styling tips.',
  privacyHref = '/privacy',
  className = '',
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')

  return (
    <section className={cn('py-16', className)}>
      <div className="mx-auto max-w-3xl rounded-2xl border bg-muted/40 px-6 py-10 text-center md:px-10">
        <Mail className="mx-auto h-6 w-6 text-[#E63946]" />
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#1A1A2E]">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{incentiveText}</p>

        <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" />
          <Button type="submit" className="bg-[#E63946] hover:bg-[#d83240]">
            Subscribe
          </Button>
        </form>

        <p className="mt-3 text-xs text-muted-foreground">
          By subscribing, you agree to our{' '}
          <Link href={privacyHref} className="underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

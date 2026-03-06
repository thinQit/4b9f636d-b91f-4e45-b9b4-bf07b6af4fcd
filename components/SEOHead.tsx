"use client";

import Head from 'next/head'

interface SEOHeadProps {
  title: string
  description: string
  ogImage: string
  url: string
  jsonLd: Record<string, unknown>
}

export default function SEOHead({
  title = 'Parv Studio | Portfolio + Store',
  description = 'Modern portfolio marketing website with projects, skills, testimonials, contact, and store.',
  ogImage = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  url = 'https://example.com',
  jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Parv',
    url: 'https://example.com',
  },
}: Partial<SEOHeadProps>) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}

"use client";

import React from 'react'
import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
  jsonLd?: Record<string, unknown>
}

export default function SEOHead({
  title = 'NovaMart | Premium Everyday Essentials',
  description = 'Shop trusted home, tech, and lifestyle products with fast shipping and secure checkout.',
  canonicalUrl = 'https://www.novamart.com',
  ogImage = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
  jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NovaMart',
    url: 'https://www.novamart.com',
  },
}: Partial<SEOHeadProps>) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}

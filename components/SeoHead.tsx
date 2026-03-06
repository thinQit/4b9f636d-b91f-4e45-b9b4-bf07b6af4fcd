"use client";

import Head from 'next/head'

interface SeoHeadProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
}

export default function SeoHead({
  title = 'NexaShop | Premium Everyday Essentials',
  description = 'Shop curated essentials with fast shipping, secure checkout, and easy returns.',
  canonicalUrl = 'https://www.nexashop.com',
  ogImage = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_675,g_auto/v1/site-images/corporate/default.jpg',
}: Partial<SeoHeadProps>) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
    </Head>
  )
}

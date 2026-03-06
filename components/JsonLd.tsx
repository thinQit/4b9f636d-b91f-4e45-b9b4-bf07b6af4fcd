"use client";

interface JsonLdProps {
  type?: 'Organization' | 'WebSite' | 'Product' | 'BreadcrumbList'
  data?: Record<string, unknown>
}

export default function JsonLd({
  type = 'Organization',
  data = {
    name: 'NexaShop',
    url: 'https://www.nexashop.com',
    logo: 'https://www.nexashop.com/logo.png',
  },
}: Partial<JsonLdProps>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

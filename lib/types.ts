export interface NavItem {
  label: string;
  href: string;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Product {
  sku: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  image: string;
  href: string;
  highlights?: string[];
}

export interface Category {
  name: string;
  href: string;
  description?: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  quote: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  topic: string;
  orderNumber?: string;
  message: string;
}

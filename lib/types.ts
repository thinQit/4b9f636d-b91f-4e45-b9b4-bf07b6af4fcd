export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  rating?: number;
  reviewCount?: number;
  category?: string;
  inStock?: boolean;
  image: string;
  badge?: string;
  highlights?: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface Category {
  name: string;
  href: string;
  description?: string;
  image?: string;
}

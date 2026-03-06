export interface NavItem {
  label: string;
  href: string;
}

export interface CTA {
  label: string;
  href: string;
}

export interface Product {
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  image: string;
  shortDescription?: string;
  highlights?: string[];
}

export interface Category {
  name: string;
  description: string;
  href: string;
  image: string;
}

export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  quote: string;
  product?: string;
  date?: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

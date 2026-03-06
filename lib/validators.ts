import { z } from "zod";

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(255),
  topic: z.enum([
    "Order status",
    "Returns & exchanges",
    "Product recommendation",
    "Wholesale inquiry",
    "Other",
  ]),
  orderNumber: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email().max(255),
});

export const productsQuerySchema = z.object({
  category: z.string().trim().min(1).max(100).optional(),
  minPrice: z.coerce.number().int().min(0).optional(),
  maxPrice: z.coerce.number().int().min(0).optional(),
  rating: z.coerce.number().min(0).max(5).optional(),
  inStock: z
    .string()
    .optional()
    .transform((value) => (value === undefined ? undefined : value === "true")),
  search: z.string().trim().min(1).max(120).optional(),
  sort: z.enum(["best", "new", "price-asc", "price-desc", "rating"]).optional(),
  limit: z.coerce.number().int().min(1).max(100).default(24),
  page: z.coerce.number().int().min(1).default(1),
});

export const productSlugSchema = z.object({
  slug: z.string().trim().min(1).max(200),
});

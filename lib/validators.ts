import { z } from "zod";

export const productsQuerySchema = z.object({
  search: z.string().trim().min(1).max(120).optional(),
  category: z.enum(["workspace", "travel", "wellness", "home"]).optional(),
  collection: z.string().trim().min(1).max(60).optional(),
  priceMin: z.coerce.number().min(0).optional(),
  priceMax: z.coerce.number().min(0).optional(),
  sort: z.enum(["featured", "best", "price_asc", "price_desc", "newest"]).optional(),
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(12),
});

export const slugParamsSchema = z.object({
  slug: z.string().trim().min(1).max(120),
});

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.email().max(255),
  topic: z.enum([
    "order status",
    "returns & exchanges",
    "product question",
    "bulk orders (10+)",
    "recommendations",
    "press & partnerships",
    "pickup",
    "tracking",
    "return",
    "other",
  ]),
  orderNumber: z.string().trim().max(60).optional().or(z.literal("")),
  message: z.string().trim().min(10).max(5000),
});

export const newsletterSchema = z.object({
  email: z.email().max(255),
  consentGiven: z.boolean().default(true),
  source: z.string().trim().max(100).optional(),
});

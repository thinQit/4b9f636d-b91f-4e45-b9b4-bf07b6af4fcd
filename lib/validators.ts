import { z } from "zod";

export const contactTopicEnum = z.enum([
  "Order status",
  "Returns",
  "Warranty",
  "Product question",
  "Wholesale",
  "UGC / Press",
  "Newsletter",
  "Shipping",
  "Privacy",
  "Review",
]);

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  topic: contactTopicEnum,
  orderNumber: z
    .string()
    .trim()
    .max(64, "Order number is too long")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
});

export const productsQuerySchema = z.object({
  category: z
    .string()
    .trim()
    .toLowerCase()
    .optional(),
  sort: z
    .enum(["best-sellers", "top-rated", "price-low", "price-high", "new"])
    .optional(),
  q: z.string().trim().toLowerCase().optional(),
  minPrice: z.coerce.number().min(0).optional(),
  maxPrice: z.coerce.number().min(0).optional(),
});

export const productSlugParamsSchema = z.object({
  slug: z.string().trim().min(1),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;
export type ProductsQueryInput = z.infer<typeof productsQuerySchema>;
export type ProductSlugParamsInput = z.infer<typeof productSlugParamsSchema>;

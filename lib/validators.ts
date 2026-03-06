import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(255),
  company: z.string().max(120).optional().or(z.literal("")),
  budget: z.enum(["$1k–$3k", "$3k–$7k", "$7k–$15k", "$15k+"]),
  message: z.string().min(20).max(5000),
  newsletter: z.boolean().optional().default(false),
});

export const productsQuerySchema = z.object({
  category: z.enum(["templates", "ui-kits", "starters", "animations"]).optional(),
  sort: z.enum(["newest", "price_asc", "price_desc", "rating_desc", "name_asc"]).optional(),
  q: z.string().min(1).max(100).optional(),
  featured: z
    .union([z.literal("true"), z.literal("false")])
    .optional()
    .transform((v) => (v ? v === "true" : undefined)),
});

export const testimonialsQuerySchema = z.object({
  featured: z
    .union([z.literal("true"), z.literal("false")])
    .optional()
    .transform((v) => (v ? v === "true" : undefined)),
  limit: z
    .string()
    .regex(/^\d+$/)
    .optional()
    .transform((v) => (v ? Number.parseInt(v, 10) : undefined)),
});

import { z } from "zod";

export const testimonialsQuerySchema = z.object({
  featured: z
    .preprocess((value) => {
      if (value === undefined || value === null || value === "") return undefined;
      if (value === "true") return true;
      if (value === "false") return false;
      return value;
    }, z.boolean().optional())
    .optional(),
  limit: z
    .preprocess((value) => {
      if (value === undefined || value === null || value === "") return undefined;
      if (typeof value === "string") {
        const parsed = Number.parseInt(value, 10);
        return Number.isNaN(parsed) ? value : parsed;
      }
      return value;
    }, z.number().int().positive().optional())
    .optional(),
});

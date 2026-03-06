import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productsQuerySchema } from "@/lib/validators";

const categoryMap: Record<string, "templates" | "ui_kits" | "starters" | "animations"> = {
  templates: "templates",
  "ui-kits": "ui_kits",
  starters: "starters",
  animations: "animations",
};

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const parsed = productsQuerySchema.safeParse({
      category: searchParams.get("category") ?? undefined,
      sort: searchParams.get("sort") ?? undefined,
      q: searchParams.get("q") ?? undefined,
      featured: searchParams.get("featured") ?? undefined,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { category, sort, q, featured } = parsed.data;

    const where: Prisma.ProductWhereInput = {
      isPublished: true,
      ...(category ? { category: categoryMap[category] } : {}),
      ...(typeof featured === "boolean" ? { isFeatured: featured } : {}),
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              { shortDescription: { contains: q, mode: "insensitive" } },
              { highlights: { hasSome: [q] } },
            ],
          }
        : {}),
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput[] =
      sort === "price_asc"
        ? [{ price: "asc" as const }]
        : sort === "price_desc"
        ? [{ price: "desc" as const }]
        : sort === "rating_desc"
        ? [{ rating: "desc" as const }, { reviewCount: "desc" as const }]
        : sort === "name_asc"
        ? [{ name: "asc" as const }]
        : [{ createdAt: "desc" as const }];

    const products = await db.product.findMany({
      where,
      orderBy,
    });

    return NextResponse.json({ data: products }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch products.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

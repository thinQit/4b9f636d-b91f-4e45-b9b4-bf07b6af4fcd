import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productsQuerySchema } from "@/lib/validators";

const categoryMap = {
  workspace: "WORKSPACE",
  travel: "TRAVEL",
  wellness: "WELLNESS",
  home: "HOME",
} as const;

export async function GET(request: NextRequest) {
  try {
    const queryObject = Object.fromEntries(request.nextUrl.searchParams.entries());
    const parsed = productsQuerySchema.safeParse(queryObject);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { search, category, collection, priceMin, priceMax, sort, page, limit } = parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
              { shortDescription: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
      ...(category ? { category: categoryMap[category] } : {}),
      ...(collection ? { collection: { equals: collection, mode: "insensitive" } } : {}),
      ...(priceMin !== undefined || priceMax !== undefined
        ? {
            price: {
              ...(priceMin !== undefined ? { gte: new Prisma.Decimal(priceMin) } : {}),
              ...(priceMax !== undefined ? { lte: new Prisma.Decimal(priceMax) } : {}),
            },
          }
        : {}),
    };

    const orderBy: Prisma.ProductOrderByWithRelationInput[] =
      sort === "best"
        ? [{ isBestSeller: "desc" as const }, { reviewCount: "desc" as const }]
        : sort === "price_asc"
        ? [{ price: "asc" as const }]
        : sort === "price_desc"
        ? [{ price: "desc" as const }]
        : sort === "newest"
        ? [{ createdAt: "desc" as const }]
        : [{ isFeatured: "desc" as const }, { createdAt: "desc" as const }];

    const skip = (page - 1) * limit;

    const [total, products] = await Promise.all([
      db.product.count({ where }),
      db.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          images: {
            orderBy: { position: "asc" as const },
            take: 1,
          },
          highlights: {
            orderBy: { position: "asc" as const },
          },
        },
      }),
    ]);

    return NextResponse.json({
      data: products,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
}

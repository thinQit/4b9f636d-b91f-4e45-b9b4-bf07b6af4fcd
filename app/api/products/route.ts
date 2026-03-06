import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productsQuerySchema } from "@/lib/validators";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const raw = Object.fromEntries(searchParams.entries());
    const parsed = productsQuerySchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query params", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { category, minPrice, maxPrice, rating, inStock, search, sort, limit, page } = parsed.data;

    const where: Prisma.ProductWhereInput = {
      ...(category ? { category } : {}),
      ...(typeof inStock === "boolean" ? { inStock } : {}),
      ...(typeof rating === "number" ? { rating: { gte: rating } } : {}),
      ...(typeof minPrice === "number" || typeof maxPrice === "number"
        ? {
            price: {
              ...(typeof minPrice === "number" ? { gte: minPrice } : {}),
              ...(typeof maxPrice === "number" ? { lte: maxPrice } : {}),
            },
          }
        : {}),
      ...(search
        ? {
            OR: [
              { name: { contains: search, mode: "insensitive" } },
              { slug: { contains: search, mode: "insensitive" } },
              { category: { contains: search, mode: "insensitive" } },
            ],
          }
        : {}),
    };

    const orderByMap = {
      best: [{ reviewCount: "desc" as const }, { rating: "desc" as const }],
      new: [{ createdAt: "desc" as const }],
      "price-asc": [{ price: "asc" as const }],
      "price-desc": [{ price: "desc" as const }],
      rating: [{ rating: "desc" as const }, { reviewCount: "desc" as const }],
    };

    const orderBy = orderByMap[sort ?? "best"];
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      db.product.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        select: {
          slug: true,
          name: true,
          price: true,
          compareAtPrice: true,
          rating: true,
          reviewCount: true,
          category: true,
          inStock: true,
          badge: true,
          image: true,
        },
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      items,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch {
    return NextResponse.json({ error: "Failed to fetch products." }, { status: 500 });
  }
}

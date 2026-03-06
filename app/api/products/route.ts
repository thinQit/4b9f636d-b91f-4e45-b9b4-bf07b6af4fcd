import { NextResponse } from "next/server";
import { products } from "@/lib/products";
import { productsQuerySchema } from "@/lib/validators";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const rawQuery = {
      category: searchParams.get("category") ?? undefined,
      sort: searchParams.get("sort") ?? undefined,
      q: searchParams.get("q") ?? undefined,
      minPrice: searchParams.get("minPrice") ?? undefined,
      maxPrice: searchParams.get("maxPrice") ?? undefined,
    };

    const parsed = productsQuerySchema.safeParse(rawQuery);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid query parameters",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { category, sort, q, minPrice, maxPrice } = parsed.data;
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (q) {
      filtered = filtered.filter((product) => {
        const haystack = `${product.name} ${product.description} ${product.highlights.join(" ")}`.toLowerCase();
        return haystack.includes(q);
      });
    }

    if (typeof minPrice === "number") {
      filtered = filtered.filter((product) => product.price >= minPrice);
    }

    if (typeof maxPrice === "number") {
      filtered = filtered.filter((product) => product.price <= maxPrice);
    }

    if (sort === "best-sellers") {
      filtered.sort((a, b) => Number(Boolean(b.isBestSeller)) - Number(Boolean(a.isBestSeller)));
    } else if (sort === "top-rated") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === "price-low") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sort === "price-high") {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sort === "new") {
      filtered.sort((a, b) => Number(Boolean(b.isNewArrival)) - Number(Boolean(a.isNewArrival)));
    }

    return NextResponse.json(
      {
        success: true,
        data: filtered.map((product) => ({
          sku: product.sku,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          compareAtPrice: product.compareAtPrice ?? null,
          rating: product.rating,
          reviewCount: product.reviewCount,
          badge: product.badge ?? null,
          image: product.image,
        })),
        total: filtered.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

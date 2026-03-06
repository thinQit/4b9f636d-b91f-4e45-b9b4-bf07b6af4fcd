import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { slugParamsSchema } from "@/lib/validators";

export async function GET(_request: NextRequest, context: { params: Promise<{ slug: string }> }) {
  try {
    const params = await context.params;
    const parsedParams = slugParamsSchema.safeParse(params);

    if (!parsedParams.success) {
      return NextResponse.json(
        { error: "Invalid slug", details: parsedParams.error.flatten() },
        { status: 400 }
      );
    }

    const { slug } = parsedParams.data;

    const product = await db.product.findUnique({
      where: { slug },
      include: {
        images: {
          orderBy: { position: "asc" as const },
        },
        variants: true,
        highlights: {
          orderBy: { position: "asc" as const },
        },
        relatedFrom: {
          include: {
            relatedProduct: {
              include: {
                images: {
                  orderBy: { position: "asc" as const },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({
      data: {
        ...product,
        relatedProducts: product.relatedFrom.map((rp) => rp.relatedProduct),
      },
    });
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
}

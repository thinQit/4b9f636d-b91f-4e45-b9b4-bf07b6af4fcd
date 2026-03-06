import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { productSlugSchema } from "@/lib/validators";

export async function GET(_: Request, context: { params: { slug: string } }) {
  try {
    const parsed = productSlugSchema.safeParse(context.params);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid slug", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { slug } = parsed.data;

    const product = await db.product.findUnique({
      where: { slug },
      include: {
        images: {
          orderBy: { position: "asc" as const },
          select: { src: true, alt: true, position: true },
        },
        specs: {
          orderBy: { position: "asc" as const },
          select: { label: true, value: true, position: true },
        },
        testimonials: {
          orderBy: { createdAt: "desc" as const },
          take: 10,
          select: {
            name: true,
            location: true,
            rating: true,
            quote: true,
            createdAt: true,
          },
        },
      },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found." }, { status: 404 });
    }

    return NextResponse.json({ item: product });
  } catch {
    return NextResponse.json({ error: "Failed to fetch product." }, { status: 500 });
  }
}

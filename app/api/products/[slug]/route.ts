import { NextResponse } from "next/server";
import { products } from "@/lib/products";
import { productSlugParamsSchema } from "@/lib/validators";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const params = await context.params;
    const parsed = productSlugParamsSchema.safeParse(params);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid product slug",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { slug } = parsed.data;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: "Product not found",
        },
        { status: 404 }
      );
    }

    const relatedProducts = products
      .filter((item) => product.relatedSlugs.includes(item.slug))
      .map((item) => ({
        sku: item.sku,
        slug: item.slug,
        name: item.name,
        price: item.price,
        image: item.image,
      }));

    return NextResponse.json(
      {
        success: true,
        data: {
          ...product,
          relatedProducts,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/products/[slug] error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

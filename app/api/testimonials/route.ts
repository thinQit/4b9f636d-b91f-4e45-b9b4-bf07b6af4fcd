import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { testimonialsQuerySchema } from "@/lib/validators";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const parsed = testimonialsQuerySchema.safeParse({
      featured: searchParams.get("featured") ?? undefined,
      limit: searchParams.get("limit") ?? undefined,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid query parameters", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { featured, limit } = parsed.data;

    const testimonials = await db.testimonial.findMany({
      where: typeof featured === "boolean" ? { featured } : undefined,
      orderBy: [{ createdAt: "desc" as const }],
      take: limit && limit > 0 ? Math.min(limit, 50) : undefined,
    });

    return NextResponse.json({ data: testimonials }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to fetch testimonials.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

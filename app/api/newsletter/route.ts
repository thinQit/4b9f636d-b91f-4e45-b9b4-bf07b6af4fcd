import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { newsletterSchema } from "@/lib/validators";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = newsletterSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { email } = parsed.data;

    const subscription = await db.newsletterSubscription.upsert({
      where: { email },
      update: { status: "subscribed" },
      create: { email, status: "subscribed" },
    });

    return NextResponse.json(
      { success: true, id: subscription.id, status: subscription.status },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter." },
      { status: 500 }
    );
  }
}

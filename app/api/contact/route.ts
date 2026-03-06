import { ContactTopic } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSubmissionSchema } from "@/lib/validators";

const topicMap: Record<string, ContactTopic> = {
  "order status": "ORDER_STATUS",
  "returns & exchanges": "RETURNS_EXCHANGES",
  "product question": "PRODUCT_QUESTION",
  "bulk orders (10+)": "BULK_ORDERS",
  recommendations: "RECOMMENDATIONS",
  "press & partnerships": "PRESS_PARTNERSHIPS",
  pickup: "PICKUP",
  tracking: "TRACKING",
  return: "RETURN_REQUEST",
  other: "OTHER",
};

async function sendContactNotification(input: {
  name: string;
  email: string;
  topic: string;
  orderNumber?: string;
  message: string;
}) {
  const webhookUrl = process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;
  if (!webhookUrl) return;

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, topic, orderNumber, message } = parsed.data;

    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        topic: topicMap[topic] ?? "OTHER",
        orderNumber: orderNumber || null,
        message,
      },
    });

    await sendContactNotification({
      name,
      email,
      topic,
      orderNumber: orderNumber || undefined,
      message,
    });

    return NextResponse.json({ success: true, id: submission.id }, { status: 201 });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}

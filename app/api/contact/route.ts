import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactSubmissionSchema } from "@/lib/validators";

async function sendContactNotificationEmail(payload: {
  name: string;
  email: string;
  topic: string;
  orderNumber?: string;
  message: string;
}) {
  const webhook = process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;
  if (!webhook) return;

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      subject: `New contact submission: ${payload.topic}`,
      from: payload.email,
      name: payload.name,
      orderNumber: payload.orderNumber || null,
      message: payload.message,
    }),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, topic, orderNumber, message } = parsed.data;

    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        topic,
        orderNumber: orderNumber || null,
        message,
      },
    });

    try {
      await sendContactNotificationEmail({
        name,
        email,
        topic,
        orderNumber: orderNumber || undefined,
        message,
      });
    } catch {
      // Non-fatal notification failure
    }

    return NextResponse.json(
      { success: true, id: submission.id, message: "Submission received." },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to submit contact form." },
      { status: 500 }
    );
  }
}

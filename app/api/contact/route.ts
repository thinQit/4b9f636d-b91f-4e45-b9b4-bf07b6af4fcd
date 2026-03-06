import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { assertServerEnv } from "@/lib/auth";
import { contactSchema } from "@/lib/validators";

async function sendContactNotificationEmail(input: {
  name: string;
  email: string;
  company?: string | null;
  budget: string;
  message: string;
  newsletter: boolean;
}) {
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;

  if (!webhookUrl && !notifyEmail) {
    return;
  }

  if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: notifyEmail ?? "owner",
        subject: `New inquiry from ${input.name}`,
        replyTo: input.email,
        payload: input,
      }),
    });
  }
}

export async function POST(req: Request) {
  try {
    assertServerEnv();

    const json = await req.json();
    const parsed = contactSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid request body", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const inquiry = await db.inquiry.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        company: parsed.data.company || null,
        budget: parsed.data.budget,
        message: parsed.data.message,
        newsletter: parsed.data.newsletter ?? false,
      },
    });

    try {
      await sendContactNotificationEmail({
        name: inquiry.name,
        email: inquiry.email,
        company: inquiry.company,
        budget: inquiry.budget,
        message: inquiry.message,
        newsletter: inquiry.newsletter,
      });
    } catch {
      // notification failure should not block successful inquiry creation
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
        data: { id: inquiry.id, createdAt: inquiry.createdAt },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to submit inquiry.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

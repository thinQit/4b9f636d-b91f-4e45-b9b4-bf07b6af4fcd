import { NextResponse } from "next/server";
import { contactSubmissionSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSubmissionSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid input",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { name, email, topic, orderNumber, message } = parsed.data;

    const resendApiKey = process.env.RESEND_API_KEY;
    const supportEmail = process.env.SUPPORT_EMAIL || "support@neoncart.co";

    if (resendApiKey) {
      const emailPayload = {
        from: process.env.RESEND_FROM_EMAIL || "NeonCart <no-reply@neoncart.co>",
        to: [supportEmail],
        subject: `[Contact] ${topic} - ${name}`,
        reply_to: email,
        text: `New contact form submission

Name: ${name}
Email: ${email}
Topic: ${topic}
Order Number: ${orderNumber || "N/A"}

Message:
${message}
`,
      };

      const sendResult = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (!sendResult.ok) {
        const errorText = await sendResult.text();
        return NextResponse.json(
          {
            success: false,
            error: "Failed to deliver message",
            providerError: errorText,
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}

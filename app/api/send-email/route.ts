import { NextResponse } from "next/server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { senderEmail, message } = formData;

    // Validate input
    if (!validateString(senderEmail, 500)) {
      return NextResponse.json({ error: "Invalid sender email" }, { status: 400 });
    }
    if (!validateString(message, 5000)) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "lucasppmc@gmail.com",
      subject: "Message from Portfolio website",
      replyTo: senderEmail,
      react: ContactFormEmail({ message, senderEmail }),
    });

    return NextResponse.json({ data });
  } catch (error: unknown) {
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}
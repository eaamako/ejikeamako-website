import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, subject, message, honey } = await req.json();

    // SPAM PROTECTION — Honeypot field
    if (honey && honey.trim() !== "") {
      return NextResponse.json(
        { message: "Spam detected" },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!email || !subject || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error: resendError } = await resend.emails.send({
      from: "Resume Request <onboarding@resend.dev>", // You'll change this after verifying your domain
      replyTo: email,
      to: "alex.amako@outlook.com",
      subject: subject || "Resume / CV Request",
      html: `
        <h3>New Resume Request</h3>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (resendError) {
      console.error("Resend error:", resendError);
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}

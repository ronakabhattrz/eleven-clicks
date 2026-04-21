import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hello@elevenclicks.com";

  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.log("Contact form submission (no RESEND_API_KEY configured):", {
        name, email, phone, service, budget, message,
      });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "ElevenClicks Contact <noreply@elevenclicks.com>",
      to: [TO_EMAIL],
      reply_to: email,
      subject: `New Inquiry from ${name} — ${service ?? "General"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F8EF7;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #666; width: 120px;">Name</td><td style="padding: 8px 0;"><strong>${name}</strong></td></tr>
            <tr><td style="padding: 8px 0; color: #666;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #666;">Phone</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            ${service ? `<tr><td style="padding: 8px 0; color: #666;">Service</td><td style="padding: 8px 0;">${service}</td></tr>` : ""}
            ${budget ? `<tr><td style="padding: 8px 0; color: #666;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
          </table>
          <hr style="margin: 16px 0; border-color: #eee;" />
          <h3 style="color: #333;">Message</h3>
          <p style="color: #555; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          <hr style="margin: 16px 0; border-color: #eee;" />
          <p style="font-size: 12px; color: #999;">Sent via elevenclicks.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

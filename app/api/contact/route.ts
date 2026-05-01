import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, phone, message } = await req.json();

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL ?? "melosnutrition@gmail.com";

  const { error } = await resend.emails.send({
    from: "Melos Contact Form <onboarding@resend.dev>",
    to: [to],
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New inquiry from the Melos website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

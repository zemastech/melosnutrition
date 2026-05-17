import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { name, phone, message } = await req.json();

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Melos Website <noreply@melosnutrition.com>",
    to: ["melosnutritionet@gmail.com"],
    subject: `New inquiry from ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <h2 style="color: #2D4A3E; margin-bottom: 24px;">New Inquiry from the Melos Website</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px; color: #555;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #eee;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 12px 16px 12px 0; font-weight: bold; color: #555; vertical-align: top;">Message</td>
            <td style="padding: 12px 0;">${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
        <p style="margin-top: 32px; font-size: 12px; color: #999;">Sent from the Melos Nutritional Consultancy website contact form.</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

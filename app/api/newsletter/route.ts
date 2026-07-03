import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "info@bvcyberguardian.com",
      subject: "New Newsletter Signup",
      text: `A new visitor subscribed to the BV CyberGuardian newsletter.\n\nEmail: ${email}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Newsletter] Email error:", err);
    return NextResponse.json({ error: "Could not save your subscription. Please try again." }, { status: 500 });
  }
}

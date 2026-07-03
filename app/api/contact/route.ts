import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
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
      replyTo: email,
      subject: `New Contact Request: ${name}${service ? ` — ${service}` : ""}`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "—"}`,
        `Company: ${company || "—"}`,
        `Service: ${service || "—"}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[Contact] Email error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

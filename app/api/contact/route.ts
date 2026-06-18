import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, message } = body;

    if (!name || !email || !message) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log to console (replace with email service like Resend, SendGrid, or Nodemailer in production)
    console.log("Contact form submission:", { name, email, company, phone, service, message });

    // TODO: Add email sending here. Recommended: https://resend.com (free up to 3000 emails/mo)
    // Example:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "website@bvcyberguardian.com",
    //   to: "info@bvcyberguardian.com",
    //   subject: `New contact: ${name} — ${service || "General Inquiry"}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\nService: ${service}\n\n${message}`,
    // });

    return Response.json({ success: true });
  } catch {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}

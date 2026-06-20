import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    // TODO: wire up to an email service (Resend, Mailchimp, ConvertKit, etc.)
    // For now, log the subscriber so you can manually collect them
    console.log(`[Newsletter] New subscriber: ${email} at ${new Date().toISOString()}`);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

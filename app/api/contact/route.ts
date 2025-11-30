import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const turnstileVerifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

async function validateTurnstile(token: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!token) {
    return { success: false, message: "Turnstile token missing." };
  }

  if (!secret) {
    return { success: false, message: "Turnstile secret is not configured." };
  }

  const response = await fetch(turnstileVerifyUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });

  const verification = await response.json();

  if (!verification.success) {
    return { success: false, message: "Turnstile verification failed." };
  }

  return { success: true };
}

async function sendEmail(body: {
  name?: string | null;
  email?: string | null;
  company?: string | null;
  role?: string | null;
  message?: string | null;
  briefing?: boolean;
}) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = process.env.SMTP_SECURE === "true";
  const from = process.env.CONTACT_FROM || user || "no-reply@hackstle.com";
  const to = "david@hackstle.com";

  if (!host || !user || !pass) {
    throw new Error("SMTP credentials are not fully configured.");
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const subject = `New Hackstle contact request${body.name ? ` from ${body.name}` : ""}`;
  const briefingLine = body.briefing ? "Requested briefing: Yes" : "Requested briefing: No";

  await transporter.sendMail({
    from,
    to,
    subject,
    text: `Name: ${body.name || "N/A"}
Email: ${body.email || "N/A"}
Company: ${body.company || "N/A"}
Role: ${body.role || "N/A"}
${briefingLine}

Message:
${body.message || "N/A"}
`,
  });
}

export async function POST(request: NextRequest) {
  const payload = await request.json();

  const { turnstileToken, ...body } = payload;

  const verification = await validateTurnstile(turnstileToken);

  if (!verification.success) {
    return NextResponse.json({ error: verification.message }, { status: 422 });
  }

  try {
    await sendEmail(body);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to send email." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

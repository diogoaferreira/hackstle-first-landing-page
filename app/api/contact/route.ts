import { NextRequest, NextResponse } from "next/server";

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

async function sendToDiscord(body: {
  name?: string | null;
  email?: string | null;
  company?: string | null;
  role?: string | null;
  message?: string | null;
  briefing?: boolean;
}) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("Discord webhook URL is not configured.");
  }

  const fields = [
    { name: "Name", value: body.name || "N/A", inline: true },
    { name: "Email", value: body.email || "N/A", inline: true },
    { name: "Company", value: body.company || "N/A", inline: true },
    { name: "Role", value: body.role || "N/A", inline: true },
    { name: "Briefing", value: body.briefing ? "Yes" : "No", inline: true },
    { name: "Message", value: body.message || "N/A" },
  ];

  const payload = {
    content: "📨 New Hackstle contact submission",
    embeds: [
      {
        title: `Contact request${body.name ? ` from ${body.name}` : ""}`,
        description: "Turnstile-validated submission from the Hackstle site.",
        fields,
        timestamp: new Date().toISOString(),
        color: 0x8c52ff,
      },
    ],
    allowed_mentions: { parse: [] },
  };

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to deliver contact request to Discord webhook.");
  }
}

export async function POST(request: NextRequest) {
  const payload = await request.json();

  const { turnstileToken, ...body } = payload;

  const verification = await validateTurnstile(turnstileToken);

  if (!verification.success) {
    return NextResponse.json({ error: verification.message }, { status: 422 });
  }

  try {
    await sendToDiscord(body);
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to deliver your contact request at this time.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

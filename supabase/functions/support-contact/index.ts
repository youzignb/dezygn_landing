// support-contact — receives the dezygn.com help-center contact form and
// forwards it to support@youzign.com via Resend. Same stack and conventions
// as lead-magnet-capture (project vpklpenoffkvztqosbds, RESEND_API_KEY secret).
//
// Deploy (verify_jwt false, like lead-magnet-capture):
//   supabase functions deploy support-contact --project-ref vpklpenoffkvztqosbds --no-verify-jwt
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const SUPPORT_INBOX = "support@youzign.com";

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SupportContactRequest {
  email: string;
  subject?: string;
  message: string;
  page?: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: CORS_HEADERS });
  }

  if (req.method !== "POST") {
    return new Response("Method not allowed", {
      status: 405,
      headers: CORS_HEADERS,
    });
  }

  try {
    const { email, subject, message, page }: SupportContactRequest =
      await req.json();

    if (!email || !message) {
      return new Response(
        JSON.stringify({ error: "Email and message are required" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    // Basic abuse guards
    if (message.length > 10000 || (subject ?? "").length > 300) {
      return new Response(
        JSON.stringify({ error: "Message too long" }),
        { status: 400, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
      );
    }

    console.log(`Support contact from ${email} (page: ${page || "unknown"})`);

    const safeSubject = subject?.trim()
      ? subject.trim()
      : "Support request from dezygn.com";

    const html = `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #1a1a1a; line-height: 1.7;">
      <p><strong>New support request from dezygn.com</strong></p>
      <table style="font-size: 14px; color: #1a1a1a;">
        <tr><td style="padding: 2px 12px 2px 0; color: #666;">From</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="padding: 2px 12px 2px 0; color: #666;">Subject</td><td>${escapeHtml(safeSubject)}</td></tr>
        <tr><td style="padding: 2px 12px 2px 0; color: #666;">Page</td><td>${escapeHtml(page || "-")}</td></tr>
      </table>
      <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: '"Dezygn Support Form" <bertrand@dezygn.com>',
        to: [SUPPORT_INBOX],
        subject: `[Dezygn support] ${safeSubject}`,
        html,
        reply_to: email,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend API error:", data);
      throw new Error(`Resend API error: ${JSON.stringify(data)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Support request sent" }),
      { status: 200, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Support contact error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send support request" }),
      { status: 500, headers: { ...CORS_HEADERS, "Content-Type": "application/json" } }
    );
  }
});

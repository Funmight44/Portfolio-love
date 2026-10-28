import { createFileRoute } from "@tanstack/react-router";

const CONTACT_FIELDS = ["name", "email", "service", "subject", "message"] as const;
type ContactField = (typeof CONTACT_FIELDS)[number];

function jsonResult(result: { ok: boolean; error?: string }, status = 200): Response {
  return Response.json(result, { status });
}

function validateContactData(value: unknown): Record<ContactField, string> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;

  const input = value as Record<string, unknown>;
  const data = {} as Record<ContactField, string>;
  for (const field of CONTACT_FIELDS) {
    if (typeof input[field] !== "string") return null;
    data[field] = input[field].trim();
    if (data[field].length > 5000) return null;
  }

  if (!data.name || !data.service || !data.subject || data.message.length < 10) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email)) return null;
  return data;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return jsonResult({ ok: false, error: "Please check the form and try again." }, 400);
        }

        const data = validateContactData(body);
        if (!data) {
          return jsonResult({ ok: false, error: "Please check the form and try again." }, 400);
        }

        const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
        if (!accessKey) {
          return jsonResult({
            ok: false,
            error: "This form isn't connected yet. Please reach out through the contact details instead.",
          }, 503);
        }

        try {
          const upstream = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: accessKey,
              name: data.name,
              email: data.email,
              message: data.message,
              service: data.service,
              from_name: "Portfolio contact form",
              subject: data.subject ? `Portfolio: ${data.subject}` : "New portfolio message",
            }),
          });
          const result = (await upstream.json().catch(() => null)) as {
            success?: boolean;
            message?: string;
            body?: { message?: string };
          } | null;
          const providerMessage = result?.body?.message || result?.message;
          const safeMessage = providerMessage
            ?.replaceAll(accessKey, "[redacted]")
            .replace(/[\r\n\t]+/g, " ")
            .slice(0, 240);
          if (!upstream.ok || !result?.success) {
            if (upstream.status === 403) {
              return jsonResult({
                ok: false,
                error: `Web3Forms rejected the server-side request (HTTP 403)${safeMessage ? `: ${safeMessage}` : ""}. Its current policy requires an active paid plan and the server IP to be allowlisted. Contact Web3Forms support to confirm server-side access for this deployment.`,
              }, 502);
            }

            return jsonResult({
              ok: false,
              error: safeMessage
                ? `Web3Forms rejected the submission (HTTP ${upstream.status}): ${safeMessage}`
                : `Web3Forms returned an unsuccessful response (HTTP ${upstream.status}). Please try again or contact support.`,
            }, 502);
          }
          return jsonResult({ ok: true });
        } catch {
          return jsonResult({ ok: false, error: "The server could not reach Web3Forms. Please try again later." }, 502);
        }
      },
    },
  },
});

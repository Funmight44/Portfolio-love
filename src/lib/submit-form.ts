/**
 * Sends form data as JSON to an endpoint (e.g. Formspree, Getform, your own API).
 * Used by the Consultation form with VITE_CONSULTATION_WEBHOOK_URL.
 */
export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitForm(
  endpoint: string | undefined,
  data: Record<string, string>,
): Promise<SubmitResult> {
  if (!endpoint) {
    return {
      ok: false,
      error: "This form isn't connected yet. Please reach out through the contact details instead.",
    };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) return { ok: false, error: "Something went wrong sending your message. Please try again." };
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Check your connection and try again." };
  }
}

/** Sends contact details directly to Web3Forms using its public client access key. */
export async function submitContactForm(data: Record<string, string>): Promise<SubmitResult> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;
  if (!accessKey?.trim()) {
    return {
      ok: false,
      error: "This form isn't connected yet. Please reach out through the contact details instead.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey.trim(),
        name: data.name,
        email: data.email,
        message: data.message,
        service: data.service,
        from_name: "Portfolio contact form",
        subject: data.subject ? `Portfolio: ${data.subject}` : "New portfolio message",
      }),
    });
    const result = (await res.json().catch(() => null)) as {
      success?: boolean;
      message?: string;
      body?: { message?: string };
    } | null;
    if (res.ok && result?.success === true) return { ok: true };

    return {
      ok: false,
      error:
        result?.body?.message ||
        result?.message ||
        `Web3Forms returned an unsuccessful response (HTTP ${res.status}). Please try again.`,
    };
  } catch {
    return { ok: false, error: "Could not reach Web3Forms. Check your connection and try again." };
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validate(
  values: Record<string, string>,
  rules: Record<string, { required?: string; email?: boolean; min?: number }>,
) {
  const errors: Record<string, string> = {};
  for (const [key, rule] of Object.entries(rules)) {
    const v = (values[key] ?? "").trim();
    if (rule.required && !v) errors[key] = rule.required;
    else if (rule.email && v && !EMAIL_RE.test(v)) errors[key] = "Please enter a valid email address.";
    else if (rule.min && v && v.length < rule.min) errors[key] = `Please enter at least ${rule.min} characters.`;
  }
  return errors;
}

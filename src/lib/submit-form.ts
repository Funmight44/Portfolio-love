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

/** Sends the Contact form through Web3Forms (https://web3forms.com). */
export async function submitWeb3Form(
  accessKey: string | undefined,
  data: Record<string, string>,
): Promise<SubmitResult> {
  if (!accessKey) {
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
        access_key: accessKey,
        from_name: "Portfolio contact form",
        ...data,
        subject: data["subject"] ? `Portfolio: ${data["subject"]}` : "New portfolio message",
      }),
    });
    const json = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
    if (!res.ok || !json.success) {
      return { ok: false, error: json.message || "Something went wrong sending your message. Please try again." };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Check your connection and try again." };
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

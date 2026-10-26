import type { ReactNode } from "react";

export function FormField({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  optional?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {optional && <span className="text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function FormStatus({ status, error }: { status: "idle" | "sending" | "success" | "error"; error?: string | undefined }) {
  if (status === "success")
    return (
      <p role="status" className="rounded-xl border border-success/40 bg-success/10 p-4 text-sm text-success">
        Thank you — your message has been sent. I'll get back to you soon.
      </p>
    );
  if (status === "error")
    return (
      <p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
        {error}
      </p>
    );
  return null;
}

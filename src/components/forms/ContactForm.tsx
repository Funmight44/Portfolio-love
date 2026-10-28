import { Send } from "lucide-react";
import { serviceOptions } from "@/data/services";
import { FormField, FormStatus } from "./FormField";
import { useSimpleForm } from "./useForm";
import { submitWeb3Form } from "@/lib/submit-form";

export function ContactForm() {
  const { errors, status, submitError, onSubmit, fieldProps } = useSimpleForm(
    { name: "", email: "", service: "", subject: "", message: "" },
    {
      name: { required: "Please enter your name." },
      email: { required: "Please enter your email.", email: true },
      service: { required: "Please choose a service." },
      subject: { required: "Please add a subject." },
      message: { required: "Please write a message.", min: 10 },
    },
    (data) => submitWeb3Form(import.meta.env["WEB3FORMS_ACCESS_KEY"], data),
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Name" error={errors.name}>
          <input {...fieldProps("name")} autoComplete="name" placeholder="Your full name" />
        </FormField>
        <FormField id="email" label="Email" error={errors.email}>
          <input {...fieldProps("email")} type="email" autoComplete="email" placeholder="you@example.com" />
        </FormField>
      </div>
      <FormField id="service" label="Service of interest" error={errors.service}>
        <select {...fieldProps("service")}>
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </FormField>
      <FormField id="subject" label="Subject" error={errors.subject}>
        <input {...fieldProps("subject")} placeholder="What's this about?" />
      </FormField>
      <FormField id="message" label="Message" error={errors.message}>
        <textarea {...fieldProps("message")} rows={6} placeholder="Tell me about your project or question" />
      </FormField>
      <FormStatus status={status} error={submitError} />
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"} <Send size={16} />
      </button>
    </form>
  );
}

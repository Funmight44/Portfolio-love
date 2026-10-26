import { CalendarCheck } from "lucide-react";
import { serviceOptions } from "@/data/services";
import { FormField, FormStatus } from "./FormField";
import { useSimpleForm } from "./useForm";
import { submitForm } from "@/lib/submit-form";

export function ConsultationForm() {
  const { errors, status, submitError, onSubmit, fieldProps } = useSimpleForm(
    { fullName: "", email: "", service: "", challenge: "", timeframe: "", additional: "" },
    {
      fullName: { required: "Please enter your full name." },
      email: { required: "Please enter your email.", email: true },
      service: { required: "Please choose the service you need." },
      challenge: { required: "Please describe your project or challenge.", min: 20 },
    },
    (data) => submitForm(import.meta.env["VITE_CONSULTATION_WEBHOOK_URL"], data),
  );

  return (
    <form onSubmit={onSubmit} noValidate className="card-surface space-y-5 p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="fullName" label="Full name" error={errors.fullName}>
          <input {...fieldProps("fullName")} autoComplete="name" />
        </FormField>
        <FormField id="email" label="Email address" error={errors.email}>
          <input {...fieldProps("email")} type="email" autoComplete="email" />
        </FormField>
      </div>
      <FormField id="service" label="Service required" error={errors.service}>
        <select {...fieldProps("service")}>
          <option value="">Select a service</option>
          {serviceOptions.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </FormField>
      <FormField id="challenge" label="Project or business challenge" error={errors.challenge}>
        <textarea {...fieldProps("challenge")} rows={5} placeholder="What are you trying to build or fix?" />
      </FormField>
      <FormField id="timeframe" label="Preferred date or timeframe" optional>
        <input {...fieldProps("timeframe")} placeholder="e.g. Next week, weekday afternoons" />
      </FormField>
      <FormField id="additional" label="Additional information" optional>
        <textarea {...fieldProps("additional")} rows={3} />
      </FormField>
      <FormStatus status={status} error={submitError} />
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request consultation"} <CalendarCheck size={16} />
      </button>
    </form>
  );
}

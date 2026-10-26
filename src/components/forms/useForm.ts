import { useState, type ChangeEvent, type FormEvent } from "react";
import { validate, type SubmitResult } from "@/lib/submit-form";

type Rules = Parameters<typeof validate>[1];

export function useSimpleForm<K extends string>(initial: Record<K, string>, rules: Partial<Record<K, Rules[string]>>, send: (data: Record<string, string>) => Promise<SubmitResult>) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<Partial<Record<K, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name as K;
    const value = e.target.value;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate(values, rules as Rules) as Partial<Record<K, string>>;
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus("idle");
      return;
    }
    setStatus("sending");
    const res = await send(values as Record<string, string>);
    if (res.ok) {
      setStatus("success");
      setValues(initial);
    } else {
      setStatus("error");
      setSubmitError(res.error);
    }
  };

  const fieldProps = (name: K) => ({
    id: name,
    name,
    value: values[name],
    onChange,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: "field",
  });

  return { values, errors, status, submitError, onSubmit, fieldProps };
}

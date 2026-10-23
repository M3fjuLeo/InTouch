"use client";

import React, { useState } from "react";
import { submitForm, type FormId } from "../../lib/forms";

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Record<string, string>;

export function useFormSubmission(
  formId: FormId,
  validate?: (data: FormData) => Errors
) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  // Zmiana klucza po wysłaniu czyści formularz razem ze stanem pól z plikami.
  const [formKey, setFormKey] = useState(0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const nextErrors = validate?.(data) ?? {};
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    try {
      await submitForm(formId, data);
      setFormKey((key) => key + 1);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return { status, errors, formKey, handleSubmit };
}

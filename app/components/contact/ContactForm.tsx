"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FormCard } from "../forms/FormCard";
import { TextAreaField, TextField } from "../forms/FormFields";
import { useFormSubmission } from "../forms/useFormSubmission";

export const ContactForm: React.FC = () => {
  const t = useTranslations("ContactPage.form");
  const { status, formKey, handleSubmit } = useFormSubmission("contact");

  return (
    <FormCard
      title={t("title")}
      submitLabel={t("submit")}
      status={status}
      successMessage={t("success")}
      errorMessage={t("error")}
      onSubmit={handleSubmit}
    >
      <div key={formKey} className="space-y-6">
        <TextField label={t("name")} name="name" autoComplete="name" required />
        <TextField label={t("email")} name="email" type="email" autoComplete="email" required />
        <TextAreaField label={t("message")} name="message" rows={6} required />
      </div>
    </FormCard>
  );
};

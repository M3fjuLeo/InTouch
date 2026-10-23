"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { FormCard } from "./FormCard";
import { TextAreaField, TextField } from "./FormFields";
import { useFormSubmission } from "./useFormSubmission";

export const EventsForm: React.FC = () => {
  const t = useTranslations("CollaborationsPage.events.form");
  const { status, formKey, handleSubmit } = useFormSubmission("events");

  return (
    <FormCard
      title={t("title")}
      submitLabel={t("submit")}
      note={t("note")}
      status={status}
      successMessage={t("success")}
      errorMessage={t("error")}
      onSubmit={handleSubmit}
    >
      <div key={formKey} className="space-y-6">
        <TextField label={t("name")} name="name" autoComplete="name" required />
        <TextField label={t("email")} name="email" type="email" autoComplete="email" required />
        <TextField label={t("venue")} name="venue" autoComplete="organization" required />
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField label={t("people")} name="people" type="number" inputMode="numeric" min={1} required />
          <TextField label={t("days")} name="days" type="number" inputMode="numeric" min={1} required />
        </div>
        <TextField
          label={t("eventType")}
          name="eventType"
          placeholder={t("eventTypePlaceholder")}
          required
        />
        <TextField label={t("date")} name="date" type="date" required />
        <TextAreaField
          label={t("message")}
          optional={t("optional")}
          name="message"
          placeholder={t("messagePlaceholder")}
        />
      </div>
    </FormCard>
  );
};

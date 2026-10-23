"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { MAX_FILE_SIZE_MB, validateFile } from "../../lib/forms";
import { FormCard } from "./FormCard";
import { FileField, SelectField, TextField } from "./FormFields";
import { useFormSubmission } from "./useFormSubmission";

const specializations = ["massage", "physio", "other"] as const;

const files = {
  cv: { extensions: ["pdf"], accept: ".pdf,application/pdf" },
  letter: {
    extensions: ["pdf", "docx"],
    accept:
      ".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  },
};

export const JoinForm: React.FC = () => {
  const t = useTranslations("CollaborationsPage.join.form");

  const validate = (data: FormData) => {
    const errors: Record<string, string> = {};
    for (const [name, { extensions }] of Object.entries(files)) {
      const error = validateFile(data.get(name), extensions);
      if (error) errors[name] = t(`fileErrors.${error}`, { max: MAX_FILE_SIZE_MB });
    }
    return errors;
  };

  const { status, errors, formKey, handleSubmit } = useFormSubmission("join", validate);

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
        <SelectField
          label={t("specialization")}
          name="specialization"
          placeholder={t("specializationPlaceholder")}
          options={specializations.map((value) => ({
            value,
            label: t(`specializations.${value}`),
          }))}
          required
        />
        <FileField
          label={t("cv")}
          name="cv"
          accept={files.cv.accept}
          chooseLabel={t("chooseFile")}
          hint={t("cvHint", { max: MAX_FILE_SIZE_MB })}
          error={errors.cv}
        />
        <FileField
          label={t("letter")}
          name="letter"
          accept={files.letter.accept}
          chooseLabel={t("chooseFile")}
          hint={t("letterHint", { max: MAX_FILE_SIZE_MB })}
          error={errors.letter}
        />
      </div>
    </FormCard>
  );
};

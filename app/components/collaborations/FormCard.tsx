import React from "react";
import { Button } from "../ui/Button";

interface FormCardProps {
  title: string;
  submitLabel: string;
  note?: string;
  status: "idle" | "submitting" | "success" | "error";
  successMessage: string;
  errorMessage: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

export const FormCard: React.FC<FormCardProps> = ({
  title,
  submitLabel,
  note,
  status,
  successMessage,
  errorMessage,
  onSubmit,
  children,
}) => {
  return (
    <div className="rounded-3xl border border-brand-darkest/10 bg-white/70 p-6 sm:p-10 shadow-sm">
      <h3 className="font-serif-custom text-2xl sm:text-3xl text-brand-dark mb-8">
        {title}
      </h3>

      <form onSubmit={onSubmit} className="space-y-6">
        {children}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full justify-center"
        >
          {status === "submitting" ? "…" : submitLabel}
        </Button>

        <div aria-live="polite" className="text-center text-sm">
          {status === "success" && (
            <p className="text-green-800">{successMessage}</p>
          )}
          {status === "error" && <p className="text-red-700">{errorMessage}</p>}
          {status !== "success" && note && (
            <p className="font-serif-custom italic text-base text-brand-darkest/60">
              {note}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

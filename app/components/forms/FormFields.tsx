"use client";

import React, { useId, useState } from "react";
import { Paperclip } from "lucide-react";
import { cn } from "../../lib/utils";

const controlClass =
  "block w-full min-w-0 appearance-none rounded-xl border border-brand-darkest/15 bg-brand-bg px-4 py-3 text-base text-brand-darkest placeholder:text-brand-darkest/35 focus:outline-none focus:border-brand-primary transition-colors";

interface FieldShellProps {
  id: string;
  label: string;
  optional?: string;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}

function FieldShell({ id, label, optional, hint, error, children }: FieldShellProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block mb-2 text-xs font-semibold uppercase tracking-wider text-brand-darkest/70"
      >
        {label}
        {optional && (
          <span className="ml-1.5 font-normal normal-case tracking-normal text-brand-darkest/40">
            ({optional})
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p className="mt-2 text-xs text-brand-darkest/50">{hint}</p>
      )}
      {error && (
        <p role="alert" className="mt-2 text-sm text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}

interface BaseFieldProps {
  label: string;
  optional?: string;
}

export function TextField({
  label,
  optional,
  className,
  ...props
}: BaseFieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} optional={optional}>
      <input
        id={id}
        className={cn(
          controlClass,
          "[&::-webkit-date-and-time-value]:text-left",
          className
        )}
        {...props}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  optional,
  ...props
}: BaseFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} optional={optional}>
      <textarea
        id={id}
        rows={5}
        className={cn(controlClass, "resize-none custom-scrollbar")}
        {...props}
      />
    </FieldShell>
  );
}

interface SelectFieldProps
  extends BaseFieldProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  options: { value: string; label: string }[];
}

export function SelectField({
  label,
  optional,
  placeholder,
  options,
  ...props
}: SelectFieldProps) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} optional={optional}>
      <select
        id={id}
        defaultValue=""
        className={cn(
          controlClass,
          "invalid:text-brand-darkest/35 [&>option]:text-brand-darkest"
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

interface FileFieldProps extends BaseFieldProps {
  name: string;
  accept: string;
  chooseLabel: string;
  hint: string;
  error?: string;
}

export function FileField({
  label,
  name,
  accept,
  chooseLabel,
  hint,
  error,
}: FileFieldProps) {
  const id = useId();
  const [fileName, setFileName] = useState<string | null>(null);

  return (
    <FieldShell id={id} label={label} hint={hint} error={error}>
      <input
        id={id}
        name={name}
        type="file"
        accept={accept}
        className="peer sr-only"
        onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
      />
      <label
        htmlFor={id}
        className={cn(
          "flex items-center gap-3 rounded-xl border border-dashed bg-brand-bg px-4 py-3 cursor-pointer transition-colors hover:border-brand-primary peer-focus-visible:border-brand-primary",
          error ? "border-red-700/60" : "border-brand-darkest/25"
        )}
      >
        <Paperclip className="w-4 h-4 shrink-0 text-brand-primary" />
        <span
          className={cn(
            "truncate text-sm",
            fileName ? "text-brand-darkest" : "text-brand-darkest/50"
          )}
        >
          {fileName ?? chooseLabel}
        </span>
      </label>
    </FieldShell>
  );
}

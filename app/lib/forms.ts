export type FormId = "contact" | "events" | "join";

export const MAX_FILE_SIZE_MB = 5;

export type FileError = "missing" | "type" | "size";

export function validateFile(
  value: FormDataEntryValue | null,
  extensions: string[]
): FileError | null {
  if (!(value instanceof File) || value.size === 0) return "missing";

  const extension = value.name.split(".").pop()?.toLowerCase() ?? "";
  if (!extensions.includes(extension)) return "type";
  if (value.size > MAX_FILE_SIZE_MB * 1024 * 1024) return "size";
  return null;
}

// TODO: Formularze nie wysyłają jeszcze danych – podłączyć prawdziwą wysyłkę (np. Resend / Formspree).
// To jedyne miejsce do zmiany: wszystkie formularze na stronie korzystają z tej funkcji.
export async function submitForm(formId: FormId, data: FormData): Promise<void> {
  void formId;
  void data;
  await new Promise((resolve) => setTimeout(resolve, 1000));
}

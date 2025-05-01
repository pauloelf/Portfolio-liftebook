type FormData = Record<string, string>;
type FieldErrors = Record<string, string>;

export function handleInputChange({
  data,
  setFormData,
  setFieldErrors,
}: {
  data: { name: string; value: string };
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  setFieldErrors: React.Dispatch<React.SetStateAction<FieldErrors>>;
}) {
  const { name, value } = data;
  setFormData((prev) => ({ ...prev, [name]: value }));
  setFieldErrors((prev) => {
    if (!prev[name]) return prev;
    const updated = { ...prev };
    delete updated[name];
    return updated;
  });
}

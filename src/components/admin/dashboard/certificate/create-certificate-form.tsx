"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { AlertError } from "@/components/error";
import { AlertSuccess } from "@/components/success";
import { handleInputChange } from "@/lib/utils";
import { createCertificate } from "@/lib/actions";

const CreateCertificateSchema = z.object({
  src: z
    .string()
    .nonempty({ message: "src é obrigatório" })
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
});

const initialState = {
  errors: {
    src: [],
  },
  message: "",
  success: false,
};

export function CreateCertificateForm() {
  const [formData, setFormData] = useState<{ src?: string }>({
    src: "",
  });
  const [fieldErrors, setFieldErrors] = useState<{ src?: string }>({});
  const [state, formAction, pending] = useActionState(
    createCertificate as () => Promise<typeof initialState>,
    initialState
  );

  const handleBeforeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = CreateCertificateSchema.safeParse(formData);
    if (!result.success) {
      e.preventDefault();
      const errors = result.error.flatten().fieldErrors;
      setFieldErrors({
        src: errors.src?.[0],
      });
    }
  };

  return (
    <div className="space-y-8 font-secondary">
      {state?.success && (
        <AlertSuccess title="Sucesso!" description={state.message} />
      )}

      {!state.success && state.message && (
        <AlertError title="Ops!" description={state.message} />
      )}

      <form
        action={formAction}
        onSubmit={handleBeforeSubmit}
        className="space-y-6"
      >
        <div className="space-y-2">
          <Label htmlFor="src">Imagem</Label>
          <Input
            id="src"
            name="src"
            placeholder="i.imgur.com/..."
            className="rounded"
            value={formData.src}
            onChange={(e) =>
              handleInputChange({
                data: e.target,
                setFormData,
                setFieldErrors,
              })
            }
          />
          {fieldErrors.src && (
            <p className="text-sm text-red-500">{fieldErrors.src}</p>
          )}
        </div>

        <Button
          variant="default"
          type="submit"
          className="w-full cursor-pointer"
          disabled={pending}
        >
          {pending ? "Criando certificado..." : "Criar certificado"}
        </Button>
      </form>
    </div>
  );
}

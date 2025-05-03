"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ProjectFormType } from "@/types";
import { z } from "zod";
import { AlertError } from "@/components/error";
import { AlertSuccess } from "@/components/success";
import { handleInputChange } from "@/lib/utils";
import { createProject } from "@/lib/actions";

const CreateProjectSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Titulo é obrigatório" })
    .min(5, { message: "Mínimo 5 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  description: z
    .string()
    .nonempty({ message: "Descrição é obrigatória" })
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(200, { message: "Máximo 200 caracteres" }),
  src: z
    .string()
    .nonempty({ message: "src é obrigatório" })
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(50, { message: "Máximo 50 caracteres" }),
  url: z
    .string()
    .nonempty({ message: "url é obrigatório" })
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  codeURL: z
    .string()
    .nonempty({ message: "codeURL é obrigatório" })
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
});

const initialState = {
  errors: {
    title: [],
    description: [],
    src: [],
    url: [],
    codeURL: [],
  },
  message: "",
  success: false,
};

export function CreateProjectForm() {
  const [formData, setFormData] = useState<ProjectFormType>({
    title: "",
    src: "",
    description: "",
    url: "",
    codeURL: "",
  });
  const [fieldErrors, setFieldErrors] = useState<ProjectFormType>({});
  const [state, formAction, pending] = useActionState(
    createProject as () => Promise<typeof initialState>,
    initialState
  );

  const handleBeforeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = CreateProjectSchema.safeParse(formData);
    if (!result.success) {
      e.preventDefault();
      const errors = result.error.flatten().fieldErrors;
      setFieldErrors({
        title: errors.title?.[0],
        description: errors.description?.[0],
        src: errors.src?.[0],
        url: errors.url?.[0],
        codeURL: errors.codeURL?.[0],
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
          <Label htmlFor="title">Titulo</Label>
          <Input
            id="title"
            name="title"
            placeholder="calculadora, blog..."
            className="rounded"
            value={formData.title}
            onChange={(e) =>
              handleInputChange({
                data: e.target,
                setFormData,
                setFieldErrors,
              })
            }
          />
          {fieldErrors.title && (
            <p className="text-sm text-red-500">{fieldErrors.title}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Descrição</Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Essa é minha descrição..."
            className="min-h-20"
            value={formData.description}
            onChange={(e) =>
              handleInputChange({
                data: e.target,
                setFormData,
                setFieldErrors,
              })
            }
          />
          {fieldErrors.description && (
            <p className="text-sm text-red-500">{fieldErrors.description}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Imagem</Label>
          <Input
            id="src"
            name="src"
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

        <div className="space-y-2">
          <Label htmlFor="content">URL</Label>
          <Input
            id="url"
            name="url"
            className="rounded"
            value={formData.url}
            onChange={(e) =>
              handleInputChange({
                data: e.target,
                setFormData,
                setFieldErrors,
              })
            }
          />
          {fieldErrors.url && (
            <p className="text-sm text-red-500">{fieldErrors.url}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">URL Github</Label>
          <Input
            id="codeURL"
            name="codeURL"
            className="rounded"
            value={formData.codeURL}
            onChange={(e) =>
              handleInputChange({
                data: e.target,
                setFormData,
                setFieldErrors,
              })
            }
          />
          {fieldErrors.codeURL && (
            <p className="text-sm text-red-500">{fieldErrors.codeURL}</p>
          )}
        </div>

        <Button
          variant="default"
          type="submit"
          className="w-full cursor-pointer"
          disabled={pending}
        >
          {pending ? "Criando projeto..." : "Criar projeto"}
        </Button>
      </form>
    </div>
  );
}

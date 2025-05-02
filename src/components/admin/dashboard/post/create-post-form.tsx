"use client";

import { useActionState, useState } from "react";
import { createPost } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PostFormType } from "@/types";
import { z } from "zod";
import { AlertError } from "@/components/error";
import { AlertSuccess } from "@/components/success";
import { handleInputChange } from "@/lib/utils";

const CreatePostSchema = z.object({
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
  content: z
    .string()
    .nonempty({ message: "Conteúdo é obrigatório" })
    .min(50, { message: "Mínimo 50 caracteres" })
    .max(3000, { message: "Máximo 3000 caracteres" }),
});

const initialState = {
  errors: {
    title: [],
    description: [],
    content: [],
  },
  message: "",
  success: false,
};

export function CreatePostForm() {
  const [formData, setFormData] = useState<PostFormType>({
    title: "",
    content: "",
    description: "",
  });
  const [fieldErrors, setFieldErrors] = useState<PostFormType>({});
  const [state, formAction, pending] = useActionState(
    createPost as () => Promise<typeof initialState>,
    initialState
  );

  const handleBeforeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const result = CreatePostSchema.safeParse(formData);
    if (!result.success) {
      e.preventDefault();
      const errors = result.error.flatten().fieldErrors;
      setFieldErrors({
        title: errors.title?.[0],
        content: errors.content?.[0],
        description: errors.description?.[0],
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
            placeholder="Meu primeiro post..."
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
          <Label htmlFor="content">Conteúdo</Label>
          <Textarea
            id="content"
            name="content"
            className="min-h-42"
            value={formData.content}
            onChange={(e) =>
              handleInputChange({
                data: e.target,
                setFormData,
                setFieldErrors,
              })
            }
          />
          {fieldErrors.content && (
            <p className="text-sm text-red-500">{fieldErrors.content}</p>
          )}
        </div>

        <Button
          variant="default"
          type="submit"
          className="w-full cursor-pointer"
          disabled={pending}
        >
          {pending ? "Criando post..." : "Criar post"}
        </Button>
      </form>
    </div>
  );
}

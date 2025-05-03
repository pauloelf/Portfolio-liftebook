"use server";

import { ProjectFormType } from "@/types";
import { addDoc, collection } from "firebase/firestore";
import { z } from "zod";
import { db } from "../services/firebase";

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
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(50, { message: "Máximo 50 caracteres" }),
  url: z
    .string()
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  codeURL: z
    .string()
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
});

export async function createProject(
  state: ProjectFormType,
  formData: FormData
) {
  const result = CreateProjectSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    src: formData.get("src"),
    url: formData.get("url"),
    codeURL: formData.get("codeURL"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Erro ao validar dados.",
      success: false,
    };
  }

  const { title, description, url, src, codeURL } = result.data;

  try {
    await addDoc(collection(db, "projects"), {
      title,
      description,
      src,
      codeURL,
      url,
      createdAt: new Date(),
    });

    return {
      errors: { title: [], description: [], src: [], url: [], codeURL: [] },
      message: "Projeto criado com sucesso!",
      success: true,
    };
  } catch {
    return {
      errors: { title: [], description: [], src: [], url: [], codeURL: [] },
      message: "Ocorreu um erro ao criar o projeto.",
      success: false,
    };
  }
}

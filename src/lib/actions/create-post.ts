"use server";

import { PostFormType } from "@/types";
import { addDoc, collection } from "firebase/firestore";
import { z } from "zod";
import { db } from "../services/firebase";

const CreatePostSchema = z.object({
  title: z
    .string()
    .min(5, { message: "Mínimo 5 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
  description: z
    .string()
    .min(10, { message: "Mínimo 10 caracteres" })
    .max(200, { message: "Máximo 200 caracteres" }),
  content: z
    .string()
    .min(50, { message: "Mínimo 50 caracteres" })
    .max(3000, { message: "Máximo 3000 caracteres" }),
});

export async function createPost(state: PostFormType, formData: FormData) {
  const result = CreatePostSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Erro ao validar dados.",
      success: false,
    };
  }

  const { title, description, content } = result.data;

  try {
    await addDoc(collection(db, "posts"), {
      title,
      description,
      content,
      createdAt: new Date(),
    });

    return {
      errors: { title: [], description: [], content: [] },
      message: "Post criado com sucesso!",
      success: true,
    };
  } catch {
    return {
      errors: { title: [], description: [], content: [] },
      message: "Ocorreu um erro ao criar o post.",
      success: false,
    };
  }
}

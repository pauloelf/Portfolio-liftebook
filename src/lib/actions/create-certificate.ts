"use server";

import { addDoc, collection } from "firebase/firestore";
import { z } from "zod";
import { db } from "../services/firebase";

const CreateCertificateSchema = z.object({
  src: z
    .string()
    .min(5, { message: "Mínimo 5 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" }),
});

export async function createCertificate(
  state: { src?: string },
  formData: FormData
) {
  const result = CreateCertificateSchema.safeParse({
    src: formData.get("src"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Erro ao validar dados.",
      success: false,
    };
  }

  const { src } = result.data;

  try {
    await addDoc(collection(db, "certificates"), {
      src,
    });

    return {
      errors: { src: [] },
      message: "Certificado criado com sucesso!",
      success: true,
    };
  } catch {
    return {
      errors: { src: [] },
      message: "Ocorreu um erro ao criar o certificado.",
      success: false,
    };
  }
}

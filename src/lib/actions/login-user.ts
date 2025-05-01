"use server";

import { signInWithEmailAndPassword } from "firebase/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../services/firebase";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z.string().min(6, { message: "Mínimo 6 caracteres" }),
});

export async function loginUser(state: { err: string }, formData: FormData) {
  const raw = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = LoginSchema.safeParse(raw);

  if (!result.success) {
    const firstError =
      result.error.flatten().fieldErrors.email?.[0] ||
      result.error.flatten().fieldErrors.password?.[0] ||
      "Erro ao validar dados.";
    return { error: firstError };
  }

  const { email, password } = result.data;

  try {
    const userCred = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCred.user.getIdToken();

    (await cookies()).set("auth-token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        err: "E-mail ou senha incorretos.",
      };
    }
  }
  redirect("/dashboard");
}

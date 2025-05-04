"use client";

import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertError } from "../../error";
import { LoginFormType } from "@/types";
import { handleInputChange } from "@/lib/utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/services/firebase";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

const LoginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email é obrigatório" })
    .email({ message: "Email inválido" }),
  password: z
    .string()
    .nonempty({ message: "Senha é obrigatória" })
    .min(6, { message: "Mínimo de 6 caracteres" }),
});

function ButtonWithLoading() {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="default"
      type="submit"
      className="w-full cursor-pointer rounded-xl"
      disabled={pending}
    >
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
}
export function LoginForm() {
  const [formData, setFormData] = useState<LoginFormType>({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<LoginFormType>({});
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const result = LoginSchema.safeParse(formData);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setFieldErrors({
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
      return;
    }

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        formData.email || "",
        formData.password || ""
      );
      const token = await userCred.user.getIdToken();
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        setError("Falha ao autenticar.");
      }
      router.push("/dashboard");
    } catch {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <Card className="w-full font-secondary">
      <CardHeader>
        <CardTitle className="text-2xl">Entrar</CardTitle>
        <CardDescription className="font-primary">
          Login Overlord
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit} className="space-y-4">
        <CardContent className="space-y-4">
          {error && <AlertError title="Ops!" description={error} />}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                handleInputChange({
                  data: e.target,
                  setFormData,
                  setFieldErrors,
                })
              }
              placeholder="name@example.com"
            />
            {fieldErrors.email && (
              <p className="text-sm text-red-500">{fieldErrors.email}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                handleInputChange({
                  data: e.target,
                  setFormData,
                  setFieldErrors,
                })
              }
            />
            {fieldErrors.password && (
              <p className="text-sm text-red-500">{fieldErrors.password}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <ButtonWithLoading />
        </CardFooter>
      </form>
    </Card>
  );
}

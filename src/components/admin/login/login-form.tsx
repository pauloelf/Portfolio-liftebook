"use client";

import { useActionState, useEffect, useState } from "react";
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
import { loginUser } from "@/lib/actions/login-user";
import { LoginFormType } from "@/types";
import { handleInputChange } from "@/lib/utils";

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

export function LoginForm() {
  const [formData, setFormData] = useState<LoginFormType>({
    email: "",
    password: "",
  });
  const [fieldErrors, setFieldErrors] = useState<LoginFormType>({});
  const [error, setError] = useState("");
  const [state, formAction, isPending] = useActionState(
    loginUser as () => Promise<{ err: string }>,
    {
      err: "",
    }
  );

  useEffect(() => {
    if (state?.err) setError(state.err);
  }, [state]);

  const handleBeforeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setError("");
    const result = LoginSchema.safeParse(formData);
    if (!result.success) {
      e.preventDefault();
      const errors = result.error.flatten().fieldErrors;
      setFieldErrors({
        email: errors.email?.[0],
        password: errors.password?.[0],
      });
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
      <form
        action={formAction}
        onSubmit={handleBeforeSubmit}
        className="space-y-4"
      >
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
          <Button
            variant="default"
            type="submit"
            className="w-full cursor-pointer rounded-xl"
            disabled={isPending}
          >
            {isPending ? "Entrando..." : "Entrar"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

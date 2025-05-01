"use client";

import { useFormStatus } from "react-dom";
import { logoutUser } from "../lib/actions";
import { Button } from "./ui/button";

function ButtonWithLoading() {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      variant="default"
      className="rounded-xl cursor-pointer"
    >
      Faça login novamente.
    </Button>
  );
}

export function TokenDelete() {
  return (
    <div className="w-full h-full flex justify-center mt-40">
      <form action={logoutUser}>
        <p className="mb-4 text-red-500 text-sm text-center">Ocorreu um erro</p>
        <ButtonWithLoading />
      </form>
    </div>
  );
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logoutUser() {
  (await cookies()).set("auth-token", "", { expires: new Date(0) });
  redirect("/login");
}

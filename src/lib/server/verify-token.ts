import { getAuth } from "firebase-admin/auth";
import { app } from "../services/firebase-admin";
import { cookies } from "next/headers";

export async function verifyToken() {
  const cookie = await cookies();
  const token = cookie.get("auth-token")?.value;

  if (!token) return { valid: false };

  try {
    const decoded = await getAuth(app).verifyIdToken(token);

    const now = Math.floor(Date.now() / 1000);
    if (decoded.exp && decoded.exp < now) {
      return { valid: false };
    }

    return { valid: true };
  } catch {
    return { valid: false };
  }
}

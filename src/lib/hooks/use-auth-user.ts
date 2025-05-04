import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/services/firebase";
import { useEffect, useState } from "react";

export function useAuthUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user;
}

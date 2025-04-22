import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="font-primary text-emerald-800 dark:text-emerald-600 font-bold">
      {children}
    </span>
  );
}

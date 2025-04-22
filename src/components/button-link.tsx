import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkInterdace {
  children: ReactNode;
  href: string;
}

export function ButtonLink({ children, href }: ButtonLinkInterdace) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center w-max gap-1 cursor-pointer select-none rounded-xl px-3 py-1 font-secondary text-sm font-bold text-card-foreground hover:text-secondary-foreground border border-ring/50 bg-secondary hover:bg-background outline-ring"
    >
      {children}
    </Link>
  );
}

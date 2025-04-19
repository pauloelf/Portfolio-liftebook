"use client";

import {
  House,
  User2,
  BookOpenText,
  FolderCode,
  Award,
  Sun,
  Moon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TooltipItem } from "../tooltip-item";

export const menuItens = [
  { id: "home", href: "/", label: "Início", icon: <House /> },
  { id: "about", href: "/sobre", label: "Sobre", icon: <User2 /> },
  {
    id: "projects",
    href: "/projetos",
    label: "Projetos",
    icon: <FolderCode />,
  },
  {
    id: "certificates",
    href: "/certificados",
    label: "Certificados",
    icon: <Award />,
  },
  { id: "blog", href: "/blog", label: "Blog", icon: <BookOpenText /> },
];

export function Menu() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      const header = document.querySelector("header");
      const scroll = window.scrollY;

      if (!header) return;

      if (scroll > 10) {
        header.style.top = "0px";
      } else {
        header.style.top = "16px";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {menuItens.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className={`flex items-center w-full gap-1 cursor-pointer select-none rounded-xl px-3 py-1 font-secondary text-sm font-bold text-card-foreground hover:text-secondary-foreground border border-transparent hover:border-ring/30 bg-secondary hover:bg-ring/15 outline-ring`}
        >
          {item.icon}
          <span className="md:inline-block hidden">{item.label}</span>
        </Link>
      ))}
      <div className="h-6 w-0.5 bg-accent"></div>
      <TooltipItem trigger={theme === "dark" ? "Escuro" : "Claro"}>
        <Button
          variant="ghost"
          size="icon"
          className="cursor-pointer rounded-xl text-card-foreground hover:text-secondary-foreground bg-secondary hover:bg-ring/15"
          onClick={() =>
            setTheme((prev) => (prev == "dark" ? "light" : "dark"))
          }
        >
          {hasMounted ? theme === "dark" ? <Sun /> : <Moon /> : null}
        </Button>
      </TooltipItem>
    </>
  );
}

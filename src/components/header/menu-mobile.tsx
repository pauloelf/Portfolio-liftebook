"use client";

import { MenuIcon, Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { menuItens } from "./menu";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function MenuMobile() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <MenuIcon className="size-8" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36">
        <DropdownMenuGroup>
          {menuItens.map((item) => (
            <DropdownMenuItem
              key={item.id}
              onClick={() => push(item.href)}
              className="font-secondary text-md"
            >
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {hasMounted ? (
            theme === "dark" ? (
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Claro
                <DropdownMenuShortcut>
                  <Sun />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Escuro
                <DropdownMenuShortcut>
                  <Moon />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            )
          ) : null}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

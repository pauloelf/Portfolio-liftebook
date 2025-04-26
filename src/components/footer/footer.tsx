import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-2xl lg:max-w-3xl py-4 px-6 mx-auto flex flex-col md:flex-row gap-2 justify-between items-center">
      <div>
        <p className="text-neutral-500 font-secondary text-sm text-center">
          © {currentYear} /{" "}
          <span className="text-neutral-600 dark:text-neutral-400 font-primary">
            Liftebook
          </span>{" "}
          / Todos os direitos reservados.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://github.com/pauloelf"
            target="_blank"
            className="flex items-center w-max cursor-pointer rounded-xl px-3 py-1 text-card-foreground hover:text-secondary-foreground bg-secondary hover:bg-background outline-ring"
          >
            <Github />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="https://www.linkedin.com/in/paulosergioelf/"
            target="_blank"
            className="flex items-center w-max cursor-pointer rounded-xl px-3 py-1 text-card-foreground hover:text-secondary-foreground bg-secondary hover:bg-background outline-ring"
          >
            <Linkedin />
          </Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link
            href="mailto:contato.paulofws@gmail.com"
            target="_blank"
            className="flex items-center w-max cursor-pointer rounded-xl px-3 py-1 text-card-foreground hover:text-secondary-foreground bg-secondary hover:bg-background outline-ring"
          >
            <Mail />
          </Link>
        </Button>
      </div>
    </footer>
  );
}

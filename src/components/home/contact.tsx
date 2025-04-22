import { Github, Mail, Linkedin } from "lucide-react";
import { ButtonLink } from "../button-link";
import Image from "next/image";

export function ContactSection() {
  return (
    <section className="flex gap-4 justify-start sm:justify-center items-center py-12">
      <div className="hidden sm:flex animate-fade-right animate-once animate-duration-500 animate-delay-300">
        <Image
          src="/svgs/contact.svg"
          alt="contact-illustration"
          width={520}
          height={520}
        />
      </div>
      <div className="flex flex-col justify-center space-y-4 animate-fade-right animate-once animate-duration-500 animate-delay-600">
        <div className="space-y-2 font-secondary">
          <h2 className="text-foreground text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Entre em contato
          </h2>
          <p className="text-muted-foreground text-sm sm:text-md lg:text-l max-w-xs sm:max-w-lg">
            Tem alguma dúvida ou quer trabalhar comigo? Sinta-se livre para
            entrar em contato comigo!
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <ButtonLink href="https://github.com/pauloelf">
            <Github /> Github
          </ButtonLink>
          <ButtonLink href="https://www.linkedin.com/in/paulosergioelf/">
            <Linkedin /> Linkedin
          </ButtonLink>
          <ButtonLink href="mailto:contato.paulofws@gmail.com">
            <Mail /> Email
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

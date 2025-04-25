import { SkillsSection } from "@/components/about/skills";
import { ButtonLink } from "@/components/button-link";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="h-full flex flex-col ease-linear transition-all">
      <section className="flex-1 flex gap-4 justify-start sm:justify-center items-center py-8">
        <div className="hidden sm:flex animate-fade-right animate-once animate-duration-500 animate-delay-300">
          <Image
            src="svgs/about.svg"
            alt="about-illustration"
            width={520}
            height={520}
            priority
          />
        </div>
        <div className="animate-fade-right animate-once animate-duration-500 animate-delay-600">
          <h3 className="font-secondary text-2xl text-ring">Hello, it's me</h3>
          <h1 className="font-secondary text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Paulo Sérgio
          </h1>
          <h2 className="font-secondary text-2xl sm:text-2xl lg:text-4xl text-ring font-medium mb-6">
            Desenvolvedor <span className="text-emerald-500">Front-End</span>
          </h2>
          <div className="flex flex-wrap gap-2">
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
          <p className="font-secondary text-sm sm:text-md lg:text-lg text-card-foreground mt-4 mb-8 max-w-xs sm:max-w-lg">
            Sou desenvolvedor Front-End com 3 anos de experiência e desde então
            desenvolvo projetos de estudo para capacitação.
            <br />
            <br />
            Tenho como objetivo me especializar cada vez mais na área de
            Front-End, explorando novas tecnologias e aprofundando meus
            conhecimentos em UI/UX, além de iniciar meus estudos no Back-End.
          </p>
        </div>
      </section>
      <section>
        <SkillsSection />
      </section>
    </section>
  );
}

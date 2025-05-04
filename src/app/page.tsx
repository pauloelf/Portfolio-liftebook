import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/home/badge";
import { ContactSection } from "@/components/home/contact";
import { HighlightsSection } from "@/components/home/highlights";
import { User2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <section className="h-full flex flex-col ease-linear transition-all">
      <section className="flex-1 flex gap-4 justify-start sm:justify-center items-center py-8">
        <div className="animate-fade-right animate-once animate-duration-500 animate-delay-300">
          <h1 className="font-secondary text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Desenvolvedor <br /> Front-End
          </h1>
          <p className="font-secondary text-sm sm:text-md lg:text-lg text-card-foreground mt-4 mb-8 max-w-xs sm:max-w-lg">
            Me chamo Paulo, sou desenvolvedor front-end especializado em{" "}
            <Badge>Javascript</Badge>, {""}
            <Badge>Typescript</Badge>, {""}
            <Badge>NextJS</Badge>, {""}
            <Badge>React</Badge>. {""}
            Criando interfaces modernas, performáticas e intuitivas para
            melhorar a experiência do usuário.
          </p>
          <div className="flex space-x-2">
            <ButtonLink href="/sobre" target="_self">
              <User2 /> Sobre mim
            </ButtonLink>
          </div>
        </div>
        <div className="hidden sm:flex animate-fade-right animate-once animate-duration-500 animate-delay-600">
          <Image
            src="svgs/home.svg"
            alt="home-illustration"
            width={520}
            height={520}
            priority
          />
        </div>
      </section>
      <HighlightsSection />
      <ContactSection />
    </section>
  );
}

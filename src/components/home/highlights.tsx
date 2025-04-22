import Link from "next/link";
import { Button } from "../ui/button";
import { CardProject } from "./card-project";
import { CardPost } from "./card-posts";

export function HighlightsSection() {
  return (
    <section>
      <h2 className="text-foreground font-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        Destaques
      </h2>
      <div>
        <div className="flex justify-between items-center pt-8 pb-4 font-secondary">
          <h3
            className="text-ring text-lg sm:text-xl lg:text-2xl font-bold uppercase"
            id="recent-projects"
          >
            Projetos recentes
          </h3>
          <Button
            asChild
            variant="link"
            className="text-muted-foreground font-bold text-xs sm:text-sm uppercase p-0"
          >
            <Link href="/projetos">ver projetos</Link>
          </Button>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-labelledby="recent-projects"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <CardProject
              key={i}
              title="Projeto 01"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis
         vero nostrum magni dolorem libero quas perferendis obcaecati."
              codeURL="#"
              url="#"
              image={{ alt: "contact-illustration", src: "svgs/contact.svg" }}
            />
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center pt-8 pb-4">
          <h3
            className="text-ring text-lg sm:text-xl lg:text-2xl font-bold uppercase"
            id="recent-posts"
          >
            Postagens recentes
          </h3>
          <Button
            asChild
            variant="link"
            className="text-muted-foreground font-bold text-xs sm:text-sm uppercase p-0"
          >
            <Link href="/blog">Ver postagens</Link>
          </Button>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          aria-labelledby="recent-posts"
        >
          {Array.from({ length: 2 }).map((_, i) => (
            <CardPost
              key={i}
              title={`Post 0${i + 1}`}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis
         vero nostrum magni dolorem libero quas perferendis obcaecati."
              url="#"
              date="1995-09-01"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

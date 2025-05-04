import Link from "next/link";
import { Button } from "../ui/button";
import { CardProject } from "./card-project";
import { CardPost } from "./card-posts";
import { getPosts, getProjects } from "@/lib/actions";

export async function HighlightsSection() {
  const posts = await getPosts();
  const projects = await getProjects();
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
          {projects.map((project, i) => {
            if (i < 3) {
              return (
                <CardProject
                  key={project.id}
                  title={project.title || ""}
                  description={project.description || ""}
                  codeURL={project.codeURL || ""}
                  url={project.url || ""}
                  image={{
                    alt: project.title || "",
                    src: project.src || "",
                  }}
                />
              );
            }
          })}
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
          {posts.map((post, i) => {
            if (i < 3) {
              return (
                <CardPost
                  key={post.id}
                  date={
                    (post.createdAt &&
                      new Date(
                        +post.createdAt?.seconds * 1000
                      ).toLocaleDateString("pt-BR")) ||
                    ""
                  }
                  title={post.title || ""}
                  description={post.description || ""}
                  url={`/blog/:${post.id}`}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

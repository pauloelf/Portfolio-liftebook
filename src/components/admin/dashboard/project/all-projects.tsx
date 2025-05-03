import { CardProject } from "@/components/home/card-project";
import { getProjects } from "@/lib/actions";

export async function AllProjects() {
  const projects = await getProjects();

  if (projects.length < 1) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 font-secondary">
      {projects.map((project) => (
        <CardProject
          key={project.id}
          title={project.title || ""}
          description={project.description || ""}
          url={project.url || ""}
          codeURL={project.codeURL || ""}
          image={{ src: project.src || "", alt: project.title || "" }}
        />
      ))}
    </div>
  );
}

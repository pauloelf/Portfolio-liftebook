import { AllProjects } from "@/components/admin/dashboard/project/all-projects";

export default async function ProjectsPage() {
  return (
    <section className="flex flex-col justify-center w-full my-10">
      <div className="">
        <h1 className="text-foreground font-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
          Projetos
        </h1>
        <AllProjects />
      </div>
    </section>
  );
}

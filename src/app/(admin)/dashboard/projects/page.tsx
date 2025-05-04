import { AllProjects } from "@/components/admin/dashboard/project/all-projects";

export default async function AllProjectsPage() {
  return (
    <main className="flex flex-col justify-center w-screen md:w-full my-10 px-2 sm:px-4 md:px-8">
      <div className="">
        <AllProjects />
      </div>
    </main>
  );
}

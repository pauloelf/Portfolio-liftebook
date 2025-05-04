import { CreateProjectForm } from "@/components/admin/dashboard/project/create-project-form";

export default async function CreateProjectPage() {
  return (
    <main className="flex justify-center w-full my-10 px-2 sm:px-4 md:px-8">
      <div className="w-2xs sm:w-md">
        <CreateProjectForm />
      </div>
    </main>
  );
}

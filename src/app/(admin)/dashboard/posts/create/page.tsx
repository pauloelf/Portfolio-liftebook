import { CreatePostForm } from "@/components/admin/dashboard/post/create-post-form";

export default async function CreatePostPage() {
  return (
    <main className="flex justify-center w-full my-10 px-2 sm:px-4 md:px-8">
      <div className="w-2xs sm:w-md">
        <CreatePostForm />
      </div>
    </main>
  );
}

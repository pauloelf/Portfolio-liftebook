import { CreatePostForm } from "@/components/admin/dashboard/post/create-post-form";

export default async function CreatePostPage() {
  return (
    <main className="flex justify-center w-full my-10 mx-2 sm:mx-4 md:mx-8">
      <div className="w-2xs sm:w-md">
        <CreatePostForm />
      </div>
    </main>
  );
}

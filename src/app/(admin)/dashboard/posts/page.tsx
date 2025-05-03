import { AllPosts } from "@/components/admin/dashboard/post/all-posts";

export default async function AllPostsPage() {
  return (
    <main className="flex flex-col justify-center w-screen md:w-full my-10 px-2 sm:px-4 md:px-8">
      <div className="">
        <AllPosts />
      </div>
    </main>
  );
}

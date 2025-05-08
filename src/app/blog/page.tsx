import { AllPosts } from "@/components/admin/dashboard/post/all-posts";

export default async function BlogPage() {
  return (
    <section className="flex flex-col justify-center w-full my-10">
      <div className="">
        <h1 className="text-foreground font-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
          Blog
        </h1>
        <AllPosts />
      </div>
    </section>
  );
}

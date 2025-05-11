import { Post } from "@/components/blog/post";

export default async function PostPage({ params }: { params: { id: string } }) {
  const id = (await params).id;

  return (
    <section className="flex flex-col justify-center w-full my-10">
      <div>
        <Post id={id} />
      </div>
    </section>
  );
}

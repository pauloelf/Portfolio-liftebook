import { Post } from "@/components/blog/post";

type Params = Promise<{ id: string }>;

export default async function PostPage({ params }: { params: Params }) {
  const id = (await params).id;

  return (
    <section className="flex flex-col justify-center w-full my-10">
      <div>
        <Post id={id} />
      </div>
    </section>
  );
}

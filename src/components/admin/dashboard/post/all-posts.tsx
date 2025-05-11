import { CardPost } from "@/components/home/card-posts";
import { getPosts } from "@/lib/actions";

export async function AllPosts() {
  const posts = await getPosts();

  if (posts.length < 1) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-4 font-secondary">
      {posts.map((post) => (
        <CardPost
          key={post.id}
          date={
            (post.createdAt &&
              new Date(+post.createdAt?.seconds * 1000).toLocaleDateString(
                "pt-BR"
              )) ||
            ""
          }
          title={post.title || ""}
          description={post.description || ""}
          url={`/blog/${post.id}`}
        />
      ))}
    </div>
  );
}

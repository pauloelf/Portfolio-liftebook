import { getPost } from "@/lib/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export async function Post({ id }: { id: string }) {
  const post = await getPost(id);

  if (!post) return <p>Carregando...</p>;
  const formattedText = post.content?.split("\\n\\n");

  return (
    <div className="container mx-auto py-10 animate-fade-down animate-once animate-duration-700 animate-delay-300 animate-ease-in-out">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl font-bold uppercase font-secondary">
                {post.title}
              </CardTitle>
              <CardDescription className="mt-2 font-primary">
                {post.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="font-secondary">
            {formattedText?.map((text, id) => (
              <p key={text + id}>
                {text}
                <br />
                <br />
              </p>
            ))}
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4 text-sm text-muted-foreground font-primary">
          Criado em{" "}
          {post.createdAt &&
            new Date(+post.createdAt?.seconds * 1000).toLocaleDateString(
              "pt-BR"
            )}
        </CardFooter>
      </Card>
    </div>
  );
}

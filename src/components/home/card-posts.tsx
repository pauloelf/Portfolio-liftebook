import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink } from "lucide-react";
import { CardPostInterface } from "@/types";

export function CardPost({ title, description, url, date }: CardPostInterface) {
  return (
    <article className="flex-1 animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">
      <Card className="gap-2">
        <CardHeader className="font-secondary">
          <CardTitle className="uppercase">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex flex-wrap justify-between gap-2 pt-4">
          <Button
            asChild
            variant="secondary"
            className="rounded-xl font-secondary font-bold text-card-foreground hover:text-secondary-foreground border border-foreground/50 bg-card hover:bg-secondary"
          >
            <Link href={url}>
              Ver Post <ExternalLink />
            </Link>
          </Button>
          <p className="text-neutral-500">{date}</p>
        </CardFooter>
      </Card>
    </article>
  );
}

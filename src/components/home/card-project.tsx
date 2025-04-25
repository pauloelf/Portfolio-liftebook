import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { CardProjectInterface } from "@/types";

export function CardProject({
  title,
  codeURL,
  description,
  image,
  url,
}: CardProjectInterface) {
  return (
    <article className="flex-1 animate-fade animate-once animate-duration-700 animate-delay-300 animate-ease-in">
      <Card className="gap-2 pt-0">
        <div className="relative h-48 w-full rounded-t-xl bg-neutral-100 text-muted-foreground/30 flex justify-center items-center">
          {/* <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <div className="flex flex-col justify-between pt-4">
          <CardHeader className="font-secondary">
            <CardTitle className="uppercase">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-wrap gap-2 pt-4">
            <Button
              asChild
              variant="secondary"
              className="rounded-xl font-secondary font-bold text-card-foreground hover:text-secondary-foreground border border-foreground/50 bg-card hover:bg-secondary"
            >
              <Link href={url}>
                Ver Projeto <ExternalLink />
              </Link>
            </Button>
            <Button asChild variant="default" className="rounded-xl">
              <Link href={codeURL}>
                Github <Github />
              </Link>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </article>
  );
}

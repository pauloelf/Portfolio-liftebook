import type React from "react";
import { Skill } from "@/types";
import { SkillCard } from "./skill-card";
import Image from "next/image";

const skills: Skill[] = [
  { id: 1, name: "HTML5", icon: "svgs/icons8-html5.svg" },
  { id: 2, name: "CSS3", icon: "svgs/icons8-css3.svg" },
  { id: 3, name: "Javascript", icon: "svgs/icons8-javascript.svg" },
  { id: 4, name: "Typescript", icon: "svgs/icons8-typescript.svg" },
  { id: 5, name: "React", icon: "svgs/icons8-react.svg" },
  { id: 6, name: "Next.js", icon: "svgs/icons8-nextjs.svg" },
  { id: 7, name: "Tailwind CSS", icon: "svgs/icons8-tailwindcss.svg" },
];

export function SkillsSection() {
  return (
    <section className="flex-1 flex gap-4 justify-start sm:justify-center items-center py-8">
      <div className="w-full animate-fade-right animate-once animate-duration-500 animate-delay-300">
        <h2 className="text-foreground text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Habilidades
        </h2>
        <ul className="grid col-span-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
          {skills.map((skill) => (
            <li
              key={skill.id}
              className="h-full hover:shadow-md transition-shadow"
            >
              <SkillCard icon={skill.icon} name={skill.name} />
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden lg:flex animate-fade-right animate-once animate-duration-500 animate-delay-600">
        <Image
          src="svgs/skills.svg"
          alt="about-illustration"
          width={520}
          height={520}
        />
      </div>
    </section>
  );
}

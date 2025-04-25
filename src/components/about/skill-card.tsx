import { Skill } from "@/types";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

export function SkillCard({ icon, name }: Skill) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between sm:justify-start gap-2">
        <Image src={icon} alt="icon" width={40} height={40} />
        <h3 className="text-md sm:text-xl text-neutral-500 font-medium font-secondary">
          {name}
        </h3>
      </CardContent>
    </Card>
  );
}

"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Certificado {
  src?: string;
}

export function AllCertificates({
  certificados,
}: {
  certificados: Certificado[];
}) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {certificados.map((certificate) => (
          <CarouselItem key={certificate.src}>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-video sm:aspect-[2/1] mb-4 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={certificate.src || ""}
                  alt="Certificado"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}

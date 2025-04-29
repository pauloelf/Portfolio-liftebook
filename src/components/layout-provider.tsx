"use client";

import { TooltipItem } from "@/components/tooltip-item";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";

export function LayoutProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <>
      {pathname.startsWith("/dashboard") || pathname.startsWith("/login") ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          <main className="container min-h-screen flex flex-col mx-auto p-4 sm:py-6 md:p-8">
            <div className="fixed right-8 bottom-4 animate-bounce animate-infinite animate-duration-1000 animate-delay-300 animate-ease-in z-10">
              <TooltipItem trigger="Role para baixo">
                <Button
                  size="icon"
                  variant="secondary"
                  className="cursor-pointer"
                  aria-label="role para baixo"
                >
                  <ArrowDown />
                </Button>
              </TooltipItem>
            </div>
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

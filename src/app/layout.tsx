import type { Metadata } from "next";
import { Libre_Baskerville, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TooltipItem } from "@/components/tooltip-item";
import { Footer } from "@/components/footer";

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Início | Portfólio - Liftebook",
  description:
    "Desenvolvedor Front-end especializado em JavaScript, TypeScript, Next.js e React. Criando interfaces modernas, performáticas e intuitivas para melhorar a experiência do usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${libreBaskerville.variable} ${roboto.variable} antialiased bg-secondary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
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
        </ThemeProvider>
      </body>
    </html>
  );
}

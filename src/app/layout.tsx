import type { Metadata } from "next";
import { Libre_Baskerville, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

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
          <main className="container flex flex-col mx-auto p-4 sm:py-6 md:p-8">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}

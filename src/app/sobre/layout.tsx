import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre | Portfólio - Liftebook",
  description:
    "Desenvolvedor Front-end especializado em JavaScript, TypeScript, Next.js e React. Criando interfaces modernas, performáticas e intuitivas para melhorar a experiência do usuário.",
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

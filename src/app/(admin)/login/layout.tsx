import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Liftebook",
  description: "Faça login com sua conta Overlord.",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex flex-col justify-center">{children}</main>;
}

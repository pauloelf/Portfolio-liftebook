import { DashboardSidebar } from "@/components/admin/dashboard/dashboard-sidebar";
import { TokenDelete } from "@/components/token-delete";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { verifyToken } from "@/lib/server/verify-token";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Liftebook",
  description: "Dashboard para editar conteúdo do site.",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { valid } = await verifyToken();

  if (!valid) return <TokenDelete />;
  return (
    <SidebarProvider>
      <DashboardSidebar />
      <div className="w-full">
        <SidebarTrigger />
        {children}
      </div>
    </SidebarProvider>
  );
}

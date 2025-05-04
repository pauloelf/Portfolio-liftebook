import { DashboardSidebar } from "@/components/admin/dashboard/dashboard-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
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

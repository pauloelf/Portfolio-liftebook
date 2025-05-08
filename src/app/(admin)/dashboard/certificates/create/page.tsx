import { CreateCertificateForm } from "@/components/admin/dashboard/certificate/create-certificate-form";

export default async function CreateCertificatePage() {
  return (
    <main className="flex justify-center w-full my-10 px-2 sm:px-4 md:px-8">
      <div className="w-2xs sm:w-md">
        <CreateCertificateForm />
      </div>
    </main>
  );
}

import { AllCertificates } from "@/components/admin/dashboard/certificate/all-certificates";
import { getCertificates } from "@/lib/actions/get-certificates";

export default async function AllCertificatesPage() {
  const certificados = await getCertificates();

  return (
    <main className="flex flex-col justify-center w-screen md:w-full my-10 px-2 sm:px-4 md:px-8">
      <div className="">
        <AllCertificates certificados={certificados} />
      </div>
    </main>
  );
}

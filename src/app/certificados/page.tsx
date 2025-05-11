import { AllCertificates } from "@/components/admin/dashboard/certificate/all-certificates";
import { getCertificates } from "@/lib/actions";

export default async function CertificatesPage() {
  const certificados = await getCertificates();

  return (
    <section className="flex flex-col justify-center w-full my-10">
      <div className="">
        <h1 className="text-foreground font-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12">
          Certificados
        </h1>
        <AllCertificates certificados={certificados} />
      </div>
    </section>
  );
}

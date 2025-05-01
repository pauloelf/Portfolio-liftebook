import { LoginForm } from "@/components/admin/login";

export default async function LoginPage() {
  return (
    <div className="flex flex-col self-center w-2xs sm:w-md mt-30">
      <LoginForm />
    </div>
  );
}

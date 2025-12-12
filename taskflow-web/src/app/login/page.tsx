import { GoogleSignInButton } from "@/components/GoogleSignInButton";
import { redirect } from "next/navigation";
import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-gray-800 bg-gray-900 p-8 shadow-lg">
        <div className="mb-6 space-y-2 text-center">
          <h1 className="text-2xl font-bold text-white">Acesse sua conta</h1>
          <p className="text-sm text-gray-400">
            Continue com sua conta Google para entrar no Taskflow.
          </p>
        </div>
        <GoogleSignInButton />
      </div>
    </div>
  );
}

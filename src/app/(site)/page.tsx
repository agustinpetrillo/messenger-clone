import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/imgs/logo.png"
          alt="Logo"
          height={48}
          width={48}
          className="w-auto mx-auto"
        />
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-center text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}

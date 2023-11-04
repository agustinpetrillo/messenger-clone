"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import Input from "@/components/inputs/Input";
import Button from "@/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";

export default function AuthForm() {
  const session = useSession();
  const router = useRouter();
  const [loginOrRegister, setLoginOrRegister] =
    useState<LoginOrRegister>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session?.status === "authenticated") router.push("/users");
  }, [session?.status]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (loginOrRegister === "REGISTER") {
      axios
        .post("/api/register", data)
        .then(() => signIn("credentials", data))
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }

    if (loginOrRegister === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }
          if (callback?.ok && !callback?.error) {
            toast.success("Login successfully");
            router.push("/users");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials!");
        }
        if (callback?.ok && callback?.error) {
          toast.success("Login successfully");
        }
      })
      .finally(() => setIsLoading(false));
  };

  const toggleLoginOrRegister = () => {
    if (loginOrRegister === "LOGIN") {
      setLoginOrRegister("REGISTER");
    } else {
      setLoginOrRegister("LOGIN");
    }
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {loginOrRegister === "REGISTER" && (
            <Input id="name" label="Name" register={register} errors={errors} />
          )}
          <Input
            type="email"
            id="email"
            label="Email"
            register={register}
            errors={errors}
          />
          <Input
            type="password"
            id="password"
            label="Password"
            register={register}
            errors={errors}
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {loginOrRegister === "REGISTER" ? "Register" : "Sign in"}
            </Button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-center">
              <span className="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="flex justify-center gap-2 px-2 mt-6 text-sm text-gray-500">
          <div>
            {loginOrRegister === "LOGIN"
              ? "New to Messenger"
              : "Already have an account?"}
          </div>
          <div
            onClick={() => toggleLoginOrRegister()}
            className="underline cursor-pointer"
          >
            {loginOrRegister === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
}

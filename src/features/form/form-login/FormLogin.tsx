"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useYupForm } from "../../../hook/useYupForm";
import Typography from "../../../atoms/typography";
import Input from "../../../atoms/input";
import Button from "../../../atoms/button";
import { schemaFormLogin } from "./schema";
import ContainerAuthLottie from "../../../molecules/container-auth-lottie/ContainerAuthLottie";

const FormLogin= ()=> {
  const router = useRouter();
  const { register, handleSubmit, getError, isSubmitting } = useYupForm({
    schema: schemaFormLogin,
    onSubmit: async (values) => {
      try {
        const res = await signIn("credentials", {
          email: values.email,
          password: values.password,
          redirect: false,
        });

        if (res?.ok) {
          router.push("/dashboard");
          router.refresh();
        }
      } catch (error) {
        console.error("Login Error: ", error)
      }
    }
  });

  return (
    <ContainerAuthLottie>
      <Typography as="h1">Welcome back</Typography>
      <Typography as="p">Sign in to continue</Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <Input 
          {...register("email")} 
          placeholder="you@example.com" 
          helperText={getError("email")} 
          state={
            getError("email") ? "error" : "default"
          }
        />
        
        <Input 
          {...register("password")} 
          type="password" 
          placeholder="••••••••" 
          helperText={getError("password")} 
          state={
            getError("password") ? "error" : "default"
          }
        />

        <div className="flex gap-2">
          <Button type="submit" className="text-white w-full" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>

          <Button type="button" className="text-black w-full" color="warning" disabled={isSubmitting} onClick={() => router.push("/register")}>
            Sign up
          </Button>
        </div>
      </form>
    </ContainerAuthLottie>
  );
}

export default FormLogin

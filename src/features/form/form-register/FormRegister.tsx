"use client";

import { useRouter } from "next/navigation";
import { useYupForm } from "../../../hook/useYupForm";
import { registerSvcCaller } from "../../../services/auth/register/register.svc";
import Typography from "../../../atoms/typography";
import Input from "../../../atoms/input";
import Button from "../../../atoms/button";
import { schemaFormRegister } from "./schema";
import ContainerAuthLottie from "../../../molecules/container-auth-lottie/ContainerAuthLottie";
import { useAuth } from "../../../context/auth/useAuth";

const FormRegister = () => {
  const router = useRouter();
  const { login } = useAuth();
  const { register, handleSubmit, getError, isSubmitting } = useYupForm({
    schema: schemaFormRegister,
    onSubmit: async (values) => {
      try {
        const res = await registerSvcCaller.execute(values);
        if (res?.accessToken) {
          await login(res);
          router.push("/dashboard");
        }
      } catch (error) {
        console.error("Register Error: ", error);
      }
    },
  });

  return (
    <ContainerAuthLottie>
      <Typography as="h1">Create an account</Typography>
      <Typography as="p">Join us tonight</Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <Input 
          {...register("username")} 
          placeholder="Username" 
          helperText={getError("username")} 
          state={
            getError("username") ? "error" : "default"
          } 
        />

        <Input 
          {...register("email")} 
          placeholder="you@example.com" 
          helperText={getError("email")} 
          state={
            getError("email") ? "error" : "default"
        } />

        <Input 
          {...register("firstName")} 
          placeholder="First Name" 
          helperText={getError("firstName")} 
          state={
            getError("firstName") ? "error" : "default"
        } />

        <Input 
          {...register("lastName")} 
          placeholder="Last Name" 
          helperText={getError("lastName")} 
          state={
            getError("lastName") ? "error" : "default"
        } />

        <Input 
          {...register("password")} 
          type="password" 
          placeholder="••••••••" 
          helperText={getError("password")} 
          state={
            getError("password") ? "error" : "default"
        } />

        <div className="flex flex-col gap-2">
          <Button type="submit" className="text-white w-full" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
          <Button type="button" className="text-black w-full" color="default" disabled={isSubmitting} onClick={() => router.push("/")}>
            Back to Login
          </Button>
        </div>
      </form>
    </ContainerAuthLottie>
  );
};

export default FormRegister;

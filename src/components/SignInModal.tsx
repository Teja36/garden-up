"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import { registerUser } from "@/actions/register";

const loginFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

const registerFormSchema = z.object({
  firstname: z.string().trim(),
  lastname: z.string().trim(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Must be 8 or more characters long" }),
});

const SignInModal = ({ closeModal }: { closeModal: () => void }) => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-brightness-50 flex justify-center items-center">
      <div className="relative max-w-96 mx-auto my-4 flex flex-col bg-white p-12 rounded-xl ">
        <p className="text-center">Garden Up - Logo</p>

        <button
          onClick={() => closeModal()}
          className="absolute top-0 right-0 p-4 hover:opacity-75 transition-opacity text-gray-400"
        >
          <X />
        </button>

        {isRegister ? (
          <h2 className="text-lg text-gray-800 font-medium text-center mt-4">
            Create an account with
          </h2>
        ) : (
          <h2 className="text-lg text-gray-800 font-medium text-center mt-4">
            Welcome Back! Sign in With
          </h2>
        )}

        <div className="flex gap-2 mt-4">
          <Button
            className="w-full bg-gray-50 hover:bg-gray-50/90 text-black border"
            onClick={() => signIn("google")}
          >
            <Image
              src="https://authjs.dev/img/providers/google.svg"
              alt="google-icon"
              height={24}
              width={24}
            />
            <span className="ml-3">Google</span>
          </Button>

          <Button
            className="w-full bg-blue-600 hover:bg-blue-600/90"
            onClick={() => signIn("facebook")}
          >
            <Image
              src="https://authjs.dev/img/providers/facebook.svg"
              alt="facebook-icon"
              height={24}
              width={24}
            />
            <span className="ml-3">Facebook</span>
          </Button>
        </div>

        {isRegister ? (
          <RegisterForm closeModal={closeModal} />
        ) : (
          <LoginForm closeModal={closeModal} />
        )}

        {isRegister ? (
          <p className="text-gray-400 text-sm self-center">
            Already have an account?{" "}
            <Button
              className="px-0"
              variant={"link"}
              onClick={() => setIsRegister(false)}
            >
              Sign In
            </Button>
          </p>
        ) : (
          <p className="text-gray-400 text-sm self-center">
            New here?{" "}
            <Button
              className="px-0"
              variant={"link"}
              onClick={() => setIsRegister(true)}
            >
              Create an account
            </Button>
          </p>
        )}
      </div>
    </dialog>
  );
};

const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    const res = await signIn("credentials", { ...values, redirect: false });

    if (res?.error) {
      form.setError("password", {
        message: "Username or password incorrect",
      });
      return;
    }

    form.reset();
    closeModal();
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col mt-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="self-start p-0 m-0 gap-0 text-black"
          variant={"link"}
          asChild
        >
          <Link href="/forgot-password">Forgot password?</Link>
        </Button>

        <Button type="submit" className="tracking-widest uppercase py-6 mt-4">
          Sign In
        </Button>
      </form>
    </Form>
  );
};

const RegisterForm = ({ closeModal }: { closeModal: () => void }) => {
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof registerFormSchema>) => {
    const formData = new FormData();

    Object.keys(values).forEach((key) =>
      formData.append(key, values[key as keyof typeof values])
    );

    const res = await registerUser(formData);

    if (res?.error) {
      form.setError("password", { message: res.error });
      return;
    }

    closeModal();

    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
  };

  return (
    <>
      <h3 className="text-center mt-6 font-medium">
        or proceed with your email
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col mt-2"
        >
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="firstname"
                      placeholder="Firstname"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text" placeholder="Lastname" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="email" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="password" placeholder="Password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="tracking-widest uppercase py-6 mt-6">
            Create Account
          </Button>
        </form>
      </Form>
    </>
  );
};

export default SignInModal;

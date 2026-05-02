"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLoginForm = async (data) => {
    const { email, password } = data;
    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login Failed");
      return;
    }
    if (res) {
      toast.success("Login Successful");
    }
  };

  return (
    <Form
      className="flex justify-center w-96 mx-auto flex-col gap-4 my-10 bg-white shadow-md p-8 rounded-xl"
      onSubmit={handleSubmit(handleLoginForm)}
    >
      <h2 className="text-2xl font-bold text-center text-[#005691] mb-4">
        Login your account
      </h2>

      <TextField isRequired name="email" type="email">
        <Label>Email</Label>
        <Input
          placeholder="john@example.com"
          {...register("email", { required: "Email field is required" })}
        />
        <FieldError />
        {errors.email && (
          <p className="text-[10px] text-purple-600">{errors.email.message}</p>
        )}
      </TextField>

      <TextField isRequired name="password" type="password">
        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          {...register("password", { required: "Password field is required" })}
        />

        <FieldError />
        {errors.password && (
          <p className="text-[10px] text-purple-600">
            {errors.password.message}
          </p>
        )}
      </TextField>

      <div className="flex gap-2">
        <Button type="submit" className="bg-[#005691] w-full">
          Login
        </Button>
      </div>
      <p className="text-[16px] text-black font-medium text-center">
        Don't Have An Account?{" "}
        <Link href={"/register"} className="text-[#005691]">
          Register
        </Link>
      </p>
      <div className="flex items-center">
        <div className="grow border-t border-gray-200"></div>

        <span className="mx-4 text-gray-500 text-lg">or</span>

        <div className="grow border-t border-gray-200"></div>
      </div>
      <Button className="bg-transparent border border-[#005691] text-[#005691] w-full">
        <FaGoogle />
        Login with Google
      </Button>
    </Form>
  );
};

export default LogInPage;

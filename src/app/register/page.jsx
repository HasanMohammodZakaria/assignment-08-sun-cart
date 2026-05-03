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
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const handleRegisterForm = async (data) => {
    const { name, photo, email, password } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      image: photo,
      email: email,
      password: password,
    });
    if (error) {
      toast.error(error.message || "Registration failed");
      return;
    }
    if (res) {
      toast.success("Registration Successful");
      router.push("/login");
    }
  };

  return (
    <Form
      className="lex justify-center w-full max-w-md mx-auto flex-col gap-4 my-10 bg-white shadow-md p-8 rounded-xl"
      onSubmit={handleSubmit(handleRegisterForm)}
    >
      <h2 className="text-2xl font-bold text-center text-[#005691] mb-4">
        Register your account
      </h2>

      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input
          placeholder="Enter your name"
          {...register("name", { required: "Name field is required" })}
        />
        <FieldError />
        {errors.name && (
          <p className="text-[10px] text-red-500">{errors.name.message}</p>
        )}
      </TextField>

      <TextField isRequired name="Photo" type="text">
        <Label>Photo Url</Label>
        <Input
          placeholder="Enter your Photo Url"
          {...register("photo", { required: "Photo Url field is required" })}
        />
        <FieldError />
        {errors.photo && (
          <p className="text-[10px] text-red-500">{errors.photo.message}</p>
        )}
      </TextField>

      <TextField isRequired name="email" type="email">
        <Label>Email</Label>
        <Input
          placeholder="john@example.com"
          {...register("email", { required: "Email field is required" })}
        />
        <FieldError />
        {errors.email && (
          <p className="text-[10px] text-red-500">{errors.email.message}</p>
        )}
      </TextField>

      <TextField
        isRequired
        name="password"
        type={isPasswordShow ? "text" : "password"}
        className="relative"
      >
        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          {...register("password", { required: "Password field is required" })}
        />
        <span
          className="absolute right-3 top-8.5 cursor-pointer"
          onClick={() => setIsPasswordShow(!isPasswordShow)}
        >
          {isPasswordShow ? <FaEye /> : <FaEyeSlash />}
        </span>

        <FieldError />
        {errors.password && (
          <p className="text-[10px] text-purple-600">
            {errors.password.message}
          </p>
        )}
      </TextField>

      <Button type="submit" className="bg-[#005691] w-full">
        Register
      </Button>
    </Form>
  );
};

export default RegisterPage;

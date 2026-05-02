"use client";
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

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const handleRegisterForm = (data) => {
    console.log(data, "data");
  };

  return (
    <Form
      className="flex justify-center w-96 mx-auto flex-col gap-4 my-10 bg-white shadow-md p-8 rounded-xl"
      onSubmit={handleSubmit(handleRegisterForm)}
    >
      <h2 className="text-2xl font-bold text-center text-[#005691] mb-4">
        Register your account
      </h2>

      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="Enter your name" {...register("name")} />
        <FieldError />
      </TextField>

      <TextField isRequired name="Photo" type="text">
        <Label>Photo Url</Label>
        <Input placeholder="Enter your Photo Url" {...register("photo")} />
        <FieldError />
      </TextField>

      <TextField isRequired name="email" type="email">
        <Label>Email</Label>
        <Input placeholder="john@example.com" {...register("email")} />
        <FieldError />
      </TextField>

      <TextField isRequired name="password" type="password">
        <Label>Password</Label>
        <Input placeholder="Enter your password" {...register("password")} />

        <FieldError />
      </TextField>

      <div className="flex gap-2">
        <Button type="submit" className="bg-[#005691] w-full">
          Register
        </Button>
      </div>
    </Form>
  );
};

export default RegisterPage;

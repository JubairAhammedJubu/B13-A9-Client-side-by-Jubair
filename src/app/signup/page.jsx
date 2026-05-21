"use client";

import {FcGoogle} from "react-icons/fc";
import {Card, Separator} from "@heroui/react";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import {authClient} from "@/lib/auth-client";
import {redirect} from "next/navigation";
import Link from "next/link";

const SignUpPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const {data, error} = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (data) {
      redirect("/");
    }

    if (error) {
      alert("Error");
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="p-10 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Start your adventure with SportNest
          </p>
        </div>

        {/* Card */}
        <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white">
          <Form onSubmit={onSubmit} className="flex flex-col gap-4">
            <TextField isRequired name="name" type="text">
              <Label>Name</Label>
              <Input className="rounded-md" placeholder="Enter your name" />
              <FieldError />
            </TextField>

            <TextField name="image" type="url">
              <Label>Image URL</Label>
              <Input
                className="rounded-md"
                placeholder="Image URL (optional)"
              />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input className="rounded-md" placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Must contain an uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Must contain a number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input className="rounded-md" placeholder="••••••••" />
              <Description className="text-xs text-gray-500">
                8+ chars, 1 uppercase, 1 number
              </Description>
              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition"
            >
              Create Account
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center my-3 gap-3">
            <Separator className="flex-1" />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              OR CONTINUE WITH
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Google Button */}
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50 rounded-lg"
          >
            <FcGoogle className="text-lg" />
            Sign up with Google
          </Button>

          <div className="mt-3 text-center text-sm text-gray-500">
            Have an account?{" "}
            <Link
              href="/login"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Login
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUpPage;

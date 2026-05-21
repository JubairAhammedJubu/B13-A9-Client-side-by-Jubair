"use client";

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
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const {data, error} = await authClient.signIn.email({
      email: user.email,
      password: user.password,
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
    <div className="p-10 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-800">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Sign in to continue your journey with SportNest
          </p>
        </div>

        {/* Card */}
        <Card className="p-6 shadow-xl rounded-2xl border border-gray-200 bg-white">
          <Form onSubmit={onSubmit} className="flex flex-col gap-4">
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
              <Input className="rounded-lg" placeholder="you@example.com" />
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
              <Input className="rounded-lg" placeholder="••••••••" />
              <Description className="text-xs text-gray-500">
                8+ characters, 1 uppercase, 1 number
              </Description>
              <FieldError />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition"
            >
              Login
            </Button>
          </Form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-3">
            <Separator className="flex-1" />
            <span className="text-xs text-gray-400 whitespace-nowrap">
              OR CONTINUE WITH
            </span>
            <Separator className="flex-1" />
          </div>

          {/* Google */}
          <Button
            onClick={handleGoogleSignin}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 border-gray-300 hover:bg-gray-50 rounded-lg transition"
          >
            <FcGoogle className="text-lg" />
            Continue with Google
          </Button>

          <div className="mt-3 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="text-cyan-600 hover:text-cyan-700 font-medium"
            >
              Create account
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;

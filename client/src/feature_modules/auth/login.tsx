import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Trees, Hammer } from "lucide-react";

import FormInput from "@/components/reuseable/formInput";
import PasswordInput from "@/components/reuseable/PasswordInput";

import { Link } from "@tanstack/react-router";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log({
      ...data,
      rememberMe,
    });

    // Connect your login API here
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <Card className="w-full max-w-6xl min-h-170 rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2 p-0">
        {/* Left Branding Section */}
        <div className="relative hidden lg:flex flex-col justify-between bg-wood-dark text-white p-12 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=1200')",
            }}
          />

          <div className="absolute inset-0 bg-linear-to-b from-[#211811]/60 via-wood-dark/50 to-[#211811]/90" />

          {/* Brand */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-wood-light flex items-center justify-center">
              <Trees size={25} className="text-wood-dark" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">WOODCRAFT</h1>
              <p className="text-[10px] tracking-[0.3em] text-wood-highlight">
                BUILT TO LAST
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 max-w-md">
            <div className="flex items-center gap-2 text-wood-highlight mb-6">
              <Hammer size={18} />
              <span className="text-xs uppercase tracking-[0.25em]">
                Crafted with purpose
              </span>
            </div>

            <h2 className="text-5xl font-semibold leading-tight mb-6">
              Where craftsmanship meets timeless design.
            </h2>

            <p className="text-[#E5D9CE] text-base leading-7">
              Discover thoughtfully crafted wooden furniture and timeless pieces
              made to bring warmth and character to your space.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-wood-medium border-2 border-wood-dark" />
                <div className="w-10 h-10 rounded-full bg-wood-highlight border-2 border-wood-dark" />
                <div className="w-10 h-10 rounded-full bg-wood-brown border-2 border-wood-dark" />
              </div>

              <p className="text-sm text-[#E5D9CE]">
                Made with care. Built to last.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex justify-between text-xs text-wood-highlight">
            <span>© 2026 Woodcraft Store</span>
            <span>Crafted with passion</span>
          </div>
        </div>

        {/* Right Login Section */}
        <CardContent className="flex flex-col justify-center px-6 py-12 sm:px-12 lg:px-16">
          {/* Mobile Brand */}
          <div className="flex lg:hidden items-center gap-3 mb-12">
            <div className="w-11 h-11 rounded-xl bg-wood-dark flex items-center justify-center">
              <Trees size={25} className="text-wood-highlight" />
            </div>

            <div>
              <h1 className="text-xl font-bold text-wood-dark">WOODCRAFT</h1>
              <p className="text-[10px] tracking-[0.3em] text-wood-medium">
                BUILT TO LAST
              </p>
            </div>
          </div>

          <div className="max-w-md w-full mx-auto">
            {/* Heading */}
            <div className="mb-9">
              <p className="text-sm font-medium text-wood-medium mb-3 tracking-wider uppercase">
                Welcome Back
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Sign in to your account
              </h2>

              <p className="text-muted-foreground text-sm">
                Welcome back! Please enter your details to continue.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email */}
              <FormInput
                name="email"
                inputType="email"
                label="Email Address"
                placeholder="you@example.com"
                register={register}
                control={control}
                errors={errors}
                required
              />

              {/* Password */}
              <PasswordInput
                name="password"
                label="Password"
                placeholder="Enter your password"
                register={register}
                errors={errors}
                required
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-wood-primary rounded cursor-pointer"
                  />

                  <span className="text-sm text-wood-muted">Remember me</span>
                </label>

                <Link
                  to="/auth/forgotpassword"
                  className="text-sm font-semibold text-wood-primary hover:text-wood-brown transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-primary hover:bg-wood-brown text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-wood-dark/10"
              >
                Sign In
                <ArrowRight size={18} />
              </Button>
            </form>

            {/* Register */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?
                <Link
                  to="/auth/register"
                  className="font-semibold text-wood-primary hover:text-wood-brown ml-1"
                >
                  Create account
                </Link>
              </p>
            </div>

            {/* Bottom Note */}
            <div className="mt-12 pt-6 text-center">
              <Separator className="mb-6" />

              <p className="text-xs text-wood-subtle">
                Quality craftsmanship, delivered with care.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

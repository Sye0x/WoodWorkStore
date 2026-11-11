import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Trees, Hammer, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";

import FormInput from "@/components/reuseable/formInput";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    console.log(data);

    // Connect your forgot password API here
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
              A fresh start begins with a simple step.
            </h2>

            <p className="text-[#E5D9CE] text-base leading-7">
              Having trouble accessing your account? Don't worry. We'll help you
              get back to discovering timeless wooden craftsmanship.
            </p>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex justify-between text-xs text-wood-highlight">
            <span>© 2026 Woodcraft Store</span>
            <span>Crafted with passion</span>
          </div>
        </div>

        {/* Right Forgot Password Section */}
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
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mb-7">
              <Mail size={27} className="text-wood-primary" />
            </div>

            {/* Heading */}
            <div className="mb-9">
              <p className="text-sm font-medium text-wood-medium mb-3 tracking-wider uppercase">
                Account Recovery
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Forgot your password?
              </h2>

              <p className="text-muted-foreground text-sm leading-6">
                No worries! Enter the email address associated with your account
                and we'll send you instructions to reset your password.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-primary hover:bg-wood-brown disabled:opacity-60 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-wood-dark/10"
              >
                {isSubmitting ? "Sending Instructions..." : "Send Reset Link"}
                {!isSubmitting && <ArrowRight size={18} />}
              </Button>
            </form>

            {/* Back to Login */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-wood-primary hover:text-wood-brown transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Sign In
              </Link>
            </div>

            {/* Footer */}
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

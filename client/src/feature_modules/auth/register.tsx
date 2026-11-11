import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Trees, Hammer, ArrowRight } from "lucide-react";

import PasswordInput from "@/components/reuseable/PasswordInput";
import FormInput from "@/components/reuseable/formInput";
import PhoneInput from "@/components/reuseable/PhoneInput";
import { Link } from "@tanstack/react-router";

const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .min(11, "Please enter a valid phone number")
      .regex(/^\+?[0-9\s()-]+$/, "Invalid phone number"),
    address: z.string().min(10, "Please enter your complete address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const { confirmPassword, ...registerData } = data;

    console.log(registerData);

    // Connect your registration API here
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl min-h-170 bg-card rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">
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
              Make your space a little more timeless.
            </h2>

            <p className="text-[#E5D9CE] text-base leading-7">
              Join our community and discover thoughtfully crafted wooden
              furniture made to bring warmth and character to your home.
            </p>
          </div>

          {/* Footer */}
          <div className="relative z-10 flex justify-between text-xs text-wood-highlight">
            <span>© 2026 Woodcraft Store</span>
            <span>Crafted with passion</span>
          </div>
        </div>

        {/* Right Registration Section */}
        <div className="flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16">
          {/* Mobile Brand */}
          <div className="flex lg:hidden items-center gap-3 mb-10">
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
            <div className="mb-8">
              <p className="text-sm font-medium text-wood-medium mb-3 tracking-wider uppercase">
                Get Started
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Create your account
              </h2>

              <p className="text-muted-foreground text-sm">
                Join us and bring timeless craftsmanship into your home.
              </p>
            </div>

            {/* Registration Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <FormInput
                name="name"
                inputType="text"
                label="Full Name"
                placeholder="Enter your full name"
                register={register}
                control={control}
                errors={errors}
                required
              />

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

              <PhoneInput
                name="phone"
                label="Phone Number"
                placeholder="300 1234567"
                register={register}
                errors={errors}
                required
              />

              <FormInput
                name="address"
                inputType="textarea"
                label="Delivery Address"
                placeholder="Enter your complete address"
                register={register}
                control={control}
                errors={errors}
                required
              />

              <PasswordInput
                name="password"
                label="Password"
                placeholder="Create a password"
                register={register}
                errors={errors}
                required
              />

              <PasswordInput
                name="confirmPassword"
                label="Confirm Password"
                placeholder="Re-enter your password"
                register={register}
                errors={errors}
                required
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 rounded-xl bg-primary hover:bg-wood-brown disabled:opacity-60 text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-wood-dark/10"
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
                {!isSubmitting && <ArrowRight size={18} />}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?
                <Link
                  to="/"
                  className="font-semibold text-wood-primary hover:text-wood-brown ml-1"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-10 pt-6 border-t border-border text-center">
              <p className="text-xs text-wood-subtle">
                Quality craftsmanship, delivered with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

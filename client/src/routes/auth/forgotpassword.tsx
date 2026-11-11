import ForgotPassword from "@/feature_modules/auth/forgotpassword";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/forgotpassword")({
  component: ForgotPassword,
});

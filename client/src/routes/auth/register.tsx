import { createFileRoute } from "@tanstack/react-router";
import Register from "@/feature_modules/auth/register";

export const Route = createFileRoute("/auth/register")({
  component: Register,
});

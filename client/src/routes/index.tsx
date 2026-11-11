import Login from "@/feature_modules/auth/login";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Login,
});

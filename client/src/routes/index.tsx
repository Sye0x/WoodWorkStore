import { createFileRoute } from "@tanstack/react-router";
import LandingPage from "@/feature_modules/landingPage";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

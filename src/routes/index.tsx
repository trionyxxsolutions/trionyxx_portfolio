import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { CtaBanner } from "@/components/sections/CtaBanner";
import logoLight from "../assets/logo.png";
import logoDark from "../assets/logo2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trionyxx Solutions — Engineering Scalable Digital Solutions" },
      {
        name: "description",
        content:
          "We build powerful web, mobile, and AI-driven systems for modern businesses. Engineering studio for ambitious teams.",
      },
      { property: "og:title", content: "Trionyxx Solutions" },
      {
        property: "og:description",
        content: "Engineering scalable digital solutions — web, mobile, AI and cloud.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <TechStack />
      <Projects />
      <CtaBanner />
    </>
  );
}

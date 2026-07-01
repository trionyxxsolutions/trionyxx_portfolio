import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { CtaBanner } from "@/components/sections/CtaBanner";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Trionyx Solutions — Engineering Scalable Digital Solutions" },
            {
                name: "description",
                content: "We build powerful web, mobile, and AI-driven systems for modern businesses. Engineering studio for ambitious teams.",
            },
            { property: "og:title", content: "Trionyx Solutions" },
            {
                property: "og:description",
                content: "Engineering scalable digital solutions — web, mobile, AI and cloud.",
            },
        ],
    }),
    component: HomePage,
});
function HomePage() {
    return (_jsxs(_Fragment, { children: [_jsx(Hero, {}), _jsx(AboutPreview, {}), _jsx(ServicesGrid, {}), _jsx(WhyChooseUs, {}), _jsx(TechStack, {}), _jsx(Projects, {}), _jsx(CtaBanner, {})] }));
}

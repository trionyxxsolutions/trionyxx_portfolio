import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
// ✅ Import all logos
import javaLogo from "@/assets/java.png";
import springLogo from "@/assets/spring.png";
import pythonLogo from "@/assets/python.png";
import fastapiLogo from "@/assets/fastapi.png";
import reactLogo from "@/assets/react.png";
import mysqlLogo from "@/assets/mysql.png";
import mongodbLogo from "@/assets/mongo.png";
import dockerLogo from "@/assets/docker.png";
import awsLogo from "@/assets/aws.png";
import nodeLogo from "@/assets/node.png";
import nextlogo from "@/assets/next.png";
import nginxlogo from "@/assets/nginx.png";
import redislogo from "@/assets/redis.png";
import awsLogoDark from "@/assets/aws_dark.png";
import phpLogo from "@/assets/php.png"
// ✅ Use imported logos
const stack = [
    { name: "Java", logo: javaLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "Python", logo: pythonLogo },
    { name: "FastAPI", logo: fastapiLogo },
    { name: "React", logo: reactLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "AWS", logo: awsLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "Next.js", logo: nextlogo },
    { name: "Nginx", logo: nginxlogo },
    { name: "Redis", logo: redislogo },
    { name: "PHP", logo: phpLogo },
];
const stack_dark = [
    { name: "Java", logo: javaLogo },
    { name: "Spring Boot", logo: springLogo },
    { name: "Python", logo: pythonLogo },
    { name: "FastAPI", logo: fastapiLogo },
    { name: "React", logo: reactLogo },
    { name: "MySQL", logo: mysqlLogo },
    { name: "MongoDB", logo: mongodbLogo },
    { name: "Docker", logo: dockerLogo },
    { name: "AWS", logo: awsLogoDark },
    { name: "Node.js", logo: nodeLogo },
    { name: "Next.js", logo: nextlogo },
    { name: "Nginx", logo: nginxlogo },
    { name: "Redis", logo: redislogo },
    { name: "PHP", logo: phpLogo },
];
export function TechStack() {
    return (_jsxs("section", { className: "py-24 sm:py-32 overflow-hidden", children: [_jsxs(motion.div, { initial: "hidden", whileInView: "visible", viewport: { once: true }, variants: fadeUp, className: "mx-auto max-w-7xl px-6 lg:px-8 text-center", children: [_jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-accent font-medium", children: "Our Technology" }), _jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight", children: ["Powered by ", _jsx("span", { className: "text-gradient", children: "industry-leading tools" }), "."] })] }), _jsxs("div", { className: "relative mt-14", children: [_jsx("div", { className: "absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" }), _jsx("div", { className: "absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" }), _jsx("div", { className: "flex marquee gap-6 w-max items-center", children: [...stack, ...stack].map((tech, i) => {
                            const isAWS = tech.name === "AWS";
                            return (_jsx("div", { className: "shrink-0 rounded-2xl p-6 flex items-center justify-center transition-all hover:scale-110", title: tech.name, children: isAWS ? (_jsxs(_Fragment, { children: [_jsx("img", { src: awsLogo, alt: "AWS", className: "h-20 w-20 object-contain block dark:hidden" }), _jsx("img", { src: awsLogoDark, alt: "AWS Dark", className: "h-20 w-20 object-contain hidden dark:block" })] })) : (_jsx("img", { src: tech.logo, alt: tech.name, className: "h-20 w-20 object-contain" })) }, `${tech.name}-${i}`));
                        }) })] })] }));
}

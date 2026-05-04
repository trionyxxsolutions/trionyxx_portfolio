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
import nginxlogo from "@/assets/nginx.png"
import redislogo from "@/assets/redis.png"
import awsLogoDark from "@/assets/aws_dark.png"

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
];

export function TechStack() {
  return (
    <section className="py-24 sm:py-32 overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mx-auto max-w-7xl px-6 lg:px-8 text-center"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">
          Our Technology
        </span>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
          Powered by <span className="text-gradient">industry-leading tools</span>.
        </h2>
      </motion.div>

      <div className="relative mt-14">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex marquee gap-6 w-max items-center">
          {[...stack, ...stack].map((tech, i) => {
            const isAWS = tech.name === "AWS";

            return (
              <div
                key={`${tech.name}-${i}`}
                className="shrink-0 rounded-2xl p-6 flex items-center justify-center transition-all hover:scale-110"
                title={tech.name}
              >
                {isAWS ? (
                  <>
                    {/* Light mode */}
                    <img
                      src={awsLogo}
                      alt="AWS"
                      className="h-20 w-20 object-contain block dark:hidden"
                    />

                    {/* Dark mode */}
                    <img
                      src={awsLogoDark}
                      alt="AWS Dark"
                      className="h-20 w-20 object-contain hidden dark:block"
                    />
                  </>
                ) : (
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-20 w-20 object-contain"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
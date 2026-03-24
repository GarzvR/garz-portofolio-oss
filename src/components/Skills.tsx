"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Postgres", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Framer", icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left space-y-2"
        >
          <h2 className="text-4xl font-bold border-l-4 border-accent pl-4 font-space">Tech Stack</h2>
          <p className="text-foreground-secondary pl-5 text-lg">Technologies I use to bring ideas to life</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="shadow-3d group flex flex-col items-center justify-center gap-4 p-8 border rounded-3xl bg-surface/30 backdrop-blur-sm border-grid-line transition-all hover:bg-surface hover:border-accent/30"
            >
              <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-lg font-space">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

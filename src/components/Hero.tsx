"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen pt-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-8 text-center max-w-4xl w-full"
      >
        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tighter md:text-8xl">
            Hi, I’m <span className="text-accent underline decoration-accent/20 underline-offset-8">Garz</span>
          </h1>
          <p className="text-2xl font-medium text-foreground-secondary md:text-4xl font-space">
            Full-Stack Developer
          </p>
        </div>
        <p className="max-w-xl text-lg text-foreground-secondary md:text-xl">
          I build clean, scalable, and performant web apps using modern architecture and state-of-the-art technologies.
        </p>
        <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
          <button className="shadow-3d flex items-center gap-2 px-8 py-4 transition-all border rounded-2xl bg-foreground text-background hover:scale-105 active:scale-95">
            View Projects
            <ArrowRight size={20} />
          </button>
          <button className="shadow-3d px-8 py-4 transition-all border rounded-2xl bg-surface border-grid-line hover:bg-grid-line hover:scale-105 active:scale-95">
            Contact Me
          </button>
        </div>
      </motion.div>
    </section>
  );
}

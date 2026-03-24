"use client";

import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between w-full max-w-5xl px-6 py-3 border rounded-2xl bg-surface/50 backdrop-blur-md border-grid-line"
      >
        <div className="text-xl font-bold tracking-tight">Garz.dev</div>
        <div className="flex items-center gap-8">
          <div className="hidden gap-6 md:flex">
            <a href="#hero" className="text-sm transition-colors hover:text-accent">Home</a>
            <a href="#skills" className="text-sm transition-colors hover:text-accent">Skills</a>
            <a href="#contact" className="text-sm transition-colors hover:text-accent">Contact</a>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 transition-all rounded-xl hover:bg-grid-line"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </motion.div>
    </nav>
  );
}

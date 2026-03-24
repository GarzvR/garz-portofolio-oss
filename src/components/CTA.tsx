"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Envelope, GithubLogo, DiscordLogo } from "@phosphor-icons/react";
import { useState } from "react";

export default function CTA() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const contactItems = [
    { id: "discord", username: "garz#0001", icon: DiscordLogo, color: "hover:text-[#5865F2]" },
    { id: "github", username: "/garz", icon: GithubLogo, color: "hover:text-[#000000] dark:hover:text-[#FFFFFF]" },
    { id: "gmail", username: "garz@gmail.com", icon: Envelope, color: "hover:text-[#EA4335]" },
  ];

  return (
    <section id="contact" className="py-40 px-6 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="shadow-3d max-w-4xl w-full p-16 text-center rounded-[3rem] border border-grid-line bg-surface/30 backdrop-blur-md space-y-12"
      >
        <div className="space-y-6">
          <h2 className="text-5xl font-bold tracking-tighter md:text-7xl font-space">
            Let’s build <span className="text-accent underline decoration-accent/10 underline-offset-8">together</span>
          </h2>
          <p className="text-foreground-secondary text-xl max-w-2xl mx-auto font-medium">
            Find me on Discord, GitHub, or just send a quick email if you’re interested in collaborating.
          </p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          {contactItems.map((item) => (
            <motion.button
              key={item.id}
              layout
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`shadow-3d group relative flex items-center justify-center gap-0 overflow-hidden h-16 px-4 transition-colors rounded-3xl bg-surface border border-grid-line ${item.color} ${hoveredId === item.id ? 'px-6 gap-3' : 'w-16'}`}
            >
              <item.icon size={28} weight="bold" className="shrink-0" />
              <AnimatePresence>
                {hoveredId === item.id && (
                  <motion.span
                    initial={{ opacity: 0, width: 0, x: -10 }}
                    animate={{ opacity: 1, width: "auto", x: 0 }}
                    exit={{ opacity: 0, width: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="font-bold whitespace-nowrap font-space text-lg"
                  >
                    {item.username}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

"use client";
import React from "react";
import { AuroraBackground } from "../../components/ui/Aurora-Background";
import { motion } from "framer-motion";
import { FloatingNavDemo } from "../../components/Nav";
export default function page() {
  return (
    <AuroraBackground>
      <FloatingNavDemo />
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 h-[140vh]"
      >
        <div className="font-montserratAlt gradtext text-3xl md:text-7xl font-bold text-white text-center">
          Coming Soon
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

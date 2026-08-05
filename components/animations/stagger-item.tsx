"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type StaggerItemProps = {
  children: ReactNode;
};

const item = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export function StaggerItem({ children }: StaggerItemProps) {
  return (
    <motion.div
      variants={item}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

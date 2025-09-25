"use client";
import { motion, useReducedMotion } from "framer-motion";

type Dir = "left" | "right" | "top" | "bottom";
export default function Reveal({
  children,
  from = "left",
  delay = 0,
  distance = 32,
  className = "",
}: {
  children: React.ReactNode;
  from?: Dir;
  delay?: number;
  distance?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const offset =
    from === "left"
      ? { x: -distance }
      : from === "right"
      ? { x: distance }
      : from === "top"
      ? { y: -distance }
      : { y: distance };

  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

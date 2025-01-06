"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

export default function GradualSpacingDelayed({
  text,
  duration = 0.7,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className="flex justify-center space-x-1">
      <AnimatePresence>
        {text.split("").map((char, i) => (
          <motion.p
            key={i}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: 0.7 + i * delayMultiple }}
            className={cn("", className)}
          >
            {char === "" ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}

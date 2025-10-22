import { motion } from "motion/react";
import { ReactNode } from "react";

interface SparkleHoverProps {
  children: ReactNode;
  className?: string;
}

export function SparkleHover({ children, className = "" }: SparkleHoverProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Sparkles that appear on hover */}
      <motion.div
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        className="absolute inset-0 pointer-events-none"
      >
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-yellow-400 text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            variants={{
              initial: {
                opacity: 0,
                scale: 0,
              },
              hover: {
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                transition: {
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                },
              },
            }}
          >
            ✨
          </motion.span>
        ))}
      </motion.div>

      {children}
    </motion.div>
  );
}

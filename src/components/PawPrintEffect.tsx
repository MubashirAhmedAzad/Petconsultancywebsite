import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface PawPrint {
  id: number;
  x: number;
  y: number;
}

export function PawPrintEffect() {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newPawPrint: PawPrint = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setPawPrints((prev) => [...prev, newPawPrint]);

      // Remove paw print after animation
      setTimeout(() => {
        setPawPrints((prev) => prev.filter((p) => p.id !== newPawPrint.id));
      }, 2000);
    };

    // Only add on certain elements
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("click", handleClick as EventListener);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("click", handleClick as EventListener);
      });
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pawPrints.map((paw) => (
        <motion.div
          key={paw.id}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            y: [0, -50],
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            position: "absolute",
            left: paw.x - 10,
            top: paw.y - 10,
          }}
          className="text-primary/30 text-2xl"
        >
          🐾
        </motion.div>
      ))}
    </div>
  );
}

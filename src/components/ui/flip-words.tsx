import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const FlipWords = ({
  words,
  duration = 1000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    // Cycle through indices instead of searching for word strings
    setCurrentIndex((prev) => (prev + 1) % words.length);
    setIsAnimating(true);
  }, [words.length]);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <div
      className={cn(
        "inline-block relative text-left text-[#D5171C] font-bold px-1",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
        <motion.span
          // Using index in the key is VITAL to make identical words flip
          key={`flip-word-${currentIndex}`}
          initial={{
            opacity: 0,
            y: 10,
            rotateX: 90,
            filter: "none", // Ensure no blur at start
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "none", // Ensure no blur during display
          }}
          exit={{
            opacity: 0,
            y: -10,
            rotateX: -90,
            filter: "none", // Ensure no blur during exit
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          style={{
            display: "inline-block",
            backfaceVisibility: "hidden",
            WebkitFontSmoothing: "antialiased",
          }}
          className="inline-block whitespace-nowrap"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
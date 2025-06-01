import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedGradientText({
  children,
  className,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  duration = 6, // in seconds
  ...props
}) {
  return (
    <motion.span
      animate={{
        backgroundPosition: ["0% 0%", "300% 0%"],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorTo}, ${colorFrom})`,
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
      className={cn("font-bold text-lg", className)}
      {...props}
    >
      {children}
    </motion.span>
  );
}

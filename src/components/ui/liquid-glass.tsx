"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

const LiquidGlass = React.forwardRef<HTMLDivElement, LiquidGlassProps>(
  ({ children, className, intensity = "medium", ...props }, ref) => {
    const blurMap = {
      low: "backdrop-blur-sm",
      medium: "backdrop-blur-md",
      high: "backdrop-blur-xl",
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden rounded-2xl",
          "bg-white/10 dark:bg-black/20",
          "border border-white/20 dark:border-white/10",
          blurMap[intensity],
          "shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
          "before:absolute before:inset-0 before:rounded-2xl",
          "before:bg-gradient-to-br before:from-white/20 before:to-transparent",
          "before:pointer-events-none",
          className
        )}
        {...props}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-white/5 pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  }
)

LiquidGlass.displayName = "LiquidGlass"

export { LiquidGlass }

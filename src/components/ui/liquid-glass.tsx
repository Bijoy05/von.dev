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
      low: "backdrop-blur-lg",
      medium: "backdrop-blur-xl",
      high: "backdrop-blur-2xl",
    }

    const bgMap = {
      low: "bg-white/5",
      medium: "bg-white/8",
      high: "bg-white/10",
    }

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={cn(
          "relative overflow-hidden rounded-2xl",
          bgMap[intensity],
          "border border-white/8",
          blurMap[intensity],
          "shadow-[0_8px_40px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.08)]",
          className
        )}
        {...props}
      >
        {/* Soft top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
        
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/3 via-transparent to-transparent pointer-events-none" />
        
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  }
)

LiquidGlass.displayName = "LiquidGlass"

export { LiquidGlass }

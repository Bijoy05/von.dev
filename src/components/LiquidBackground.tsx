"use client"

import { MeshGradient } from "@paper-design/shaders-react"
import { useMode } from "./ModeProvider"
import { useEffect, useState, useRef } from "react"

// Color interpolation helper
function hexToRgb(hex: string): [number, number, number] {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result 
    ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)]
    : [0, 0, 0]
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }).join("")
}

function interpolateColor(color1: string, color2: string, t: number): string {
  const rgb1 = hexToRgb(color1)
  const rgb2 = hexToRgb(color2)
  const r = rgb1[0] + (rgb2[0] - rgb1[0]) * t
  const g = rgb1[1] + (rgb2[1] - rgb1[1]) * t
  const b = rgb1[2] + (rgb2[2] - rgb1[2]) * t
  return rgbToHex(r, g, b)
}

function interpolateColors(colors1: string[], colors2: string[], t: number): string[] {
  return colors1.map((c1, i) => interpolateColor(c1, colors2[i], t))
}

// Target colors for each mode
const DESIGNER_COLORS = ["#1a237e", "#ec407a", "#ff9800", "#1a237e"] // Dark blue, Pink, Orange
const DEVELOPER_COLORS = ["#000000", "#1a237e", "#7c4dff", "#000000"] // Black, Dark blue, Purple

export function LiquidBackground({ className }: { className?: string }) {
  const { mode } = useMode()
  const [displayColors, setDisplayColors] = useState(
    mode === "designer" ? DESIGNER_COLORS : DEVELOPER_COLORS
  )
  const animationRef = useRef<number | null>(null)
  const previousModeRef = useRef(mode)

  useEffect(() => {
    // Skip if mode hasn't changed
    if (previousModeRef.current === mode) return
    previousModeRef.current = mode

    const targetColors = mode === "designer" ? DESIGNER_COLORS : DEVELOPER_COLORS
    const startColors = [...displayColors]
    const duration = 1500 // 1.5 seconds for smooth transition
    const startTime = performance.now()

    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smoother animation (ease-in-out)
      const eased = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2

      const interpolated = interpolateColors(startColors, targetColors, eased)
      setDisplayColors(interpolated)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mode])

  return (
    <div className={`absolute inset-0 bg-black ${className || ""}`}>
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={displayColors}
        speed={1.0}
      />
    </div>
  )
}

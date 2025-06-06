"use client"

import { useEffect, useState } from "react"

// Define constants for easier tuning and readability
const TRAIL_LENGTH = 20; // Number of trail elements
const TRANSITION_DURATION = 0.2; // s

// Trail element sizing
const MIN_TRAIL_SIZE_PX = 1;
const MAX_TRAIL_SIZE_PX = 32; // Making it significantly larger

// Trail element opacity (overall fading)
const MIN_TRAIL_OPACITY = 0.05; // Make the tail end less transparent
const MAX_TRAIL_OPACITY = 0.9; // Making the head more solid

// Trail element background fill (blue part)
const MIN_BACKGROUND_ALPHA = 0.05; // Slightly visible at the tail
const MAX_BACKGROUND_ALPHA = 0.15; // Less transparent at the head, but still somewhat translucent

// Box shadow (glow)
const MIN_SHADOW_BLUR_PX = 12; // Minimum glow even for small circles
const MAX_SHADOW_BLUR_PX = 160; // More spread out glow
const MIN_SHADOW_ALPHA = 0.2; // Faint glow at the tail
const MAX_SHADOW_ALPHA = 0.4; // More intense glow at the head

export function EnhancedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      // setMousePosition(newPosition) // UNCOMMENTED THIS LINE (was commented in your provided code)

      // Add to trail
      setTrail((prevTrail) => {
        // Keep last `TRAIL_LENGTH` positions
        const newTrail = [...prevTrail, { x: newPosition.x, y: newPosition.y, id: trailId++ }].slice(-TRAIL_LENGTH);
        return newTrail
      })

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")

      // setIsHovering(isInteractive)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {/* Main Cursor - RENDERED FIRST AND GIVEN A HIGHER Z-INDEX */}
      <div
        className="absolute rounded-full transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: "translate(-50%, -50%)",
          width: isHovering ? "40px" : "30px",
          height: isHovering ? "40px" : "30px",
          border: "2px solid #3b82f6",
          boxShadow: isHovering ? "0 0 20px rgba(59, 130, 246, 0.8)" : "0 0 15px rgba(59, 130, 246, 0.6)",
          backgroundColor: isHovering ? "rgba(59, 130, 246, 0.2)" : "transparent",
          zIndex: 2, // Main cursor on top of trail (higher z-index)
        }}
      />

      {/* Trail Effect - RENDERED AFTER, GIVEN A LOWER Z-INDEX */}
      {trail.map((point, index) => {
        const progress = (index + 1) / TRAIL_LENGTH; // Progress from ~0 (first element) to 1 (last element)

        const currentSize = MIN_TRAIL_SIZE_PX + (MAX_TRAIL_SIZE_PX - MIN_TRAIL_SIZE_PX) * progress;
        const currentOpacity = MIN_TRAIL_OPACITY + (MAX_TRAIL_OPACITY - MIN_TRAIL_OPACITY) * progress;
        const currentBgAlpha = MIN_BACKGROUND_ALPHA + (MAX_BACKGROUND_ALPHA - MIN_BACKGROUND_ALPHA) * progress;
        const currentBlur = MIN_SHADOW_BLUR_PX + (MAX_SHADOW_BLUR_PX - MIN_SHADOW_BLUR_PX) * progress;
        const currentShadowAlpha = MIN_SHADOW_ALPHA + (MAX_SHADOW_ALPHA - MIN_SHADOW_ALPHA) * progress;

        return (
          <div
            key={point.id}
            className="absolute rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: `${currentSize}px`,
              height: `${currentSize}px`,
              opacity: currentOpacity,
              transform: `translate(-50%, -50%)`,
              background: `rgba(59, 130, 246, ${currentBgAlpha})`,
              boxShadow: `0 0 ${currentBlur}px rgba(59, 130, 246, ${currentShadowAlpha})`,
              transition: `width ${TRANSITION_DURATION}s ease-out, height ${TRANSITION_DURATION}s ease-out, opacity ${TRANSITION_DURATION}s ease-out, background ${TRANSITION_DURATION}s ease-out, box-shadow ${TRANSITION_DURATION}s ease-out`,
              zIndex: 1, // Trail circles below main cursor (lower z-index)
            }}
          />
        );
      })}
    </div>
  )
}
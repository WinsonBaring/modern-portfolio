"use client"

import { useEffect, useState } from "react"

export function EnhancedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(newPosition)

      // Add to trail
      setTrail((prevTrail) => {
        const newTrail = [...prevTrail, { x: newPosition.x, y: newPosition.y, id: trailId++ }].slice(-20) // Keep last 20 positions
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

      setIsHovering(isInteractive)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Trail Effect - More visible now */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: point.x,
            top: point.y,
            opacity: ((index + 1) / trail.length) * 0.7,
            transform: `translate(-50%, -50%) scale(${(index + 1) / trail.length})`,
            background: `rgba(59, 130, 246, ${((index + 1) / trail.length) * 0.8})`,
            boxShadow: `0 0 ${8 * ((index + 1) / trail.length)}px rgba(59, 130, 246, ${
              ((index + 1) / trail.length) * 0.8
            })`,
            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
          }}
        />
      ))}

      {/* Main Cursor */}
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
        }}
      />
    </div>
  )
}

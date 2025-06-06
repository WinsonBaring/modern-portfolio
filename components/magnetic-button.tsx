"use client"

import type React from "react"
import { redirect, usePathname } from 'next/navigation'
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  [key: string]: any
}

export function MagneticButton({ children, className = "",href, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.3
    const deltaY = (e.clientY - centerY) * 0.3

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }
  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      window.open(href, "_blank")
    }
  }

  return (
    <Button
      ref={ref}
      className={`transition-transform duration-300 ease-out hover:scale-105 ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  )
}

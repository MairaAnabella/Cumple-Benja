"use client"

import { useEffect, useState } from "react"

interface ConfettiPiece {
  id: number
  left: number
  backgroundColor: string
  animationDuration: number
  animationDelay: number
}

export function Confetti() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    const colors = [
      "rgb(255, 105, 180)", // pink
      "rgb(255, 215, 0)", // gold
      "rgb(135, 206, 250)", // sky blue
      "rgb(144, 238, 144)", // light green
      "rgb(221, 160, 221)", // plum
    ]

    const pieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      animationDuration: 3 + Math.random() * 3,
      animationDelay: Math.random() * 2,
    }))

    setConfetti(pieces)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.backgroundColor,
            animationDuration: `${piece.animationDuration}s`,
            animationDelay: `${piece.animationDelay}s`,
          }}
        />
      ))}
    </div>
  )
}

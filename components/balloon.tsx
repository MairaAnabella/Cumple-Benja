"use client"

interface BalloonProps {
  color: string
  delay: number
  left: string
}

export function Balloon({ color, delay, left }: BalloonProps) {
  return (
    <div
      className="absolute animate-float"
      style={{
        left,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="relative">
        <div
          className="w-16 h-20 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `inset -10px -10px 20px rgba(0, 0, 0, 0.1)`,
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 w-0.5 h-12 bg-foreground/20"
          style={{
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </div>
  )
}

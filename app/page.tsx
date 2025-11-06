"use client"

import { useEffect, useState } from "react"
import { Confetti } from "@/components/confetti"
import { Balloon } from "@/components/balloon"
import { BirthdayCake } from "@/components/birthday-cake"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BirthdayPage() {
  const [showContent, setShowContent] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100)
    setTimeout(() => setShowConfetti(true), 500)
  }, [])

  const balloons = [
    { color: "#FF69B4", delay: 0, left: "10%" },
    { color: "#FFD700", delay: 0.5, left: "25%" },
    { color: "#87CEEB", delay: 1, left: "75%" },
    { color: "#90EE90", delay: 1.5, left: "90%" },
    { color: "#DDA0DD", delay: 0.8, left: "50%" },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      {showConfetti && <Confetti />}

      {/* Balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {balloons.map((balloon, i) => (
          <Balloon key={i} color={balloon.color} delay={balloon.delay} left={balloon.left} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Title */}
          <div className="space-y-4 animate-bounce-in">
            <h1 className="text-6xl md:text-8xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ¡Feliz Cumpleaños!
              </span>
            </h1>
            <p className="text-2xl md:text-4xl font-semibold text-foreground/80">🎉 ¡Te Quiero Mucho Niño Odisoso! 🎊</p>
          </div>

          {/* Cake */}
          <div className="flex justify-center my-12">
            <BirthdayCake />
          </div>

          {/* Message card */}
          <Card className="max-w-2xl mx-auto p-8 bg-card/80 backdrop-blur-sm animate-bounce-in shadow-2xl">
            <div className="space-y-4 text-center">
              <p className="text-xl md:text-2xl font-medium text-card-foreground leading-relaxed">
                Espero tengas un hermoso dia! 🎁​
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Te mereces todo lo mejor del mundo, nunca dudes de vos!<br/>
                Gracias por ser parte de mi vida,<br/> vamos por unos drinks🍻​? 🎂✨
              </p>
            </div>
          </Card>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 animate-pulse-glow"
              onClick={() => setShowConfetti(!showConfetti)}
            >
              🎊 {showConfetti ? "Detener" : "Más"} Confeti
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
              onClick={() => window.location.reload()}
            >
              🔄 Reiniciar Celebración
            </Button>
          </div>

          {/* Decorative emojis */}
          <div className="flex justify-center gap-6 text-5xl pt-8 flex-wrap">
            <span className="animate-bounce" style={{ animationDelay: "0s" }}>
              🎈
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>
              🎁
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
              🎂
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
              🎉
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
              🎊
            </span>
            <span className="animate-bounce" style={{ animationDelay: "0.5s" }}>
              🥳
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}

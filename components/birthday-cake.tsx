"use client"

import { useState } from "react"

export function BirthdayCake() {
  const [isLit, setIsLit] = useState(true)

  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-0">
        {/* Candles */}
        <div className="flex gap-4 mb-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center">
              {isLit && (
                <div
                  className="w-3 h-6 mb-1"
                  style={{
                    background: "linear-gradient(to top, orange, yellow, transparent)",
                    borderRadius: "50% 50% 0 0",
                    animation: "flicker 0.3s infinite alternate",
                  }}
                />
              )}
              <div className="w-2 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-sm" />
            </div>
          ))}
        </div>

        {/* Cake layers */}
        <div className="w-48 h-12 bg-gradient-to-b from-pink-400 to-pink-500 rounded-t-lg border-4 border-pink-600 flex items-center justify-center">
          <div className="flex gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-1 h-6 bg-white/50 rounded-full" />
            ))}
          </div>
        </div>
        <div className="w-56 h-16 bg-gradient-to-b from-purple-400 to-purple-500 rounded-lg border-4 border-purple-600 flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1.5 h-8 bg-white/50 rounded-full" />
            ))}
          </div>
        </div>
        <div className="w-64 h-20 bg-gradient-to-b from-blue-400 to-blue-500 rounded-b-lg border-4 border-blue-600 flex items-center justify-center">
          <div className="flex gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-10 bg-white/50 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsLit(!isLit)}
        className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
      >
        {isLit ? "🌬️ Soplar velas" : "🔥 Encender velas"}
      </button>

      <style jsx>{`
        @keyframes flicker {
          0% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0.8; transform: scaleY(0.95); }
        }
      `}</style>
    </div>
  )
}

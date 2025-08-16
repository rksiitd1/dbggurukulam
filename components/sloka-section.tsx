"use client"

import { useEffect, useRef, useState } from "react"

export function SlokaSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const particles = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${3 + Math.random() * 2}s`,
      }}
    />
  ))

  return (
    <section
      ref={sectionRef}
      className="relative py-8 md:py-11 overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background"
    >
      <div className="absolute inset-0">
        {/* Primary radial light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse" />

        {/* Secondary light rings */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-secondary/15 via-primary/5 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-radial from-primary/10 via-secondary/5 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Floating particles */}
        <div className="particles-container">{particles}</div>

        <div className="absolute top-16 left-16 w-20 h-20 opacity-5">
          <svg
            viewBox="0 0 80 80"
            className="w-full h-full text-foreground animate-spin"
            style={{ animationDuration: "30s" }}
          >
            <circle cx="40" cy="40" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" />
            {/* Radial lines */}
            {Array.from({ length: 8 }, (_, i) => (
              <line
                key={i}
                x1="40"
                y1="5"
                x2="40"
                y2="75"
                stroke="currentColor"
                strokeWidth="0.3"
                transform={`rotate(${i * 45} 40 40)`}
              />
            ))}
          </svg>
        </div>

        <div className="absolute bottom-16 right-16 w-16 h-16 opacity-5">
          <svg
            viewBox="0 0 64 64"
            className="w-full h-full text-secondary animate-spin"
            style={{ animationDuration: "25s", animationDirection: "reverse" }}
          >
            <circle cx="32" cy="32" r="28" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="32" cy="32" r="12" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="absolute top-20 left-1/3 w-12 h-12 opacity-10">
          <svg viewBox="0 0 48 48" className="w-full h-full text-primary animate-float">
            <path
              d="M24 8c-3 0-6 3-6 9s3 9 6 9 6-3 6-9-3-9-6-9zm0 0c0-3 3-6 9-6s9 3 9 6-3 6-9 6-9-3-9-6zm0 0c3 0 6-3 6-9s-3-9-6-9-6 3-6 9 3 9 6 9zm0 0c0 3-3 6-9 6s-9-3-9-6 3-6 9-6 9 3 9 6z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="absolute bottom-24 right-1/3 w-10 h-10 opacity-8">
          <svg
            viewBox="0 0 40 40"
            className="w-full h-full text-secondary animate-float"
            style={{ animationDelay: "3s" }}
          >
            <path
              d="M20 6c-2 0-4 2-4 6s2 6 4 6 4-2 4-6-2-6-4-6zm0 0c0-2 2-4 6-4s6 2 6 4-2 4-6 4-6-2-6-4zm0 0c2 0 4-2 4-6s-2-6-4-6-4 2-4 6 2 6 4 6zm0 0c0 2-2 4-6 4s-6-2-6-4 2-4 6-4 6 2 6 4z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`mb-8 md:mb-12 transition-all duration-2000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {/* Sacred symbol above */}
            <div className="mb-6 md:mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 backdrop-blur-sm">
                <span className="text-2xl md:text-3xl text-primary animate-pulse font-bold">ॐ</span>
              </div>
            </div>

            {/* Main sloka with enhanced styling */}
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent rounded-2xl blur-sm"></div>

              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/20 p-8 md:p-12 shadow-2xl">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed text-foreground mb-6 md:mb-8 tracking-wide">
                  <div className="mb-3 md:mb-4 hover:text-primary transition-all duration-700 hover:scale-105 cursor-default">
                    असतो मा सद्गमय। तमसो मा ज्योतिर्गमय।
                  </div>
                  <div className="mb-3 md:mb-4 hover:text-secondary transition-all duration-700 hover:scale-105 cursor-default">
                    मृत्योर्मा अमृतं गमय। ॐ शान्ति शान्ति शान्तिः॥
                  </div>
                </div>

                <div className="flex items-center justify-center mb-6 md:mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 md:w-40"></div>
                  <div className="mx-3 md:mx-6 flex space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    <div
                      className="w-2 h-2 bg-secondary rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-primary rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-20 md:w-40"></div>
                </div>

                {/* English translation with enhanced styling */}
                <div className="font-sans text-lg sm:text-xl md:text-2xl leading-relaxed text-muted-foreground mb-6 md:mb-8 max-w-3xl mx-auto">
                  <div className="mb-2 md:mb-3 hover:text-primary transition-colors duration-500 italic">
                    "Lead me from untruth to truth, Lead me from darkness to light,
                  </div>
                  <div className="mb-2 md:mb-3 hover:text-secondary transition-colors duration-500 italic">
                    Lead me from death to immortality, Om Peace, Peace, Peace."
                  </div>
                </div>

                <p className="font-sans text-sm md:text-base text-muted-foreground italic opacity-75">
                  — Brihadaranyaka Upanishad
                </p>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-2000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "1000ms" }}
          >
            <div className="flex justify-center space-x-8 md:space-x-12">
              {["🕉️", "🪷", "✨"].map((symbol, index) => (
                <div
                  key={index}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform duration-500 cursor-default"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <span className="text-xl md:text-2xl opacity-60 hover:opacity-100 transition-opacity duration-300">
                    {symbol}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in [data-animate] {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}

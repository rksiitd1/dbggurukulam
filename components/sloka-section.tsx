"use client"

import { useEffect, useRef } from "react"

export function SlokaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-8 md:py-11 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50"
    >
      {/* Ethereal background elements */}
      <div className="absolute inset-0">
        {/* Radial light effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-amber-200/30 via-orange-200/20 to-transparent rounded-full blur-3xl animate-pulse" />

        {/* Floating lotus petals */}
        <div className="absolute top-20 left-20 w-8 h-8 opacity-20">
          <svg viewBox="0 0 32 32" className="w-full h-full text-amber-600 animate-float">
            <path
              d="M16 4c-2 0-4 2-4 6s2 6 4 6 4-2 4-6-2-6-4-6zm0 0c0-2 2-4 6-4s6 2 6 4-2 4-6 4-6-2-6-4zm0 0c2 0 4-2 4-6s-2-6-4-6-4 2-4 6 2 6 4 6zm0 0c0 2-2 4-6 4s-6-2-6-4 2-4 6-4 6 2 6 4z"
              fill="currentColor"
              className="animate-draw-lotus"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 right-20 w-6 h-6 opacity-15">
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full text-teal-700 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <path
              d="M12 2C8 2 6 6 6 10c0 4 2 8 6 8s6-4 6-8c0-4-2-8-6-8z"
              fill="currentColor"
              className="animate-draw-paisley"
            />
          </svg>
        </div>

        {/* Sacred geometry patterns */}
        <div className="absolute top-32 right-32 w-12 h-12 opacity-10">
          <svg
            viewBox="0 0 48 48"
            className="w-full h-full text-slate-400 animate-spin"
            style={{ animationDuration: "20s" }}
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-draw-mandala"
            />
            <circle
              cx="24"
              cy="24"
              r="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-draw-mandala"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="24"
              cy="24"
              r="6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="animate-draw-mandala"
              style={{ animationDelay: "2s" }}
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Sanskrit Sloka */}
          <div
            className="mb-6 md:mb-8 opacity-0 translate-y-8 transition-all duration-1000 delay-300"
            data-animate="sloka"
          >
            <div className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed text-slate-800 mb-4 md:mb-6 tracking-wide">
              <div className="mb-2 md:mb-3 hover:text-amber-700 transition-colors duration-500">
                असतो मा सद्गमय। तमसो मा ज्योतिर्गमय।
              </div>
              <div className="mb-2 md:mb-3 hover:text-teal-700 transition-colors duration-500">
                मृत्योर्मा अमृतं गमय। ॐ शान्ति शान्ति शान्तिः॥
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="flex items-center justify-center mb-4 md:mb-6 opacity-0 translate-y-8 transition-all duration-1000 delay-500"
            data-animate="divider"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-16 md:w-32"></div>
            <div className="mx-2 md:mx-4 w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent w-16 md:w-32"></div>
          </div>

          {/* English Translation */}
          <div className="opacity-0 translate-y-8 transition-all duration-1000 delay-700" data-animate="translation">
            <div className="font-sans text-base sm:text-lg md:text-xl leading-relaxed text-slate-700 mb-4 md:mb-6 max-w-2xl mx-auto">
              <div className="mb-1 md:mb-2 hover:text-amber-700 transition-colors duration-300">
                "Lead me from untruth to truth, Lead me from darkness to light,
              </div>
              <div className="mb-1 md:mb-2 hover:text-teal-700 transition-colors duration-300">
                Lead me from death to immortality, Om Peace, Peace, Peace."
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm md:text-base text-slate-600 italic">
              — Brihadaranyaka Upanishad
            </p>
          </div>

          {/* Sacred symbol */}
          <div
            className="mt-6 md:mt-8 opacity-0 translate-y-8 transition-all duration-1000 delay-1000"
            data-animate="symbol"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 border border-amber-300">
              <span className="text-xl md:text-2xl text-amber-700 animate-pulse">ॐ</span>
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

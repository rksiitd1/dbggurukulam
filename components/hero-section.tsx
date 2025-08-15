"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/gurukulam-courtyard.png"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-temple-stone/40"></div>
      </div>

      {/* Animated Particles Overlay */}
      <div className="absolute inset-0 z-10">
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Main Headline */}
        <div
          className={`transition-all duration-2000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-rishi text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-manuscript mb-6 leading-tight">
            Divya Bihar Global
            <br />
            <span className="text-marigold-gold">Gurukulam</span>
          </h1>
        </div>

        {/* Tagline */}
        <div
          className={`transition-all duration-2000 ease-out delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-scribe text-xl sm:text-2xl md:text-3xl text-manuscript/90 mb-12 font-light">
            Where Ancient Soul Meets Modern Mind
          </p>
        </div>

        {/* Call-to-Action Buttons */}
        <div
          className={`transition-all duration-2000 ease-out delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="group bg-marigold-gold hover:bg-marigold-gold/90 text-temple-stone font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-marigold-gold/30 hover:scale-105 min-w-[280px]"
            >
              <span className="relative z-10">The Path of Foundation</span>
              <span className="block text-sm font-normal opacity-80">(Gurukulam N–8)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-marigold-gold to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Button>

            <Button
              size="lg"
              className="group bg-peacock-teal hover:bg-peacock-teal/90 text-manuscript font-semibold px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-2xl hover:shadow-peacock-teal/30 hover:scale-105 min-w-[280px]"
            >
              <span className="relative z-10">The Path of Excellence</span>
              <span className="block text-sm font-normal opacity-80">(Shri Classes 9–12)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-peacock-teal to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-manuscript/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-manuscript/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

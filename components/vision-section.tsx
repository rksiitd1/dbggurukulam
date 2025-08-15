"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"

export function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlightWords = (text: string) => {
    const keywords = ["success", "impact", "serve", "knowledge", "wisdom", "dharma", "excellence"]
    let highlightedText = text

    keywords.forEach((keyword) => {
      const regex = new RegExp(`\\b${keyword}\\b`, "gi")
      highlightedText = highlightedText.replace(regex, `<span class="highlight-word">${keyword}</span>`)
    })

    return highlightedText
  }

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="py-20 lg:py-32 bg-gradient-to-br from-manuscript to-muted overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Portrait */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Golden Aura Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-marigold-gold/20 to-peacock-teal/20 rounded-2xl blur-xl animate-pulse"></div>

              {/* Portrait Container */}
              <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
                <img
                  src="/shri-mukund-agrawal.png"
                  alt="Shri Mukund Agrawal - Founder & Acharya"
                  className="w-full h-auto rounded-xl object-cover"
                />

                {/* Subtle Glow Overlay */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-transparent via-transparent to-marigold-gold/10 pointer-events-none"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-marigold-gold rounded-full animate-float opacity-60"></div>
              <div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-peacock-teal rounded-full animate-float opacity-40"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>

          {/* Right Side - Philosophy */}
          <div
            className={`transition-all duration-1000 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-8">
              {/* Section Title */}
              <div>
                <h2 className="text-rishi text-4xl lg:text-5xl text-temple-stone mb-4">
                  The <span className="text-marigold-gold">Sankalp</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-marigold-gold to-peacock-teal rounded-full"></div>
              </div>

              {/* Philosophy Text */}
              <div className="space-y-6">
                <div
                  className="text-scribe text-lg lg:text-xl text-temple-stone/90 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightWords(
                      "Education is not merely the transfer of information, but the transformation of consciousness. At Divya Bihar Global Gurukulam, we believe that true success comes from the harmonious development of mind, body, and spirit.",
                    ),
                  }}
                />

                <div
                  className="text-scribe text-lg lg:text-xl text-temple-stone/90 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightWords(
                      "Our mission is to create global citizens who carry the wisdom of ancient dharma while embracing modern innovation. We serve not just to educate, but to awaken the divine potential within each student, creating lasting impact on society.",
                    ),
                  }}
                />

                <div
                  className="text-scribe text-lg lg:text-xl text-temple-stone/90 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: highlightWords(
                      "Through the synthesis of traditional knowledge and contemporary excellence, we prepare young minds to lead with integrity, serve with compassion, and achieve with purpose.",
                    ),
                  }}
                />
              </div>

              {/* Founder Attribution */}
              <div className="border-l-4 border-marigold-gold pl-6 py-4 bg-white/50 rounded-r-lg">
                <p className="text-scribe text-temple-stone font-medium text-lg">Shri Mukund Agrawal</p>
                <p className="text-scribe text-peacock-teal text-sm font-medium">Founder & Acharya</p>
              </div>

              {/* Call-to-Action Link */}
              <div className="pt-4">
                <a
                  href="#about"
                  className="group inline-flex items-center space-x-3 text-peacock-teal hover:text-marigold-gold transition-colors duration-300 text-lg font-medium"
                >
                  <span>Meet our Acharya & The Mission</span>
                  <ArrowRight
                    size={20}
                    className="transform group-hover:translate-x-2 transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

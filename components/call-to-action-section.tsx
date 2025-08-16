"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Users, MessageCircle } from "lucide-react"

interface ActionCard {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  color: string
  pattern: string
}

const actionCards: ActionCard[] = [
  {
    id: "donate",
    title: "Support the Yajna",
    subtitle: "Contribute to Knowledge",
    description:
      "Join us in nurturing the sacred fire of education. Your contribution helps us provide quality education to deserving students and preserve ancient wisdom for future generations.",
    icon: <Heart size={32} />,
    color: "marigold-gold",
    pattern: "lotus",
  },
  {
    id: "volunteer",
    title: "Offer Seva",
    subtitle: "Serve with Purpose",
    description:
      "Share your knowledge and skills with our community. Whether teaching, mentoring, or supporting operations, your seva creates ripples of positive change.",
    icon: <Users size={32} />,
    color: "peacock-teal",
    pattern: "paisley",
  },
  {
    id: "contact",
    title: "Begin a Dialogue",
    subtitle: "Connect with Us",
    description:
      "Start a conversation about your educational journey. Whether you're a student, parent, or educator, we're here to guide you on the path of holistic learning.",
    icon: <MessageCircle size={32} />,
    color: "temple-stone",
    pattern: "mandala",
  },
]

export function CallToActionSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <section className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-muted to-manuscript relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23212121' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-rishi text-2xl sm:text-3xl lg:text-6xl text-temple-stone mb-4 sm:mb-6">
            The <span className="text-marigold-gold">Aahvan</span>
          </h2>
          <p className="text-scribe text-base sm:text-lg lg:text-xl text-temple-stone/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Answer the call to be part of something greater. Choose your path to contribute to the eternal flow of
            knowledge and wisdom.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {actionCards.map((card, index) => (
            <div
              key={card.id}
              className={`group relative transform transition-all duration-700 ease-out hover:scale-105 ${
                hoveredCard === card.id ? "translate-y-[-20px]" : ""
              }`}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative h-80 sm:h-96 lg:h-[500px] bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200 group-hover:border-marigold-gold/30 transition-all duration-500">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {card.pattern === "lotus" && (
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="lotus-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                          <path
                            d="M50 20 C30 30, 30 50, 50 60 C70 50, 70 30, 50 20 Z M50 60 C30 70, 30 90, 50 100 C70 90, 70 70, 50 60 Z"
                            fill="none"
                            stroke="#ffb830"
                            strokeWidth="1"
                            opacity="0.3"
                            className="animate-draw-lotus"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#lotus-pattern)" />
                    </svg>
                  )}

                  {card.pattern === "paisley" && (
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern id="paisley-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                          <path
                            d="M40 10 C20 10, 10 25, 15 40 C20 55, 35 60, 45 50 C55 40, 50 25, 40 10 Z"
                            fill="none"
                            stroke="#0a8785"
                            strokeWidth="1"
                            opacity="0.3"
                            className="animate-draw-paisley"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#paisley-pattern)" />
                    </svg>
                  )}

                  {card.pattern === "mandala" && (
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="mandala-pattern"
                          x="0"
                          y="0"
                          width="100"
                          height="100"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle
                            cx="50"
                            cy="50"
                            r="20"
                            fill="none"
                            stroke="#212121"
                            strokeWidth="1"
                            opacity="0.2"
                            className="animate-draw-mandala"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="10"
                            fill="none"
                            stroke="#212121"
                            strokeWidth="1"
                            opacity="0.2"
                            className="animate-draw-mandala"
                          />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#mandala-pattern)" />
                    </svg>
                  )}
                </div>

                {/* Content */}
                <div className="relative z-10 p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${
                      card.color === "marigold-gold"
                        ? "bg-marigold-gold text-temple-stone"
                        : card.color === "peacock-teal"
                          ? "bg-peacock-teal text-manuscript"
                          : "bg-temple-stone text-manuscript"
                    } ${hoveredCard === card.id ? "scale-110 shadow-lg" : ""}`}
                  >
                    <div className="scale-75 sm:scale-90 lg:scale-100">{card.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-rishi text-xl sm:text-2xl lg:text-3xl text-temple-stone mb-2">{card.title}</h3>
                  <p
                    className={`text-scribe text-sm sm:text-base font-semibold mb-3 sm:mb-4 ${
                      card.color === "marigold-gold"
                        ? "text-marigold-gold"
                        : card.color === "peacock-teal"
                          ? "text-peacock-teal"
                          : "text-temple-stone"
                    }`}
                  >
                    {card.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-scribe text-sm sm:text-base text-temple-stone/80 leading-relaxed mb-4 sm:mb-6 lg:mb-8 flex-grow">
                    {card.description}
                  </p>

                  {/* CTA Button */}
                  <Button
                    className={`w-full text-sm sm:text-base transition-all duration-300 ${
                      card.color === "marigold-gold"
                        ? "bg-marigold-gold hover:bg-marigold-gold/90 text-temple-stone"
                        : card.color === "peacock-teal"
                          ? "bg-peacock-teal hover:bg-peacock-teal/90 text-manuscript"
                          : "bg-temple-stone hover:bg-temple-stone/90 text-manuscript"
                    } ${hoveredCard === card.id ? "shadow-xl scale-105" : ""}`}
                  >
                    {card.id === "donate" && "Make a Contribution"}
                    {card.id === "volunteer" && "Join Our Mission"}
                    {card.id === "contact" && "Start Conversation"}
                  </Button>
                </div>

                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl sm:rounded-3xl transition-all duration-500 pointer-events-none ${
                    hoveredCard === card.id
                      ? card.color === "marigold-gold"
                        ? "shadow-2xl shadow-marigold-gold/20"
                        : card.color === "peacock-teal"
                          ? "shadow-2xl shadow-peacock-teal/20"
                          : "shadow-2xl shadow-temple-stone/20"
                      : ""
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <p className="text-scribe text-temple-stone/60 text-sm sm:text-base lg:text-lg px-4 sm:px-0">
            Every contribution, every act of service, every conversation plants seeds for a brighter future.
          </p>
          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="flex space-x-2">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-marigold-gold rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

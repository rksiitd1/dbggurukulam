"use client"

import { useEffect, useRef } from "react"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in-element")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-manuscript to-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="fade-in-element opacity-0 transition-all duration-1000">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                What is{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent">
                  DBG Gurukulam
                </span>
                ?
              </h2>
            </div>

            <div className="fade-in-element opacity-0 transition-all duration-1000 delay-200">
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Divya Bihar Global Gurukulam is where ancient wisdom meets modern excellence. We blend the time-honored
                gurukul tradition of holistic education with contemporary academic rigor, creating an environment where
                young minds flourish.
              </p>
            </div>

            <div className="fade-in-element opacity-0 transition-all duration-1000 delay-400">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">N-8</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Gurukulam Foundation</h3>
                  <p className="text-slate-600 text-sm">Building strong foundations with values-based learning</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">9-12</span>
                  </div>
                  <h3 className="font-semibold text-slate-800 mb-2">Shri Classes</h3>
                  <p className="text-slate-600 text-sm">Excellence in academics with character development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="fade-in-element opacity-0 transition-all duration-1000 delay-600">
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 border border-amber-200">
                <h3 className="font-serif text-2xl font-bold text-slate-800 mb-6">Our Educational Philosophy</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Holistic Development:</strong> Nurturing mind, body, and spirit through integrated
                      learning
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Value-Based Education:</strong> Instilling dharmic values alongside academic excellence
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Individual Attention:</strong> Personalized learning paths for every student
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-700">
                      <strong>Modern Methodology:</strong> Innovative teaching techniques with traditional wisdom
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

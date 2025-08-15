"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen, Atom, Calculator, Globe, Microscope, Palette, Music, Lightbulb } from "lucide-react"

export function KnowledgeHub() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const subjects = [
    {
      name: "Physics",
      icon: <Atom className="w-8 h-8" />,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      borderColor: "border-blue-400/30",
    },
    {
      name: "Mathematics",
      icon: <Calculator className="w-8 h-8" />,
      color: "text-amber-400",
      bgColor: "bg-amber-500/20",
      borderColor: "border-amber-400/30",
    },
    {
      name: "Chemistry",
      icon: <Microscope className="w-8 h-8" />,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/20",
      borderColor: "border-emerald-400/30",
    },
    {
      name: "Biology",
      icon: <Globe className="w-8 h-8" />,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      borderColor: "border-green-400/30",
    },
    {
      name: "Sanskrit",
      icon: <BookOpen className="w-8 h-8" />,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-400/30",
    },
    {
      name: "Arts",
      icon: <Palette className="w-8 h-8" />,
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      borderColor: "border-pink-400/30",
    },
    {
      name: "Music",
      icon: <Music className="w-8 h-8" />,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      borderColor: "border-purple-400/30",
    },
    {
      name: "Philosophy",
      icon: <Lightbulb className="w-8 h-8" />,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/20",
      borderColor: "border-cyan-400/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="jnana-kosha"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-background to-muted/30 overflow-hidden"
    >
      {/* Celestial Background */}
      <div className="absolute inset-0">
        {/* Dark textured background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background opacity-90"></div>

        {/* Star field effect */}
        <div className="absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-1 h-1 bg-primary/60 rounded-full animate-pulse"></div>
          <div
            className="absolute top-[25%] right-[20%] w-0.5 h-0.5 bg-secondary/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-[60%] left-[25%] w-1.5 h-1.5 bg-accent/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[80%] right-[30%] w-1 h-1 bg-primary/40 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-[40%] right-[15%] w-0.5 h-0.5 bg-secondary/60 rounded-full animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-[70%] left-[10%] w-1 h-1 bg-accent/40 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="rishi-voice text-4xl sm:text-5xl lg:text-6xl text-slate-100 mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Jnana Kosha
            </span>
          </h2>
          <p className="scribe-hand text-xl max-w-3xl mx-auto leading-relaxed text-slate-500">
            A treasury of interconnected knowledge, where every subject opens doorways to wisdom and understanding
          </p>
        </div>

        {/* Simple Subject Grid */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {subjects.map((subject, index) => (
            <div
              key={subject.name}
              className="group text-center transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`w-20 h-20 rounded-full ${subject.bgColor} border-2 ${subject.borderColor} flex items-center justify-center group-hover:border-opacity-60 group-hover:bg-opacity-30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-current/20`}
                >
                  <div className={`${subject.color} group-hover:scale-110 transition-transform duration-300`}>
                    {subject.icon}
                  </div>
                </div>
              </div>
              <h3
                className={`scribe-hand text-lg font-medium group-hover:${subject.color} text-slate-500 transition-colors duration-300`}
              >
                {subject.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Central CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-900 font-semibold px-12 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/25"
          >
            <span className="relative z-10 flex items-center gap-3">
              Enter the Gyan Kosha
              <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <p className="scribe-hand text-slate-500 text-sm mt-4">Explore the interconnected universe of knowledge</p>
        </div>
      </div>
    </section>
  )
}

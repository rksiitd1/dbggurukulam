"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  id: string
  name: string
  role: string
  image: string
  quote: string
  achievement: string
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Arjun Sharma",
    role: "Class 12 Student",
    image: "/placeholder.svg?height=100&width=100&text=AS",
    quote:
      "The Jnana Kosha transformed my understanding of Physics. The interconnected approach helped me see patterns I never noticed before.",
    achievement: "JEE Advanced Rank 47",
  },
  {
    id: "2",
    name: "Priya Patel",
    role: "Parent",
    image: "/placeholder.svg?height=100&width=100&text=PP",
    quote:
      "My daughter's confidence soared after joining the Gurukulam. The blend of ancient wisdom and modern teaching is remarkable.",
    achievement: "Daughter scored 98% in CBSE",
  },
  {
    id: "3",
    name: "Vikram Singh",
    role: "Class 10 Student",
    image: "/placeholder.svg?height=100&width=100&text=VS",
    quote:
      "Sanskrit classes opened a new world for me. I now understand the depth of our cultural heritage while excelling in modern subjects.",
    achievement: "State Sanskrit Olympiad Winner",
  },
  {
    id: "4",
    name: "Meera Gupta",
    role: "Alumni",
    image: "/placeholder.svg?height=100&width=100&text=MG",
    quote:
      "The holistic education at DBG prepared me not just for exams, but for life. The values I learned here guide me every day.",
    achievement: "IIT Delhi Graduate, Now at Google",
  },
  {
    id: "5",
    name: "Rajesh Kumar",
    role: "Parent",
    image: "/placeholder.svg?height=100&width=100&text=RK",
    quote:
      "The personalized attention and innovative teaching methods helped my son overcome his learning challenges beautifully.",
    achievement: "Son improved from 60% to 92%",
  },
  {
    id: "6",
    name: "Ananya Reddy",
    role: "Class 11 Student",
    image: "/placeholder.svg?height=100&width=100&text=AR",
    quote:
      "The Philosophy classes changed my perspective on life. I'm now more focused and purposeful in everything I do.",
    achievement: "National Essay Competition Winner",
  },
]

const stats = [
  { label: "Questions Answered", value: 50000, suffix: "+" },
  { label: "Students Transformed", value: 2500, suffix: "+" },
  { label: "Years of Excellence", value: 15, suffix: "" },
  { label: "Success Rate", value: 98, suffix: "%" },
]

export function ResultsSection() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)
  const [visiblePortraits, setVisiblePortraits] = useState<Set<string>>(new Set())
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({})
  const sectionRef = useRef<HTMLElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const portraitId = entry.target.getAttribute("data-portrait-id")
            if (portraitId) {
              setVisiblePortraits((prev) => new Set([...prev, portraitId]))
            }
          }
        })
      },
      { threshold: 0.3 },
    )

    const portraitElements = document.querySelectorAll("[data-portrait-id]")
    portraitElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          // Animate stats
          stats.forEach((stat, index) => {
            setTimeout(() => {
              let current = 0
              const increment = stat.value / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }
                setAnimatedStats((prev) => ({
                  ...prev,
                  [stat.label]: Math.floor(current),
                }))
              }, 30)
            }, index * 200)
          })
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-manuscript to-muted overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-rishi text-4xl lg:text-6xl text-temple-stone mb-6">
            The <span className="text-peacock-teal">Parinam</span>
          </h2>
          <p className="text-scribe text-xl text-temple-stone/80 max-w-3xl mx-auto leading-relaxed">
            Witness the transformation of thousands of students who have walked the path of knowledge with us. Their
            success stories illuminate the way for future generations.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-marigold-gold/20 hover:border-marigold-gold/40 transition-all duration-300"
            >
              <div className="text-rishi text-3xl lg:text-4xl text-peacock-teal mb-2">
                {animatedStats[stat.label] || 0}
                {stat.suffix}
              </div>
              <div className="text-scribe text-temple-stone/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Dynamic Portrait Wall */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                data-portrait-id={testimonial.id}
                className={`transform transition-all duration-1000 ease-out cursor-pointer group ${
                  visiblePortraits.has(testimonial.id)
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                      ? "opacity-0 -translate-x-12"
                      : "opacity-0 translate-x-12"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onClick={() => setSelectedTestimonial(testimonial)}
              >
                <div className="relative">
                  {/* Portrait */}
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover border-4 border-marigold-gold/30 group-hover:border-marigold-gold transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-marigold-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-rishi text-lg text-temple-stone mb-1">{testimonial.name}</h3>
                    <p className="text-scribe text-peacock-teal text-sm font-medium mb-2">{testimonial.role}</p>
                    <p className="text-scribe text-temple-stone/60 text-xs">{testimonial.achievement}</p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-marigold-gold/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-temple-stone/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-manuscript rounded-3xl p-8 max-w-2xl w-full mx-4 relative animate-in fade-in zoom-in duration-300">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 text-temple-stone hover:text-peacock-teal"
              onClick={() => setSelectedTestimonial(null)}
            >
              <X size={20} />
            </Button>

            <div className="text-center mb-6">
              <img
                src={selectedTestimonial.image || "/placeholder.svg"}
                alt={selectedTestimonial.name}
                className="w-24 h-24 rounded-full object-cover border-4 border-marigold-gold mx-auto mb-4"
              />
              <h3 className="text-rishi text-2xl text-temple-stone mb-2">{selectedTestimonial.name}</h3>
              <p className="text-scribe text-peacock-teal font-medium">{selectedTestimonial.role}</p>
              <p className="text-scribe text-marigold-gold text-sm font-semibold">{selectedTestimonial.achievement}</p>
            </div>

            <blockquote className="text-scribe text-lg text-temple-stone/90 leading-relaxed text-center italic">
              "{selectedTestimonial.quote}"
            </blockquote>

            <div className="flex justify-center mt-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-marigold-gold rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

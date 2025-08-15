"use client"

import { useState, useEffect } from "react"
import { BookOpen, Users, Trophy, Target, ArrowRight, GraduationCap, Lightbulb, Star } from "lucide-react"

export function ShriClassesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("shri-classes")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: BookOpen,
      title: "Advanced Curriculum",
      description: "CBSE-aligned curriculum with emphasis on conceptual understanding and practical application",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Experienced educators dedicated to nurturing academic excellence and character development",
    },
    {
      icon: Trophy,
      title: "Competitive Edge",
      description: "Comprehensive preparation for JEE, NEET, and other competitive examinations",
    },
    {
      icon: Target,
      title: "Holistic Development",
      description: "Balance of academics, sports, arts, and leadership opportunities for complete growth",
    },
  ]

  return (
    <section
      id="shri-classes"
      className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-200 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 border border-indigo-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border border-blue-100 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            Grades 9-12
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Shri Classes</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Where academic excellence meets character formation. Our senior secondary program prepares students for
            competitive success while nurturing wisdom, integrity, and leadership.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-slate-800">The Path of Excellence</h3>
                  <p className="text-blue-600 font-medium">Grades 9-12 • Ages 14-18</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <strong>Academic Rigor:</strong> Advanced CBSE curriculum with specialized streams in Science,
                    Commerce, and Humanities
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <strong>Competitive Preparation:</strong> Integrated coaching for JEE, NEET, CA, and other entrance
                    examinations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-slate-700">
                    <strong>Character Building:</strong> Values-based education rooted in Indian philosophy and modern
                    ethics
                  </p>
                </div>
              </div>

              <button className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:shadow-lg">
                Explore Shri Classes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-indigo-200 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-slate-800 mb-2">{feature.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6" />
              <span className="font-medium">Ready to Excel?</span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">Join Shri Classes Today</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience education that transforms potential into excellence, preparing you for success in academics and
              life.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 hover:shadow-lg">
              Apply for Admission
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

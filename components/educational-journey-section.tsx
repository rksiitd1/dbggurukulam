"use client"

import { BookOpen, Lightbulb, Star, Users, Trophy, Target } from "lucide-react"

export function EducationalJourneySection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, var(--marigold-gold) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, var(--peacock-teal) 1px, transparent 1px)`,
            backgroundSize: "60px 60px, 40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">Our Academic Programs</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Clear pathways to competitive exam success
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            {/* Main DBG Gurukulam Tile */}
            <div className="bg-card border-2 border-peacock-teal/20 hover:border-peacock-teal rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-peacock-teal/10 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-peacock-teal" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-foreground">DBG Gurukulam</h3>
                  <p className="text-peacock-teal font-medium">Foundation Years (N-8)</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">
                Building strong foundations with targeted competitive exam preparation
              </p>
            </div>

            {/* Sub-tiles for DBG Gurukulam */}
            <div className="grid md:grid-cols-2 gap-6 ml-8">
              {/* Class 5th Level Competitions */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-peacock-teal" />
                  <h4 className="text-xl font-serif text-foreground">Class 5th Level</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-peacock-teal" />
                    Navodaya Vidyalaya Entrance
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-peacock-teal" />
                    Simultala Awasiya Vidyalaya
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-peacock-teal" />
                    Sainik School Entrance
                  </div>
                </div>
              </div>

              {/* Class 8th Level Competitions */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-peacock-teal" />
                  <h4 className="text-xl font-serif text-foreground">Class 8th Level</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-peacock-teal" />
                    Rashtriya Avishkar Abhiyan
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Main Shri Classes Tile */}
            <div className="bg-card border-2 border-marigold-gold/20 hover:border-marigold-gold rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-marigold-gold/10 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-marigold-gold" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-foreground">Shri Classes</h3>
                  <p className="text-marigold-gold font-medium">Excellence Years (9-12)</p>
                </div>
              </div>
              <p className="text-muted-foreground text-lg">
                Premier coaching for India's most competitive entrance examinations
              </p>
            </div>

            {/* Sub-tiles for Shri Classes */}
            <div className="grid md:grid-cols-2 gap-6 ml-8">
              {/* JEE Preparation */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Trophy className="w-6 h-6 text-marigold-gold" />
                  <h4 className="text-xl font-serif text-foreground">JEE Preparation</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-marigold-gold" />
                    JEE Main Coaching
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-marigold-gold" />
                    JEE Advanced Training
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-marigold-gold" />
                    Mock Tests & Analysis
                  </div>
                </div>
              </div>

              {/* NEET Preparation */}
              <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-marigold-gold" />
                  <h4 className="text-xl font-serif text-foreground">NEET Preparation</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Star className="w-3 h-3 mr-2 text-marigold-gold" />
                    NEET Medical Entrance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-card border border-border rounded-full px-8 py-4 shadow-lg">
            <Users className="w-15 h-15 md:w-5 md:h-5 text-primary" />
            <span className="text-foreground font-medium">Ready to begin your journey?</span>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium hover:bg-primary/90 transition-colors duration-300">
              Explore Admissions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

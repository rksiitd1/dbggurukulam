"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 bg-manuscript/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 relative">
                <Image src="/logo.svg" alt="DBG Gurukulam Logo" width={64} height={64} className="object-contain" />
              </div>
              <div className="block">
                <h1 className="text-rishi text-lg sm:text-xl lg:text-2xl text-temple-stone leading-tight text-left">
                  Divya Bihar Global
                  <br />
                  <span className="text-peacock-teal">Gurukulam</span>
                </h1>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="https://divyabiharmission.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
            >
              The Mission
            </a>
            <a
              href="#gurukulam"
              className="text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
            >
              The Gurukulam (N–8)
            </a>
            <a
              href="#shri-classes"
              className="text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
            >
              Shri Classes (9–12)
            </a>
            <a
              href="#jnana-kosha"
              className="text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
            >
              The Jnana Kosha
            </a>
            <a
              href="/results"
              className="text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
            >
              Results
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-marigold-gold hover:bg-marigold-gold/90 text-temple-stone font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-marigold-gold/25 animate-glow">
              Begin Your Journey
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-temple-stone hover:text-peacock-teal transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-manuscript border-t border-border">
              <a
                href="/"
                className="block px-3 py-2 text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="https://divyabiharmission.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                The Mission
              </a>
              <a
                href="#gurukulam"
                className="block px-3 py-2 text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                The Gurukulam (N–8)
              </a>
              <a
                href="#shri-classes"
                className="block px-3 py-2 text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Shri Classes (9–12)
              </a>
              <a
                href="#jnana-kosha"
                className="block px-3 py-2 text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                The Jnana Kosha
              </a>
              <a
                href="/results"
                className="block px-3 py-2 text-scribe text-temple-stone hover:text-peacock-teal transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Results
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-marigold-gold hover:bg-marigold-gold/90 text-temple-stone font-semibold px-6 py-3 rounded-lg transition-all duration-300">
                  Begin Your Journey
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-manuscript relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-marigold-gold/5 via-transparent to-peacock-teal/5" />

        {/* Sacred geometry patterns */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255, 184, 48, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 80% 80%, rgba(10, 135, 133, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 10%, rgba(255, 184, 48, 0.05) 0%, transparent 40%)`,
            }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-marigold-gold/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle mandala pattern */}
        <div className="absolute top-10 right-10 w-32 h-32 opacity-[0.03]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-marigold-gold"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-peacock-teal"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-marigold-gold"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-peacock-teal"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-24">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 relative group flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-marigold-gold/20 to-peacock-teal/20 rounded-full blur-sm group-hover:blur-none transition-all duration-500" />
                <Image
                  src="/logo.svg"
                  alt="DBG Gurukulam Logo"
                  width={64}
                  height={64}
                  className="object-contain relative z-10 drop-shadow-lg"
                />
              </div>
              <div>
                <h3 className="font-rishi text-4xl text-marigold-gold bg-gradient-to-r from-marigold-gold via-yellow-400 to-marigold-gold bg-clip-text transition-all duration-300 mb-2">
                  Divya Bihar Global Gurukulam
                </h3>
                <div className="w-32 h-0.5 bg-gradient-to-r from-marigold-gold to-peacock-teal rounded-full" />
              </div>
            </div>
            <p className="font-scribe text-manuscript/80 mb-8 leading-relaxed text-lg max-w-2xl">
              Where Ancient Soul Meets Modern Mind. Nurturing young minds through the timeless wisdom of our heritage
              while preparing them for tomorrow's challenges.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-manuscript/80 group hover:text-marigold-gold transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-marigold-gold/20 to-peacock-teal/20 rounded-full flex items-center justify-center group-hover:from-marigold-gold/30 group-hover:to-peacock-teal/30 transition-all duration-300">
                  <MapPin className="w-5 h-5 text-marigold-gold" />
                </div>
                <span className="font-scribe text-lg">Raghopur, Supaul District, Bihar, India - 852111</span>
              </div>
              <div className="flex items-center gap-4 text-manuscript/80 group hover:text-marigold-gold transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-marigold-gold/20 to-peacock-teal/20 rounded-full flex items-center justify-center group-hover:from-marigold-gold/30 group-hover:to-peacock-teal/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-peacock-teal" />
                </div>
                <span className="font-scribe text-lg">+91 92625 36295</span>
              </div>
              <div className="flex items-center gap-4 text-manuscript/80 group hover:text-marigold-gold transition-colors duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-marigold-gold/20 to-peacock-teal/20 rounded-full flex items-center justify-center group-hover:from-marigold-gold/30 group-hover:to-peacock-teal/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-marigold-gold" />
                </div>
                <span className="font-scribe text-lg">info@dbggurukulam.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rishi text-2xl text-marigold-gold mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-marigold-gold to-peacock-teal rounded-full" />
            </h4>
            <ul className="space-y-3">
              {[
                { label: "The Mission (About)", href: "#mission" },
                { label: "The Gurukulam (N–8)", href: "#gurukulam" },
                { label: "Shri Classes (9–12)", href: "#shri-classes" },
                { label: "The Jnana Kosha", href: "#jnana-kosha" },
                { label: "Admissions", href: "#admissions" },
                { label: "Results", href: "/results" },
                { label: "Contact Us", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="font-scribe text-manuscript/80 hover:text-marigold-gold transition-all duration-300 text-lg group flex items-center gap-2"
                  >
                    <div className="w-1 h-1 bg-peacock-teal rounded-full group-hover:w-2 group-hover:bg-marigold-gold transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-rishi text-2xl text-marigold-gold mb-6 relative">
              Connect With Us
              <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-marigold-gold to-peacock-teal rounded-full" />
            </h4>
            <div className="flex gap-4 mb-8">
              {[
                {
                  icon: Facebook,
                  label: "Facebook",
                  href: "https://www.facebook.com/profile.php?id=61573604582292",
                  color: "hover:bg-blue-600",
                },
                { icon: Twitter, label: "Twitter", href: "https://x.com/DBMRaghopur", color: "hover:bg-sky-500" },
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/dbg_gurukulam/",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: Youtube,
                  label: "YouTube",
                  href: "https://www.youtube.com/@shriclasses2",
                  color: "hover:bg-red-600",
                },
              ].map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gradient-to-br from-marigold-gold/10 to-peacock-teal/10 rounded-full flex items-center justify-center ${color} transition-all duration-300 group border border-manuscript/10 hover:border-manuscript/30 hover:scale-110 hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-manuscript/70 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="font-scribe text-manuscript/60 text-base space-y-3">
              <p className="leading-relaxed">Follow our journey of knowledge and wisdom</p>
              <div className="p-4 bg-gradient-to-br from-marigold-gold/5 to-peacock-teal/5 rounded-lg border border-manuscript/10">
                <p className="italic text-marigold-gold font-medium">"विद्या ददाति विनयं"</p>
                <p className="text-sm text-manuscript/70 mt-1">Knowledge gives humility</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-manuscript/20 to-transparent" />
          <div className="pt-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 w-full">
              <div className="font-scribe text-manuscript/60 text-base text-center sm:text-left">
                © 2025 Divya Bihar Global Gurukulam. All rights reserved.
              </div>
              <div className="flex gap-8 text-base">
                <a
                  href="#"
                  className="font-scribe text-manuscript/60 hover:text-marigold-gold transition-colors duration-300 relative group"
                >
                  Privacy Policy
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-marigold-gold group-hover:w-full transition-all duration-300" />
                </a>
                <a
                  href="#"
                  className="font-scribe text-manuscript/60 hover:text-marigold-gold transition-colors duration-300 relative group"
                >
                  Terms of Service
                  <div className="absolute -bottom-1 left-0 w-0 h-px bg-marigold-gold group-hover:w-full transition-all duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

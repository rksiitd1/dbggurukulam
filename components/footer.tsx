import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 to-slate-100 text-slate-700 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-500/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image src="/logo.svg" alt="DBG Gurukulam Logo" width={40} height={40} className="object-contain" />
              </div>
              <h3 className="font-rishi text-2xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Divya Bihar Global Gurukulam
              </h3>
            </div>
            <p className="font-scribe text-slate-600 mb-6 leading-relaxed">
              Where Ancient Soul Meets Modern Mind. Nurturing young minds through the timeless wisdom of our heritage
              while preparing them for tomorrow's challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-scribe">Bihar, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-scribe">+91 XXXX XXXXXX</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="font-scribe">info@dbggurukulam.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rishi text-lg text-blue-600 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "The Mission (About)",
                "The Gurukulam (N–8)",
                "Shri Classes (9–12)",
                "The Jnana Kosha",
                "Admissions",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="font-scribe text-slate-600 hover:text-blue-600 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-rishi text-lg text-blue-600 mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 group shadow-sm"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-slate-600 group-hover:text-white" />
                </a>
              ))}
            </div>
            <div className="font-scribe text-slate-500 text-sm">
              <p className="mb-2">Follow our journey of knowledge and wisdom</p>
              <p className="italic">"विद्या ददाति विनयं" - Knowledge gives humility</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-scribe text-slate-500 text-sm">
              © 2025 Divya Bihar Global Gurukulam. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="font-scribe text-slate-500 hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-scribe text-slate-500 hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-slate-800 text-slate-300 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-teal-500/20" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.15) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-20">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-20 h-20 relative">
                <Image src="/logo.svg" alt="DBG Gurukulam Logo" width={80} height={80} className="object-contain" />
              </div>
              <h3 className="font-rishi text-3xl bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Divya Bihar Global Gurukulam
              </h3>
            </div>
            <p className="font-scribe text-slate-400 mb-6 leading-relaxed text-lg">
              Where Ancient Soul Meets Modern Mind. Nurturing young minds through the timeless wisdom of our heritage
              while preparing them for tomorrow's challenges.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="font-scribe text-lg">Bihar, India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="font-scribe text-lg">+91 9262536295</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="font-scribe text-lg">info@dbggurukulam.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-rishi text-xl text-blue-400 mb-4">Quick Links</h4>
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
                  <a
                    href="#"
                    className="font-scribe text-slate-400 hover:text-blue-400 transition-colors duration-300 text-lg"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-rishi text-xl text-blue-400 mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61573604582292" },
                { icon: Twitter, label: "Twitter", href: "https://x.com/DBMRaghopur" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dbg_gurukulam/" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@shriclasses2" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-700/50 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
            <div className="font-scribe text-slate-500 text-base">
              <p className="mb-2">Follow our journey of knowledge and wisdom</p>
              <p className="italic">"विद्या ददाति विनयं" - Knowledge gives humility</p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <div className="font-scribe text-slate-500 text-base text-center sm:text-left">
              © 2025 Divya Bihar Global Gurukulam. All rights reserved.
            </div>
            <div className="flex gap-6 text-base">
              <a href="#" className="font-scribe text-slate-500 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-scribe text-slate-500 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

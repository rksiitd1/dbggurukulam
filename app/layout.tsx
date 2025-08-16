import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Divya Bihar Global Gurukulam - Where Ancient Soul Meets Modern Mind",
  description:
    "A digital mandir of knowledge combining ancient Indian wisdom with modern education. Located in Raghopur, Supaul District, Bihar, India - 852111",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

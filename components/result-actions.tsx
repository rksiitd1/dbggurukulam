"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Printer, Share2, ImageIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import type { StudentData } from "@/lib/data"

interface ResultActionsProps {
  backUrl: string
  studentName: string
  examLabel: string
  student?: StudentData
  studentMarks?: any
  examType?: string
  examPeriod?: string
  academicYear?: string
}

export default function ResultActions({
  backUrl,
  studentName,
  examLabel,
  student,
  studentMarks,
  examType,
  examPeriod,
  academicYear,
}: ResultActionsProps) {
  const router = useRouter()
  const [isDownloading, setIsDownloading] = useState(false)
  const [isPngDownloading, setIsPngDownloading] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = async () => {
    setIsDownloading(true)

    let reportCard: HTMLElement | null = null
    try {
      const isMobile = window.innerWidth <= 768
      console.log("[v0] Mobile detection:", isMobile)
      console.log("[v0] Student data available:", !!student)
      console.log("[v0] Student marks available:", !!studentMarks)

      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([import("html2canvas"), import("jspdf")])

      if (isMobile && student && studentMarks && examType && examPeriod && academicYear) {
        console.log("[v0] Using mobile download component")

        const { default: MultiModeReportCardDownload } = await import("@/components/multi-mode-report-card-download")

        // Create a temporary container
        const container = document.createElement("div")
        container.style.position = "fixed"
        container.style.top = "-10000px"
        container.style.left = "-10000px"
        container.style.width = "800px" // Set a fixed width for consistent rendering
        container.style.backgroundColor = "white"
        document.body.appendChild(container)

        // Use React 18's createRoot API properly
        const { createRoot } = await import("react-dom/client")
        const root = createRoot(container)

        // Create the component with proper React element
        const React = await import("react")
        const element = React.createElement(MultiModeReportCardDownload, {
          student,
          studentMarks,
          examType,
          examPeriod,
          academicYear,
        })

        root.render(element)

        // Wait longer for component to fully render
        await new Promise((resolve) => setTimeout(resolve, 500))
        reportCard = container.firstElementChild as HTMLElement

        console.log("[v0] Mobile component rendered:", !!reportCard)

        // Clean up after capture
        setTimeout(() => {
          try {
            root.unmount()
            if (document.body.contains(container)) {
              document.body.removeChild(container)
            }
          } catch (e) {
            console.log("[v0] Cleanup error:", e)
          }
        }, 2000)
      } else {
        console.log("[v0] Using desktop component")
        reportCard = document.querySelector(".max-w-4xl") as HTMLElement
      }

      if (!reportCard) {
        console.log("[v0] No report card found")
        throw new Error("Could not find report card content")
      }

      console.log("[v0] Capturing with html2canvas")
      reportCard.setAttribute("data-h2c-target", "1")
      const canvas = await html2canvas(reportCard, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: reportCard.scrollWidth,
        height: reportCard.scrollHeight,
        onclone: (clonedDoc: Document) => {
          try {
            const style = clonedDoc.createElement("style")
            style.setAttribute("data-h2c-fallback", "true")
            // Use numeric HSL tokens so classes like bg-background (hsl(var(--background))) resolve correctly
            style.textContent = `
              :root {
                --background: 0 0% 100%;
                --foreground: 222.2 84% 4.9%;
                --card: 0 0% 100%;
                --card-foreground: 222.2 84% 4.9%;
                --popover: 0 0% 100%;
                --popover-foreground: 222.2 84% 4.9%;
                --primary: 222.2 47.4% 11.2%;
                --primary-foreground: 210 40% 98%;
                --secondary: 210 40% 96%;
                --secondary-foreground: 222.2 47.4% 11.2%;
                --muted: 210 40% 96%;
                --muted-foreground: 215.4 16.3% 46.9%;
                --accent: 210 40% 96%;
                --accent-foreground: 222.2 47.4% 11.2%;
                --destructive: 0 84.2% 60.2%;
                --destructive-foreground: 210 40% 98%;
                --border: 214.3 31.8% 91.4%;
                --input: 214.3 31.8% 91.4%;
                --ring: 222.2 84% 4.9%;
                --chart-1: 12 76% 61%;
                --chart-2: 173 58% 39%;
                --chart-3: 197 37% 24%;
                --chart-4: 43 74% 66%;
                --chart-5: 27 87% 67%;
              }
              .dark {
                --background: 222.2 84% 4.9%;
                --foreground: 210 40% 98%;
                --card: 222.2 84% 4.9%;
                --card-foreground: 210 40% 98%;
                --popover: 222.2 84% 4.9%;
                --popover-foreground: 210 40% 98%;
                --primary: 210 40% 98%;
                --primary-foreground: 222.2 47.4% 11.2%;
                --secondary: 217.2 32.6% 17.5%;
                --secondary-foreground: 210 40% 98%;
                --muted: 217.2 32.6% 17.5%;
                --muted-foreground: 215 20.2% 65.1%;
                --accent: 217.2 32.6% 17.5%;
                --accent-foreground: 210 40% 98%;
                --destructive: 0 62.8% 30.6%;
                --destructive-foreground: 210 40% 98%;
                --border: 217.2 32.6% 17.5%;
                --input: 217.2 32.6% 17.5%;
                --ring: 212.7 26.8% 83.9%;
                --chart-1: 220 70% 50%;
                --chart-2: 160 60% 45%;
                --chart-3: 30 80% 55%;
                --chart-4: 280 65% 60%;
                --chart-5: 340 75% 55%;
              }
            `
            clonedDoc.head.appendChild(style)
          } catch (e) {
            console.log("[v0] onclone inject fallback failed:", e)
          }
        },
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")

      const pageWidth = 210
      const pageHeight = 297
      const margin = 10

      const availableWidth = pageWidth - 2 * margin
      const availableHeight = pageHeight - 2 * margin

      const canvasAspectRatio = canvas.width / canvas.height
      const availableAspectRatio = availableWidth / availableHeight

      let scaledWidth, scaledHeight

      if (canvasAspectRatio > availableAspectRatio) {
        scaledWidth = availableWidth
        scaledHeight = availableWidth / canvasAspectRatio
      } else {
        scaledHeight = availableHeight
        scaledWidth = availableHeight * canvasAspectRatio
      }

      const xPosition = (pageWidth - scaledWidth) / 2
      const yPosition = (pageHeight - scaledHeight) / 2

      pdf.addImage(imgData, "PNG", xPosition, yPosition, scaledWidth, scaledHeight)

      const fileName = `${studentName.replace(/\s+/g, "_")}_${examLabel.replace(/\s+/g, "_")}_Result.pdf`
      pdf.save(fileName)
    } catch (error) {
      console.error("[v0] Error generating PDF:", error)
      alert("Error generating PDF. Please try again or use the Print option.")
    } finally {
      try { reportCard?.removeAttribute("data-h2c-target") } catch {}
      setIsDownloading(false)
    }
  }

  const handlePngDownload = async () => {
    setIsPngDownloading(true)

    try {
      const isMobile = window.innerWidth <= 768
      console.log("[v0] PNG Mobile detection:", isMobile)

      const { default: html2canvas } = await import("html2canvas")

      let reportCard: HTMLElement | null = null

      if (isMobile && student && studentMarks && examType && examPeriod && academicYear) {
        console.log("[v0] Using mobile PNG download component")

        const { default: MultiModeReportCardDownload } = await import("@/components/multi-mode-report-card-download")

        const container = document.createElement("div")
        container.style.position = "fixed"
        container.style.top = "-10000px"
        container.style.left = "-10000px"
        container.style.width = "800px"
        container.style.backgroundColor = "white"
        document.body.appendChild(container)

        const { createRoot } = await import("react-dom/client")
        const root = createRoot(container)

        const React = await import("react")
        const element = React.createElement(MultiModeReportCardDownload, {
          student,
          studentMarks,
          examType,
          examPeriod,
          academicYear,
        })

        root.render(element)

        await new Promise((resolve) => setTimeout(resolve, 500))
        reportCard = container.firstElementChild as HTMLElement

        console.log("[v0] Mobile PNG component rendered:", !!reportCard)

        setTimeout(() => {
          try {
            root.unmount()
            if (document.body.contains(container)) {
              document.body.removeChild(container)
            }
          } catch (e) {
            console.log("[v0] PNG Cleanup error:", e)
          }
        }, 2000)
      } else {
        console.log("[v0] Using desktop PNG component")
        reportCard = document.querySelector(".max-w-4xl") as HTMLElement
      }

      if (!reportCard) {
        console.log("[v0] No PNG report card found")
        throw new Error("Could not find report card content")
      }

      console.log("[v0] Capturing PNG with html2canvas")
      reportCard.setAttribute("data-h2c-target", "1")
      const canvas = await html2canvas(reportCard, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        width: reportCard.scrollWidth,
        height: reportCard.scrollHeight,
        onclone: (clonedDoc: Document) => {
          try {
            const style = clonedDoc.createElement("style")
            style.setAttribute("data-h2c-fallback", "true")
            style.textContent = `
              :root {
                --background: 0 0% 100%;
                --foreground: 222.2 84% 4.9%;
                --card: 0 0% 100%;
                --card-foreground: 222.2 84% 4.9%;
                --popover: 0 0% 100%;
                --popover-foreground: 222.2 84% 4.9%;
                --primary: 222.2 47.4% 11.2%;
                --primary-foreground: 210 40% 98%;
                --secondary: 210 40% 96%;
                --secondary-foreground: 222.2 47.4% 11.2%;
                --muted: 210 40% 96%;
                --muted-foreground: 215.4 16.3% 46.9%;
                --accent: 210 40% 96%;
                --accent-foreground: 222.2 47.4% 11.2%;
                --destructive: 0 84.2% 60.2%;
                --destructive-foreground: 210 40% 98%;
                --border: 214.3 31.8% 91.4%;
                --input: 214.3 31.8% 91.4%;
                --ring: 222.2 84% 4.9%;
                --chart-1: 12 76% 61%;
                --chart-2: 173 58% 39%;
                --chart-3: 197 37% 24%;
                --chart-4: 43 74% 66%;
                --chart-5: 27 87% 67%;
              }
              .dark {
                --background: 222.2 84% 4.9%;
                --foreground: 210 40% 98%;
                --card: 222.2 84% 4.9%;
                --card-foreground: 210 40% 98%;
                --popover: 222.2 84% 4.9%;
                --popover-foreground: 210 40% 98%;
                --primary: 210 40% 98%;
                --primary-foreground: 222.2 47.4% 11.2%;
                --secondary: 217.2 32.6% 17.5%;
                --secondary-foreground: 210 40% 98%;
                --muted: 217.2 32.6% 17.5%;
                --muted-foreground: 215 20.2% 65.1%;
                --accent: 217.2 32.6% 17.5%;
                --accent-foreground: 210 40% 98%;
                --destructive: 0 62.8% 30.6%;
                --destructive-foreground: 210 40% 98%;
                --border: 217.2 32.6% 17.5%;
                --input: 217.2 32.6% 17.5%;
                --ring: 212.7 26.8% 83.9%;
                --chart-1: 220 70% 50%;
                --chart-2: 160 60% 45%;
                --chart-3: 30 80% 55%;
                --chart-4: 280 65% 60%;
                --chart-5: 340 75% 55%;
              }
            `
            clonedDoc.head.appendChild(style)
          } catch (e) {
            console.log("[v0] onclone inject fallback failed:", e)
          }
        },
      })

      canvas.toBlob(
        (blob) => {
          if (blob) {
            const url = URL.createObjectURL(blob)
            const link = document.createElement("a")
            link.href = url
            link.download = `${studentName.replace(/\s+/g, "_")}_${examLabel.replace(/\s+/g, "_")}_Result.png`
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            URL.revokeObjectURL(url)
          }
        },
        "image/png",
        1.0,
      )
    } catch (error) {
      console.error("[v0] Error generating PNG:", error)
      alert("Error generating PNG. Please try again.")
    } finally {
      try {
        const el = document.querySelector('[data-h2c-target="1"]') as HTMLElement | null
        if (el) el.removeAttribute("data-h2c-target")
      } catch {}
      setIsPngDownloading(false)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${studentName} - ${examLabel}`,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  return (
    <div className="print:hidden bg-white border-b border-gray-200 p-3 md:p-4 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(backUrl)}
              className="shrink-0 bg-stone-300 hover:bg-stone-400"
            >
              <ArrowLeft className="w-4 h-4 sm:mr-2" />
              <span className="hidden sm:inline">Back</span>
            </Button>
            <div className="min-w-0 flex-1">
              <h1 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{studentName}</h1>
              <p className="text-xs sm:text-sm text-gray-600 truncate">{examLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              className="flex-1 sm:flex-none text-xs sm:text-sm bg-transparent"
            >
              <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm">Share</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              disabled={isDownloading}
              className="flex-1 sm:flex-none text-xs sm:text-sm bg-transparent"
            >
              {isDownloading ? (
                <>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
                  <span className="text-xs sm:text-sm">Generating...</span>
                </>
              ) : (
                <>
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">PDF</span>
                </>
              )}
            </Button>
            <Button
              size="sm"
              onClick={handlePngDownload}
              disabled={isPngDownloading}
              className="flex sm:hidden flex-1 sm:flex-none text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              {isPngDownloading ? (
                <>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span className="text-xs sm:text-sm">Generating...</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">PNG</span>
                </>
              )}
            </Button>
            <Button
              size="sm"
              onClick={handlePngDownload}
              disabled={isPngDownloading}
              className="hidden sm:flex flex-1 sm:flex-none text-xs sm:text-sm bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0"
            >
              {isPngDownloading ? (
                <>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  <span className="text-xs sm:text-sm">Generating...</span>
                </>
              ) : (
                <>
                  <ImageIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-sm">PNG</span>
                </>
              )}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrint}
              className="hidden sm:flex flex-1 sm:flex-none text-xs sm:text-sm bg-black text-white hover:bg-gray-800"
            >
              <Printer className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Print</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

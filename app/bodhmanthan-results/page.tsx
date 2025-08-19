// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import BodhaManthanResults from "@/components/bodhmanthan-results";

export const metadata: Metadata = {
  metadataBase: new URL("https://dbggurukulam.com"),
  title: "DBG Gurukulam – Bodha Manthan Results",
  description:
    "View Bodha Manthan examination results at DBG Gurukulam.",
  keywords: [
    "DBG Gurukulam",
    "Bodha Manthan",
    "results",
    "exam results",
    "student results",
    "education",
  ],
  alternates: {
    canonical: "/bodhmanthan-results",
  },
  openGraph: {
    title: "DBG Gurukulam – Bodha Manthan Results",
    description:
      "Access Bodha Manthan results and track academic performance at DBG Gurukulam.",
    type: "website",
    siteName: "DBG Gurukulam",
    url: "https://dbggurukulam.com/bodhmanthan-results",
    images: [
      {
        url: "https://dbggurukulam.com/OG-image.png",
        width: 1280,
        height: 720,
        alt: "DBG Gurukulam – Bodha Manthan Results",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DBG Gurukulam – Bodha Manthan Results",
    description:
      "Access Bodha Manthan results and track academic performance at DBG Gurukulam.",
    images: ["https://dbggurukulam.com/OG-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const RESULTS_URL =
  "https://dbggurukulam.com/results/2025-26/bodha-manthan/First%20Term%20-%20July%202025";

export default function BodhaManthanResultsLanding() {
  return (
    <>
      <Header />
      <BodhaManthanResults resultsUrl={RESULTS_URL} />
    </>
  );
}

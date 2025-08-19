// app/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

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
      "https://dbggurukulam.com/OG-image.png",
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
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-2xl font-semibold">Bodha Manthan Results</h1>
      <p className="max-w-prose text-muted-foreground">
        Click below to view the latest Bodha Manthan examination results.
      </p>
      <Link
        href={RESULTS_URL}
        className="rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground shadow hover:opacity-90"
      >
        View Results
      </Link>
    </main>
  );
}

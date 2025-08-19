import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dbggurukulam.com'),
  title: 'DBG Gurukulam - Student Results Portal',
  description: 'Access and view student examination results for DBG Gurukulam. Check your academic performance and progress.',
  keywords: ['DBG Gurukulam', 'student results', 'exam results', 'academic performance', 'education'],
  alternates: {
    canonical: '/results',
  },
  openGraph: {
    title: 'DBG Gurukulam - Student Results Portal',
    description: "View and track your academic progress with DBG Gurukulam's comprehensive results portal.",
    type: 'website',
    locale: 'en_IN',
    siteName: 'DBG Gurukulam',
    url: 'https://dbggurukulam.com/results',
    images: [
      {
        url: 'https://dbggurukulam.com/OG-image.png',
        width: 1280,
        height: 720,
        alt: 'DBG Gurukulam – Results Portal',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DBG Gurukulam - Student Results Portal',
    description: 'Access your academic results and track your progress at DBG Gurukulam.',
    images: ['https://dbggurukulam.com/OG-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

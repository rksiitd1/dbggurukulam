import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://dbggurukulam.com'),
  title: 'DBG Gurukulam Results',
  description: 'View DBG Gurukulam (Raghopur, Supaul) student exam results — Bodha Manthan, Jigyāsa Anveshan, Pragya Siddhi — by academic year, class, and roll no.',
  keywords: ['DBG Gurukulam', 'student results', 'exam results', 'academic performance', 'education'],
  alternates: {
    canonical: '/results',
  },
  openGraph: {
    title: 'DBG Gurukulam Results',
    description: 'View DBG Gurukulam (Raghopur, Supaul) student exam results — Bodha Manthan, Jigyāsa Anveshan, Pragya Siddhi — by academic year, class, and roll no.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'DBG Gurukulam',
    url: 'https://dbggurukulam.com/results',
    images: [
      {
        url: 'https://dbggurukulam.com/OG-image.png',
        width: 1280,
        height: 720,
        alt: 'DBG Gurukulam – Results',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DBG Gurukulam Results',
    description: 'View DBG Gurukulam (Raghopur, Supaul) student exam results — Bodha Manthan, Jigyāsa Anveshan, Pragya Siddhi — by academic year, class, and roll no.',
    images: ['https://dbggurukulam.com/OG-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

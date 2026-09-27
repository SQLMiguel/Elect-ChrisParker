import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import './globals.css'

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" })
const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.votechrisparker.com'),
  title: {
    default: 'Chris Parker for Forsyth County Commissioner | District B',
    template: '%s | Chris Parker for Commissioner',
  },
  description: 'Elect Chris Parker for Forsyth County Commissioner District B. Reasonable. Reliable. Respected. A local small business owner with bipartisan solutions.',
  keywords: ['Chris Parker', 'Forsyth County', 'Commissioner', 'District B', 'North Carolina', 'Election', 'Winston-Salem'],
  authors: [{ name: 'Committee to Elect Chris Parker' }],
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.votechrisparker.com',
    siteName: 'Chris Parker for Commissioner',
    title: 'Chris Parker for Forsyth County Commissioner',
    description: 'Reasonable. Reliable. Respected. Vote Chris Parker for Forsyth County Commissioner District B.',
    images: [
      {
        url: '/images/photoshoot/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chris Parker for Forsyth County Commissioner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Parker for Forsyth County Commissioner',
    description: 'Reasonable. Reliable. Respected.',
    images: ['/images/photoshoot/og-image.jpg'],
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1f4e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebas.variable} font-sans antialiased`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

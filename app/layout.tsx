import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnnouncementBar } from '@/components/layout/announcement-bar'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: {
    default: 'Chris Parker for Forsyth County Commissioner | District B',
    template: '%s | Chris Parker for Commissioner',
  },
  description: 'Elect Chris Parker for Forsyth County Commissioner District B. Leadership for Forsyth\'s Future - Economic Development, Public Safety, Fiscal Responsibility.',
  keywords: ['Chris Parker', 'Forsyth County', 'Commissioner', 'District B', 'North Carolina', 'Election', 'Winston-Salem'],
  authors: [{ name: 'Committee to Elect Chris Parker' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.electchrisparker.org',
    siteName: 'Chris Parker for Commissioner',
    title: 'Chris Parker for Forsyth County Commissioner',
    description: 'Leadership for Forsyth\'s Future. Vote Chris Parker for County Commissioner District B.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Parker for Forsyth County Commissioner',
    description: 'Leadership for Forsyth\'s Future. Vote Chris Parker for County Commissioner District B.',
  },
}

export const viewport: Viewport = {
  themeColor: '#1e3a5f',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

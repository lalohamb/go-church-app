import type { Metadata } from 'next'
import { Archivo_Black, Archivo, Montserrat, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/layout/SiteHeader'
import { SiteFooter } from '@/components/layout/SiteFooter'
import { JsonLd } from '@/components/JsonLd'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Church',
  name: 'The GO Church Chicago',
  url: 'https://www.thegochurchchicago.com',
  logo: 'https://www.thegochurchchicago.com/logo.png',
  email: 'info@thegochurchchicago.com',
  telephone: '+12192691794',
  sameAs: [
    'https://www.instagram.com/thegochurchchicago/',
    'https://www.facebook.com/thegochurchchicago',
  ],
  location: [
    {
      '@type': 'Place',
      name: 'The GO Church — Joliet',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '101 N Reed Street',
        addressLocality: 'Joliet',
        addressRegion: 'IL',
        postalCode: '60435',
        addressCountry: 'US',
      },
    },
    {
      '@type': 'Place',
      name: 'The GO Church — Hammond',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '6021 Hohman Avenue',
        addressLocality: 'Hammond',
        addressRegion: 'IN',
        postalCode: '46320',
        addressCountry: 'US',
      },
    },
  ],
}

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
})

const archivo = Archivo({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

const montserrat = Montserrat({
  weight: ['500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The GO Church Chicago',
    template: '%s — The GO Church Chicago',
  },
  description:
    'The GO Church — Restore life and hope, and empower people to experience their GO season through the word of God. Two locations: Joliet, IL and Hammond, IN.',
  metadataBase: new URL('https://www.thegochurchchicago.com'),
  openGraph: {
    siteName: 'The GO Church Chicago',
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${archivo.variable} ${montserrat.variable} ${dmSerif.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={organizationSchema} />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}

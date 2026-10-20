import type { Metadata } from 'next'
import { LocationHero } from '@/components/locations/LocationHero'
import { LocationDetails } from '@/components/locations/LocationDetails'
import { VisitInvitation } from '@/components/locations/VisitInvitation'
import { locations } from '@/lib/data'

const hammond = locations.find((l) => l.id === 'hammond')!

export const metadata: Metadata = {
  title: 'Hammond, IN',
  description:
    'The GO Church Hammond — 6021 Hohman Avenue, Hammond, IN 46320. Sunday service at 11:45 AM. In person and online.',
  openGraph: {
    title: 'The GO Church — Hammond, IN',
    description:
      'Join us Sunday at 11:45 AM at 6021 Hohman Avenue, Hammond, IN 46320. In person and online.',
    url: 'https://www.thegochurchchicago.com/locations/hammond',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/locations/hammond' },
}

export default function HammondPage() {
  return (
    <>
      <LocationHero location={hammond} />
      <LocationDetails location={hammond} />
      <VisitInvitation city="Hammond" showOnline={true} />
    </>
  )
}

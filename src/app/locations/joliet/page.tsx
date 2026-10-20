import type { Metadata } from 'next'
import { LocationHero } from '@/components/locations/LocationHero'
import { LocationDetails } from '@/components/locations/LocationDetails'
import { VisitInvitation } from '@/components/locations/VisitInvitation'
import { locations } from '@/lib/data'

const joliet = locations.find((l) => l.id === 'joliet')!

export const metadata: Metadata = {
  title: 'Joliet, IL',
  description:
    'The GO Church Joliet — 101 N Reed Street, Joliet, IL 60435. Sunday service at 9:00 AM. In person.',
  openGraph: {
    title: 'The GO Church — Joliet, IL',
    description:
      'Join us Sunday at 9:00 AM at 101 N Reed Street, Joliet, IL 60435.',
    url: 'https://www.thegochurchchicago.com/locations/joliet',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/locations/joliet' },
}

export default function JolietPage() {
  return (
    <>
      <LocationHero location={joliet} />
      <LocationDetails location={joliet} />
      <VisitInvitation city="Joliet" showOnline={false} />
    </>
  )
}

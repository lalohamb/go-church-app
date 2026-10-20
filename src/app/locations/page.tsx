import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { LocationsOverview } from '@/components/locations/LocationsOverview'
import { VisitInvitation } from '@/components/locations/VisitInvitation'

export const metadata: Metadata = {
  title: 'Locations',
  description:
    'The GO Church meets at two locations — Joliet, IL (Sunday 9:00 AM) and Hammond, IN (Sunday 11:45 AM, In Person & Online).',
  openGraph: {
    title: 'Locations — The GO Church',
    description:
      'Two locations. One Church. Find The GO Church in Joliet, IL and Hammond, IN.',
    url: 'https://www.thegochurchchicago.com/locations',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/locations' },
}

export default function LocationsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="The GO Church"
        heading="Our Locations"
        subheading="1 Church. 2 Locations. Serving Joliet, IL and Hammond, IN every Sunday."
      />
      <LocationsOverview />
      <VisitInvitation city="Chicago" />
    </div>
  )
}

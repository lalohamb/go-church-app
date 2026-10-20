import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { EventsListing } from '@/components/events/EventsListing'
import { JsonLd } from '@/components/JsonLd'
import { upcomingEvents, locations } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Events',
  description: 'View all upcoming events at The GO Church — life groups, outreach, prayer sessions, and special gatherings at both Joliet and Hammond locations.',
  openGraph: {
    title: 'Events — The GO Church',
    description: 'Upcoming events at The GO Church in Joliet, IL and Hammond, IN.',
    url: 'https://www.thegochurchchicago.com/events',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/events' },
}

export default function EventsPage() {
  const eventSchemas = upcomingEvents
    .filter((e) => e.status === 'confirmed')
    .map((e) => {
      const loc = e.locationId ? locations.find((l) => l.id === e.locationId) : null
      return {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: e.title,
        description: e.description,
        startDate: e.startAt,
        endDate: e.endAt,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode:
          e.meetingType === 'virtual'
            ? 'https://schema.org/OnlineEventAttendanceMode'
            : e.meetingType === 'hybrid'
            ? 'https://schema.org/MixedEventAttendanceMode'
            : 'https://schema.org/OfflineEventAttendanceMode',
        organizer: {
          '@type': 'Organization',
          name: 'The GO Church Chicago',
          url: 'https://www.thegochurchchicago.com',
        },
        ...(loc && {
          location: {
            '@type': 'Place',
            name: `The GO Church — ${loc.city}`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: loc.address,
              addressLocality: loc.city,
              addressRegion: loc.state === 'Illinois' ? 'IL' : 'IN',
              postalCode: loc.zip,
              addressCountry: 'US',
            },
          },
        }),
        ...(e.registrationUrl && { url: e.registrationUrl }),
      }
    })

  return (
    <div style={{ paddingTop: '72px' }}>
      {eventSchemas.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}
      <PageHero
        eyebrow="The GO Church"
        heading="Upcoming Events"
        subheading="Life groups, outreach, prayer, and special gatherings at both locations."
        image="https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511201849-FB45ZDZHSFO73V8UPVYE/GC_Empowerment_Wide.jpg"
        imageAlt="The GO Church community"
      />
      <EventsListing />
    </div>
  )
}

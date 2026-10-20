import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { PrayerContent } from '@/components/prayer/PrayerContent'

export const metadata: Metadata = {
  title: 'Prayer',
  description: 'Prayer is our lifeline. Join us every 1st Saturday at 8AM at our Hammond location, or submit a prayer request to The GO Church.',
  openGraph: {
    title: 'Prayer — The GO Church',
    description: 'Prayer is essential to every believer. Join Prayer at The GO every 1st Saturday at 8AM.',
    url: 'https://www.thegochurchchicago.com/prayer',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/prayer' },
}

export default function PrayerPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="The GO Church"
        heading="Prayer at The GO"
        subheading="Prayer is essential to every believer. Prayer is our lifeline."
      />
      <PrayerContent />
    </div>
  )
}

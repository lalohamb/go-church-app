import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { VisionSection } from '@/components/about/VisionSection'
import { LeadhPillarsAbout } from '@/components/about/LeadhPillarsAbout'
import { AboutInvitation } from '@/components/about/AboutInvitation'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about The GO Church — our vision to restore life and hope, the LEADH pillars that guide our community, and our two locations in Joliet, IL and Hammond, IN.',
  openGraph: {
    title: 'About The GO Church',
    description:
      'Our vision is to restore life and hope, and empower people to experience their GO season through the word of God.',
    url: 'https://www.thegochurchchicago.com/about',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/about' },
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="The GO Church"
        heading="About The GO Church"
        subheading="A multi-generational church with two locations, united by one vision — to restore life and hope through the word of God."
        image="https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/56cf8e2d-4e22-4870-b35d-b37a5b4154d8/%40toneross_GoAnnivSMALL_FINAL-069.jpg"
        imageAlt="The GO Church congregation"
      />
      <VisionSection />
      <LeadhPillarsAbout />
      <AboutInvitation />
    </div>
  )
}

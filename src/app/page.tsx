import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { MinistryCards } from '@/components/home/MinistryCards'
import { PastorAndEvents } from '@/components/home/PastorAndEvents'
import { FinalInvitation } from '@/components/home/FinalInvitation'

export const metadata: Metadata = {
  title: 'The GO Church Chicago',
  description:
    'The GO Church — GO In Strength. GO In Power. GO In Obedience. GO In Faith. Two locations: Joliet, IL (Sunday 9AM) and Hammond, IN (Sunday 11:45AM).',
  openGraph: {
    title: 'The GO Church Chicago',
    description:
      'Restore life and hope, and empower people to experience their GO season through the word of God.',
    url: 'https://www.thegochurchchicago.com',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MinistryCards />
      <PastorAndEvents />
      <FinalInvitation />
    </>
  )
}

import type { Metadata } from 'next'
import { PastorHero } from '@/components/pastor/PastorHero'
import { PastorBiography } from '@/components/pastor/PastorBiography'
import { LeadershipTimeline } from '@/components/pastor/LeadershipTimeline'
import { PastorConnection } from '@/components/pastor/PastorConnection'

export const metadata: Metadata = {
  title: 'Pastor Matthew Blumenberg',
  description:
    'Meet Pastor Matthew Blumenberg — Senior Pastor of The GO Church. Teacher, preacher, motivational speaker, and visionary leader with 20+ years in ministry.',
  openGraph: {
    title: 'Pastor Matthew Blumenberg — The GO Church',
    description:
      'Teacher, preacher, motivational speaker, entrepreneur, and Pastor who has been in ministry for 20+ years.',
    url: 'https://www.thegochurchchicago.com/pastor-matt',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/pastor-matt' },
}

export default function PastorMattPage() {
  return (
    <>
      <PastorHero />
      <PastorBiography />
      <LeadershipTimeline />
      <PastorConnection />
    </>
  )
}

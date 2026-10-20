import type { Metadata } from 'next'
import { CommunityHero } from '@/components/community/CommunityHero'
import { MinistryCardGrid } from '@/components/community/MinistryCardGrid'
import { MinistryFeature } from '@/components/community/MinistryFeature'
import { PrayerFeature } from '@/components/community/PrayerFeature'
import { CommunityConnection } from '@/components/community/CommunityConnection'
import { ministries } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Community & Ministries',
  description:
    'Discover life groups and ministries at The GO Church — Tuesday Night Empowerment, Wholistic Woman, MEN-Ergy, Marriage Ministry, and Prayer at The GO.',
  openGraph: {
    title: 'Community & Ministries — The GO Church',
    description:
      "You can't do life with everyone, but everyone needs to do life with someone. Find your community at The GO Church.",
    url: 'https://www.thegochurchchicago.com/community',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/community' },
}

const lifeGroups = ['tuesday-night-empowerment', 'wholistic-woman', 'men-ergy', 'marriage-ministry']

export default function CommunityPage() {
  const featured = ministries.filter((m) => lifeGroups.includes(m.id))

  return (
    <>
      <CommunityHero />

      {/* Compact 5-column card grid — matches mockup */}
      <MinistryCardGrid />

      {/* Full ministry detail sections — preserved per brief section 7 */}
      <div id="ministry-details">
        <section aria-labelledby="community-intro-heading" className="section-warm section-py-sm">
          <div className="container-narrow text-center">
            <p className="text-label mb-3" style={{ color: '#209a47' }}>
              Life at The GO
            </p>
            <div className="gold-divider-center mb-5" />
            <h2 id="community-intro-heading" className="text-h2 mb-5" style={{ color: '#0e0e0e' }}>
              Life Groups &amp; Ministries
            </h2>
            <p className="text-body-lg" style={{ color: '#3e3e3e' }}>
              At The GO Church, community is not an afterthought — it is central to who we are.
              Our life groups and ministries are designed to meet you where you are and push you
              into your GO season.
            </p>
          </div>
        </section>

        <div className="divide-y" style={{ borderColor: '#e7e7e7' }}>
          {featured.map((ministry, i) => (
            <MinistryFeature key={ministry.id} ministry={ministry} reverse={i % 2 !== 0} />
          ))}
        </div>
      </div>

      <PrayerFeature />
      <CommunityConnection />
    </>
  )
}

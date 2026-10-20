import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { siteSettings } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Serve',
  description: 'Serving at The GO Church is an opportunity to fill the gap and help others in our community. Sign up to serve today.',
  openGraph: {
    title: 'Serve — The GO Church',
    description: 'Fill the gap. Serve at The GO Church.',
    url: 'https://www.thegochurchchicago.com/serve',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/serve' },
}

export default function ServePage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="The GO Church"
        heading="Serve"
        subheading="Serving at The GO Church is an opportunity to fill the gap and help others in our community."
        image="https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511118138-9QXER93T3B8JDFXS29FY/GoChurch_Community_Closet_Wide.JPG"
        imageAlt="GO Church community outreach"
      />

      <section aria-labelledby="serve-heading" className="section-light section-py-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-label mb-3" style={{ color: '#209a47' }}>Fill the Gap</p>
              <div className="gold-divider mb-6" />
              <h2 id="serve-heading" className="text-h2 mb-6" style={{ color: '#0e0e0e' }}>
                Make an Impact
              </h2>
              <p className="text-body-lg mb-5" style={{ color: '#3e3e3e' }}>
                Serving at The GO Church is an opportunity to fill the gap and help others in the GO Church community.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                Whether you are passionate about hospitality, outreach, worship, or community care — there is a place for you to serve at The GO Church. Use your gifts to make a difference in the lives of others.
              </p>
              <a
                href={siteSettings.serveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Sign Up to Serve
              </a>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { title: 'Hospitality', desc: 'Welcome guests and create a warm, inviting environment at both locations.' },
                { title: 'Outreach', desc: 'Participate in GO Closet, Community Kitchen, and other Momentum Care Center initiatives.' },
                { title: 'Community Support', desc: 'Support life groups, events, and the day-to-day operations of The GO Church.' },
              ].map((area) => (
                <div key={area.title} className="p-6" style={{ background: '#f8f5ee', border: '1px solid #e7e7e7' }}>
                  <div className="w-8 h-1 mb-4" style={{ background: '#b4872d' }} />
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                    {area.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark section-py-sm">
        <div className="container-narrow text-center">
          <p className="text-body-lg mb-6" style={{ color: '#e0dcce' }}>
            Ready to make a difference? Sign up to serve at The GO Church today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={siteSettings.serveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-lg">
              Sign Up to Serve
            </a>
            <Link href="/community" className="btn btn-outline-white btn-lg">Explore Community</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

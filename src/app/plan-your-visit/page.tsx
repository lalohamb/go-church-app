import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { locations, siteSettings } from '@/lib/data'
import { MapPin, Clock, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Plan Your Visit',
  description: "We'd love to see you this Sunday. Find service times, directions, and everything you need to know before your first visit to The GO Church.",
  openGraph: {
    title: 'Plan Your Visit — The GO Church',
    description: "We'd love to see you this Sunday at The GO Church.",
    url: 'https://www.thegochurchchicago.com/plan-your-visit',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/plan-your-visit' },
}

export default function PlanYourVisitPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="First Time?"
        heading="Plan Your Visit"
        subheading="We'd love to see you this Sunday. Here's everything you need to know."
        image="https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/56cf8e2d-4e22-4870-b35d-b37a5b4154d8/%40toneross_GoAnnivSMALL_FINAL-069.jpg"
        imageAlt="The GO Church congregation"
      />

      {/* What to expect */}
      <section aria-labelledby="expect-heading" className="section-warm section-py-lg">
        <div className="container-content">
          <div className="text-center mb-14">
            <p className="text-label mb-3" style={{ color: '#209a47' }}>What to Expect</p>
            <div className="gold-divider-center mb-5" />
            <h2 id="expect-heading" className="text-h2 mb-4" style={{ color: '#0e0e0e' }}>
              You Are Welcome Here
            </h2>
            <p className="text-body-lg max-w-2xl mx-auto" style={{ color: '#3e3e3e' }}>
              Whether this is your first time visiting a church or you&apos;re looking for a new church home — The GO Church is a place where you belong.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { step: '01', title: 'Arrive & Be Welcomed', desc: 'Our team will greet you at the door. Come as you are — there is no dress code.' },
              { step: '02', title: 'Experience the Word', desc: 'Expect an electrifying, practical, and life-changing message from Pastor Matt or our team.' },
              { step: '03', title: 'Connect with Community', desc: 'After service, take time to meet others and learn about life groups and next steps.' },
            ].map((item) => (
              <div key={item.step} className="p-7" style={{ background: '#ffffff', border: '1px solid #e7e7e7' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: '#e7e7e7', lineHeight: 1 }} aria-hidden="true">
                  {item.step}
                </span>
                <div className="w-8 h-1 my-4" style={{ background: '#b4872d' }} />
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Locations */}
          <h2 className="text-h2 mb-8" style={{ color: '#0e0e0e' }}>Choose Your Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((loc, i) => (
              <div key={loc.id} className="p-7" style={{ background: '#ffffff', border: '1px solid #e7e7e7' }}>
                <div className="w-10 h-1 mb-5" style={{ background: i === 0 ? '#209a47' : '#b4872d' }} />
                <p className="text-label mb-1" style={{ color: '#9a9a9a' }}>{loc.state}</p>
                <h3 className="text-h3 mb-5" style={{ color: '#0e0e0e' }}>{loc.city}</h3>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#209a47' }} />
                    <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                      Sunday · <strong style={{ color: '#0e0e0e' }}>{loc.sundayTime}</strong>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#209a47' }} />
                    <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-label px-2.5 py-1 text-xs"
                      style={{ background: '#f4f4f4', color: '#5a5a5a' }}>
                      {loc.format === 'hybrid' ? 'In Person & Online' : 'In Person'}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline btn-sm flex-1 justify-center">
                    <ExternalLink size={13} /> Directions
                  </a>
                  <Link href={`/locations/${loc.slug}`} className="btn btn-primary btn-sm flex-1 justify-center">
                    Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="section-dark section-py">
        <div className="container-narrow text-center">
          <p className="text-label mb-3" style={{ color: '#f0c33c' }}>Ready to Go Further?</p>
          <div className="gold-divider-center mb-6" />
          <h2 className="text-h2 mb-4" style={{ color: '#ffffff' }}>Accept Christ &amp; Become a Member</h2>
          <p className="text-body-lg mb-8" style={{ color: '#e0dcce' }}>
            Take the next step in your faith journey and become part of The GO Church family.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={siteSettings.membershipUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-gold btn-lg">
              Become a Member
            </a>
            <a href={`mailto:${siteSettings.email}`} className="btn btn-outline-white btn-lg">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

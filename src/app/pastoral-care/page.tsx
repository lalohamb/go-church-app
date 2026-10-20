import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'
import { siteSettings } from '@/lib/data'
import { Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pastoral Care & Advising',
  description: 'The GO Church provides care to all partners who have a need. We also offer pre-marital and marriage advising.',
  openGraph: {
    title: 'Pastoral Care & Advising — The GO Church',
    description: 'The GO Church provides pastoral care and advising to all partners.',
    url: 'https://www.thegochurchchicago.com/pastoral-care',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/pastoral-care' },
}

export default function PastoralCarePage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="The GO Church"
        heading="Pastoral Care &amp; Advising"
        subheading="The GO Church provides care to all partners who have a need."
      />

      <section aria-labelledby="care-heading" className="section-light section-py-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-label mb-3" style={{ color: '#209a47' }}>We Care for You</p>
              <div className="gold-divider mb-6" />
              <h2 id="care-heading" className="text-h2 mb-6" style={{ color: '#0e0e0e' }}>
                Pastoral Care
              </h2>
              <p className="text-body-lg mb-5" style={{ color: '#3e3e3e' }}>
                The GO Church provides care to all partners who have a need. We believe that the church is not just a place you attend — it is a community that walks with you through every season of life.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                If you are going through a difficult time, need guidance, or simply need someone to pray with you — our pastoral team is here for you. Reach out and we will connect you with the care you need.
              </p>
              <a href={`mailto:${siteSettings.email}?subject=Pastoral Care Request`}
                className="btn btn-primary btn-lg">
                <Mail size={16} /> Request Pastoral Care
              </a>
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  title: 'Pastoral Care',
                  desc: 'The GO Church provides care to all partners who have a need. Our team is here to walk with you through life\'s challenges.',
                },
                {
                  title: 'Pre-Marital Advising',
                  desc: 'Preparing for marriage is one of the most important steps you can take. Our pre-marital advising helps couples build a strong foundation.',
                },
                {
                  title: 'Marriage Advising',
                  desc: 'We offer marriage advising to help couples navigate challenges and strengthen their relationship. See also our Marriage Ministry life group.',
                },
              ].map((item) => (
                <div key={item.title} className="p-6" style={{ background: '#f8f5ee', border: '1px solid #e7e7e7' }}>
                  <div className="w-8 h-1 mb-4" style={{ background: '#b4872d' }} />
                  <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}

              <div className="p-6" style={{ background: '#002800' }}>
                <p className="text-label mb-3" style={{ color: '#f0c33c' }}>Marriage Ministry</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                  Strengthen your marriage in community. Join our Marriage Ministry virtual life group every 4th Thursday at 6PM CT.
                </p>
                <Link href="/community" className="btn btn-gold btn-sm">
                  Explore Community
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

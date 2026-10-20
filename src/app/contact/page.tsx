import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { siteSettings, locations } from '@/lib/data'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: "Reach The GO Church at info@thegochurchchicago.com or 219-269-1794. We'd love to hear from you.",
  openGraph: {
    title: 'Contact — The GO Church',
    description: "Get in touch with The GO Church.",
    url: 'https://www.thegochurchchicago.com/contact',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/contact' },
}

export default function ContactPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="The GO Church"
        heading="Contact Us"
        subheading="We'd love to hear from you. Reach out and our team will get back to you."
      />

      <section aria-labelledby="contact-heading" className="section-light section-py-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact info */}
            <div>
              <p className="text-label mb-3" style={{ color: '#209a47' }}>Get in Touch</p>
              <div className="gold-divider mb-6" />
              <h2 id="contact-heading" className="text-h2 mb-8" style={{ color: '#0e0e0e' }}>
                We&apos;re Here for You
              </h2>

              <div className="flex flex-col gap-6 mb-10">
                <a href={`mailto:${siteSettings.email}`}
                  className="flex items-start gap-4 group" style={{ textDecoration: 'none' }}>
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#002800' }}>
                    <Mail size={18} style={{ color: '#f0c33c' }} />
                  </div>
                  <div>
                    <p className="text-label mb-1" style={{ color: '#9a9a9a' }}>Email</p>
                    <p className="font-bold text-base transition-colors"
                      style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                      {siteSettings.email}
                    </p>
                  </div>
                </a>

                <a href={`tel:${siteSettings.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-4 group" style={{ textDecoration: 'none' }}>
                  <div className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                    style={{ background: '#002800' }}>
                    <Phone size={18} style={{ color: '#f0c33c' }} />
                  </div>
                  <div>
                    <p className="text-label mb-1" style={{ color: '#9a9a9a' }}>Phone</p>
                    <p className="font-bold text-base" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                      {siteSettings.phone}
                    </p>
                  </div>
                </a>
              </div>

              {/* Social */}
              <div>
                <p className="text-label mb-4" style={{ color: '#9a9a9a' }}>Follow Us</p>
                <div className="flex gap-3">
                  {siteSettings.socialLinks.map((s) => (
                    <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer"
                      aria-label={s.label}
                      className="btn btn-outline btn-sm">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Locations */}
            <div>
              <p className="text-label mb-3" style={{ color: '#209a47' }}>Our Locations</p>
              <div className="gold-divider mb-6" />
              <h2 className="text-h2 mb-8" style={{ color: '#0e0e0e' }}>Find Us</h2>

              <div className="flex flex-col gap-6">
                {locations.map((loc) => (
                  <div key={loc.id} className="p-6" style={{ background: '#f8f5ee', border: '1px solid #e7e7e7' }}>
                    <p className="text-label mb-1" style={{ color: '#9a9a9a' }}>{loc.state}</p>
                    <h3 className="text-h3 mb-4" style={{ color: '#0e0e0e' }}>{loc.city}</h3>
                    <div className="flex items-start gap-2.5 mb-2">
                      <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: '#209a47' }} />
                      <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                        {loc.address}, {loc.city}, {loc.state} {loc.zip}
                      </span>
                    </div>
                    <p className="text-sm mb-4" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                      Sunday · {loc.sundayTime}
                    </p>
                    <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline btn-sm">
                      <ExternalLink size={13} /> Get Directions
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

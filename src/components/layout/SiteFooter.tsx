'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { Mail, Phone, MapPin } from 'lucide-react'
import { siteSettings, locations } from '@/lib/data'

function IconInstagram() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function FooterYear() {
  const [year, setYear] = useState<number | null>(null)
  useEffect(() => { setYear(new Date().getFullYear()) }, [])
  return (
    <p className="text-xs" style={{ color: '#9a9a9a', fontFamily: 'var(--font-body)' }}>
      © {year ?? ''} The GO Church. All rights reserved.
    </p>
  )
}

export function SiteFooter() {
  return (
    <footer className="section-darkest" role="contentinfo">
      <div className="container-site section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div>
            <Link href="/" aria-label="The GO Church — Home">
              <img src="/logo.png" alt="The GO Church" className="h-14 w-auto object-contain mb-4" />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
              Restore life and hope, and empower people to experience their GO season through the word of God.
            </p>
            <div className="flex gap-3">
              {siteSettings.socialLinks.map((s) => (
                <a key={s.platform} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center transition-colors"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#e0dcce' }}
                >
                  {s.platform === 'instagram' ? <IconInstagram /> : <IconFacebook />}
                </a>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-label mb-4" style={{ color: '#f0c33c' }}>Locations</h3>
            <div className="flex flex-col gap-5">
              {locations.map((loc) => (
                <div key={loc.id}>
                  <p className="font-bold text-sm mb-1" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>
                    {loc.city}, {loc.state}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                    {loc.address}<br />{loc.city}, {loc.state} {loc.zip}
                  </p>
                  <p className="text-sm mt-1" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                    Sunday · {loc.sundayTime}
                    {loc.format === 'hybrid' && ' · In Person & Online'}
                    {loc.format === 'in-person' && ' · In Person'}
                  </p>
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider mt-1.5 transition-colors"
                    style={{ color: '#f0c33c', fontFamily: 'var(--font-body)' }}
                  >
                    <MapPin size={12} /> Get Directions
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-label mb-4" style={{ color: '#f0c33c' }}>Navigate</h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-2">
                {[
                  { label: 'About Us', href: '/about' },
                  { label: 'Pastor Matt', href: '/pastor-matt' },
                  { label: 'Community', href: '/community' },
                  { label: 'Prayer', href: '/prayer' },
                  { label: 'Serve', href: '/serve' },
                  { label: 'Events', href: '/events' },
                  { label: 'Pastoral Care', href: '/pastoral-care' },
                  { label: 'Momentum Care Center', href: '/momentum-care-center' },
                  { label: 'Plan Your Visit', href: '/plan-your-visit' },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm transition-colors" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-label mb-4" style={{ color: '#f0c33c' }}>Connect</h3>
            <div className="flex flex-col gap-3 mb-6">
              <a href={`mailto:${siteSettings.email}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#e0dcce' }}>
                <Mail size={14} className="flex-shrink-0" />{siteSettings.email}
              </a>
              <a href={`tel:${siteSettings.phone.replace(/\D/g, '')}`} className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#e0dcce' }}>
                <Phone size={14} className="flex-shrink-0" />{siteSettings.phone}
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <a href={siteSettings.givingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold btn-sm w-full justify-center">Give Online</a>
              <a href={siteSettings.membershipUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-sm w-full justify-center">Become a Member</a>
              <a href="https://gochurch-merch.printify.me/" target="_blank" rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider transition-colors text-center"
                style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}
              >
                GO Church Merch →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <FooterYear />
          <p className="text-xs" style={{ color: '#9a9a9a', fontFamily: 'var(--font-body)' }}>
            1 Church · 2 Locations · Joliet, IL & Hammond, IN
          </p>
        </div>
      </div>
    </footer>
  )
}

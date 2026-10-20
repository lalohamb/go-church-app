'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { MapPin, Clock, ExternalLink, Users } from 'lucide-react'
import type { Location } from '@/lib/data'

interface LocationDetailsProps {
  location: Location
}

export function LocationDetails({ location }: LocationDetailsProps) {
  const formatLabel =
    location.format === 'hybrid'
      ? 'In Person & Online'
      : location.format === 'in-person'
      ? 'In Person'
      : 'Online'

  return (
    <section aria-labelledby={`details-${location.id}`} className="section-light section-py">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Service details */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-label mb-3" style={{ color: '#209a47' }}>
              Service Details
            </p>
            <div className="gold-divider mb-5" />
            <h2
              id={`details-${location.id}`}
              className="text-h2 mb-8"
              style={{ color: '#0e0e0e' }}
            >
              Join Us This Sunday
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: '#002800' }}
                >
                  <Clock size={18} style={{ color: '#f0c33c' }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                    Sunday Service
                  </p>
                  <p className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                    {location.sundayTime} CT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: '#002800' }}
                >
                  <MapPin size={18} style={{ color: '#f0c33c' }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                    Address
                  </p>
                  <p className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                    {location.address}<br />
                    {location.city}, {location.state} {location.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: '#002800' }}
                >
                  <Users size={18} style={{ color: '#f0c33c' }} />
                </div>
                <div>
                  <p className="font-bold text-sm mb-0.5" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                    Attendance
                  </p>
                  <p className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                    {formatLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <ExternalLink size={15} /> Get Directions
              </a>
              <Link href="/plan-your-visit" className="btn btn-primary">
                Plan Your Visit
              </Link>
            </div>
          </motion.div>

          {/* Map embed placeholder — verified address only */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div
              className="w-full aspect-[4/3] flex flex-col items-center justify-center gap-4 p-8 text-center"
              style={{ background: '#f4f4f4', border: '1px solid #e7e7e7' }}
            >
              <MapPin size={32} style={{ color: '#209a47' }} />
              <div>
                <p className="font-bold text-base mb-1" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                  {location.address}
                </p>
                <p className="text-sm" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                  {location.city}, {location.state} {location.zip}
                </p>
              </div>
              <a
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Open in Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

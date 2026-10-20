'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { MapPin, Clock, ExternalLink } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { locations } from '@/lib/data'

export function LocationsOverview() {
  return (
    <section aria-labelledby="locations-overview-heading" className="section-light section-py">
      <div className="container-site">
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-label mb-3" style={{ color: '#209a47' }}>Two Locations. One Church.</motion.p>
          <div className="gold-divider-center mb-5" />
          <motion.h2 id="locations-overview-heading" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="text-h2 mb-4" style={{ color: '#0e0e0e' }}>Find a Location Near You</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
            className="text-body-lg max-w-xl mx-auto" style={{ color: '#3e3e3e' }}>
            The GO Church meets in Joliet, IL and Hammond, IN every Sunday.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((loc, i) => (
            <motion.div key={loc.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.12 }}
              className="overflow-hidden" style={{ border: '1px solid #e7e7e7' }}>
              <div className="relative aspect-[16/9] overflow-hidden">
                <PlaceholderImage fill label={`${loc.city}, ${loc.state}`} />
                <div className="absolute top-0 left-0 right-0 h-1 z-10"
                  style={{ background: i === 0 ? '#209a47' : '#b4872d' }} />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-label px-3 py-1 text-xs"
                    style={{ background: 'rgba(0,20,0,0.85)', color: '#f0c33c' }}>
                    {loc.format === 'hybrid' ? 'In Person & Online' : 'In Person'}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <p className="text-label mb-1" style={{ color: '#9a9a9a' }}>{loc.state}</p>
                <h3 className="text-h3 mb-5" style={{ color: '#0e0e0e' }}>{loc.city}</h3>
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#209a47' }} />
                    <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="flex-shrink-0" style={{ color: '#209a47' }} />
                    <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                      Sunday · <strong style={{ color: '#0e0e0e' }}>{loc.sundayTime}</strong>
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                    <ExternalLink size={13} /> Directions
                  </a>
                  <Link href={`/locations/${loc.slug}`} className="btn btn-primary btn-sm">Location Details</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { locations } from '@/lib/data'

export function LocationCards() {
  return (
    <section aria-labelledby="locations-heading" className="section-light section-py">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-label mb-2" style={{ color: '#209a47' }}>
              Join Us This Sunday
            </motion.p>
            <div className="gold-divider mb-4" />
            <motion.h2 id="locations-heading" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
              className="text-h2" style={{ color: '#0e0e0e' }}>
              Two Locations. One Church.
            </motion.h2>
          </div>
          <Link href="/locations" className="btn btn-outline btn-sm">All Locations</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" style={{ border: '1px solid #e7e7e7' }}>
          {locations.map((loc, i) => (
            <motion.div key={loc.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.14 }}
              className="group relative overflow-hidden"
              style={{ borderRight: i === 0 ? '1px solid #e7e7e7' : 'none' }}>
              <div className="overflow-hidden" style={{ position: 'relative', aspectRatio: '16/9' }}>
                <PlaceholderImage fill label={`${loc.city}, ${loc.state}`} />
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-label px-3 py-1 text-xs"
                    style={{ background: 'rgba(0,10,0,0.8)', color: '#f0c33c', border: '1px solid rgba(240,195,60,0.3)' }}>
                    {loc.format === 'hybrid' ? 'In Person & Online' : 'In Person'}
                  </span>
                </div>
              </div>
              <div className="p-7">
                <div className="w-10 h-1 mb-5" style={{ background: i === 0 ? '#209a47' : '#b4872d' }} />
                <p className="text-label mb-1" style={{ color: '#9a9a9a' }}>{loc.state}</p>
                <h3 className="text-h2 mb-5" style={{ color: '#0e0e0e' }}>{loc.city}</h3>
                <div className="flex flex-col gap-3 mb-7">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: i === 0 ? '#209a47' : '#b4872d' }} />
                    <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                      {loc.address}, {loc.city}, {loc.state} {loc.zip}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={15} className="flex-shrink-0" style={{ color: i === 0 ? '#209a47' : '#b4872d' }} />
                    <span className="text-sm" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                      Sunday · <strong style={{ color: '#0e0e0e' }}>{loc.sundayTime}</strong>
                    </span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm flex-1 justify-center">
                    Directions
                  </a>
                  <Link href={`/locations/${loc.slug}`} className="btn btn-sm flex-1 justify-center"
                    style={{ background: i === 0 ? '#209a47' : '#b4872d', color: '#fff', borderColor: i === 0 ? '#209a47' : '#b4872d' }}>
                    Details <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

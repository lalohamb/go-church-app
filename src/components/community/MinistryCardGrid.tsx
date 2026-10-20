'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Video, MapPin, ArrowRight } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { ministries } from '@/lib/data'

export function MinistryCardGrid() {
  return (
    <section id="ministries" aria-labelledby="ministry-grid-heading" className="section-light section-py">
      <div className="container-site">
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-label mb-2" style={{ color: '#209a47' }}
          >
            Life at The GO
          </motion.p>
          <div className="gold-divider mb-4" />
          <motion.h2
            id="ministry-grid-heading"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="text-h2" style={{ color: '#0e0e0e' }}
          >
            Our Ministries
          </motion.h2>
        </div>

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        >
          {ministries.map((ministry) => {
            const format = ministry.meetingFormat ?? ministry.format
            const schedule = ministry.scheduleDescription ?? ministry.schedule
            const url = ministry.participationUrl ?? ministry.joinUrl
            const name = ministry.name ?? ministry.title ?? ''

            return (
              <motion.article
                key={ministry.id}
                variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                aria-labelledby={`card-${ministry.id}`}
                className="group flex flex-col overflow-hidden card"
              >
                {/* Image placeholder */}
                <div className="relative flex-shrink-0 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <PlaceholderImage fill label={name} />
                  {/* Format badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-label px-2 py-0.5"
                      style={{ fontSize: '0.6rem', background: format === 'virtual' ? '#003c00' : '#002800', color: '#f0c33c' }}>
                      {format === 'virtual' ? 'Virtual' : format === 'hybrid' ? 'Hybrid' : 'In Person'}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 z-10" style={{ background: '#b4872d' }} />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-4 gap-2">
                  <h3 id={`card-${ministry.id}`} className="font-bold text-sm leading-snug"
                    style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                    {name}
                  </h3>

                  {schedule && (
                    <div className="flex items-center gap-1.5 text-xs" style={{ color: '#209a47', fontFamily: 'var(--font-body)' }}>
                      {format === 'virtual' ? <Video size={11} aria-hidden="true" /> : <MapPin size={11} aria-hidden="true" />}
                      <span>{schedule}</span>
                    </div>
                  )}

                  <p className="text-xs leading-relaxed flex-1" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                    {ministry.description.length > 90 ? ministry.description.slice(0, 90) + '…' : ministry.description}
                  </p>

                  <div className="mt-2">
                    {url ? (
                      <a href={url} target="_blank" rel="noopener noreferrer"
                        className="btn btn-primary btn-sm w-full justify-center" aria-label={`Join ${name}`}>
                        Join <ArrowRight size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <Link href="#ministry-details" className="btn btn-outline btn-sm w-full justify-center"
                        aria-label={`Learn more about ${name}`}>
                        Learn More
                      </Link>
                    )}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

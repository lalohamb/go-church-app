'use client'

import { motion } from 'motion/react'
import { Video, MapPin, ExternalLink } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import type { Ministry } from '@/lib/data'

interface MinistryFeatureProps {
  ministry: Ministry
  reverse?: boolean
}

export function MinistryFeature({ ministry, reverse = false }: MinistryFeatureProps) {
  const format = ministry.meetingFormat ?? ministry.format
  const schedule = ministry.scheduleDescription ?? ministry.schedule
  const url = ministry.participationUrl ?? ministry.joinUrl
  const name = ministry.name ?? ministry.title ?? ''

  return (
    <article aria-labelledby={`ministry-${ministry.id}`} className="section-py-sm overflow-hidden">
      <div className="container-site">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
          reverse ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
        }`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="relative aspect-[16/9] overflow-hidden"
          >
            <PlaceholderImage fill label={name} />
            <div className="absolute bottom-0 left-0 right-0 h-1 z-10" style={{ background: '#b4872d' }} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-label px-3 py-1 text-xs"
                style={{ background: format === 'virtual' ? '#003c00' : '#002800', color: '#f0c33c' }}>
                {format === 'virtual' ? 'Virtual' : format === 'hybrid' ? 'In Person & Online' : 'In Person'}
              </span>
            </div>

            <h2 id={`ministry-${ministry.id}`} className="text-h3 mb-4" style={{ color: '#0e0e0e' }}>
              {name}
            </h2>

            <p className="text-sm leading-relaxed mb-5" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
              {ministry.description}
            </p>

            {schedule && (
              <div className="flex items-center gap-2 mb-6 text-sm font-bold" style={{ color: '#209a47', fontFamily: 'var(--font-body)' }}>
                {format === 'virtual' ? <Video size={15} /> : <MapPin size={15} />}
                <span>{schedule}</span>
              </div>
            )}

            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Join <ExternalLink size={14} />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </article>
  )
}

'use client'

import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import type { Location } from '@/lib/data'

export function LocationHero({ location }: { location: Location }) {
  return (
    <section aria-label={`The GO Church ${location.city}`}
      className="relative flex items-end overflow-hidden"
      style={{ paddingTop: '72px', minHeight: '440px' }}>
      <div className="absolute inset-0 z-0">
        <PlaceholderImage fill label={`${location.city}, ${location.state}`} />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(0,20,0,0.80) 0%, rgba(0,40,0,0.68) 100%)' }} />
      </div>
      <div className="relative z-10 container-site w-full pb-14 pt-16">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="text-label mb-3" style={{ color: '#f0c33c' }}>
          The GO Church · {location.state}
        </motion.p>
        <div className="gold-divider mb-5" />
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }} className="text-h1 mb-4" style={{ color: '#ffffff' }}>
          {location.city}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }} className="text-body-lg max-w-xl" style={{ color: '#e0dcce' }}>
          {location.description}
        </motion.p>
      </div>
    </section>
  )
}

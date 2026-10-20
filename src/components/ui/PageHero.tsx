'use client'

import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

interface PageHeroProps {
  eyebrow: string
  heading: string
  subheading?: string
  image?: string
  imageAlt?: string
  overlayOpacity?: number
}

export function PageHero({ eyebrow, heading, subheading }: PageHeroProps) {
  return (
    <section
      className="relative flex items-end overflow-hidden"
      style={{ paddingTop: '72px', minHeight: '360px' }}
      aria-label={heading}
    >
      <div className="absolute inset-0 z-0">
        <PlaceholderImage fill label="The GO Church" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(0,20,0,0.82) 0%, rgba(0,40,0,0.70) 100%)' }} />
      </div>

      <div className="relative z-10 container-site w-full pb-14 pt-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-label mb-3" style={{ color: '#f0c33c' }}
        >
          {eyebrow}
        </motion.p>
        <div className="gold-divider mb-5" />
        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-h1" style={{ color: '#ffffff' }}
        >
          {heading}
        </motion.h1>
        {subheading && (
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="text-body-lg mt-4 max-w-2xl" style={{ color: '#e0dcce' }}
          >
            {subheading}
          </motion.p>
        )}
      </div>
    </section>
  )
}

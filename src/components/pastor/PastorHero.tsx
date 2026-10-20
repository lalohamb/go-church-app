'use client'

import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function PastorHero() {
  return (
    <section
      aria-labelledby="pastor-hero-heading"
      className="section-dark overflow-hidden"
      style={{ paddingTop: '72px' }}
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-16 items-end">
          {/* Text — stacks above portrait on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="order-1 lg:order-2 py-16 lg:py-24"
          >
            <p className="text-label mb-3" style={{ color: '#f0c33c' }}>
              Senior Pastor
            </p>
            <div className="gold-divider mb-5" />
            <h1
              id="pastor-hero-heading"
              className="text-h1 mb-5"
              style={{ color: '#ffffff' }}
            >
              Meet Our<br />Senior Pastor
            </h1>
            <p
              className="text-body-lg mb-2"
              style={{ color: '#e0dcce' }}
            >
              Pastor Matthew Blumenberg
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: 'rgba(224,220,206,0.7)', fontFamily: 'var(--font-body)' }}
            >
              Teacher · Preacher · Motivational Speaker · Entrepreneur · Pastor
            </p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2 lg:order-1 flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm lg:max-w-none" style={{ position: 'relative', aspectRatio: '3/4' }}>
              <PlaceholderImage fill label="Pastor Matt" />
              <div className="absolute inset-0 pointer-events-none z-10"
                style={{ boxShadow: 'inset 0 0 0 3px #b4872d' }} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Photo credit */}
      <div className="container-site pb-3">
        <p className="text-xs" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
          Photo: @tonerossmedia
        </p>
      </div>
    </section>
  )
}

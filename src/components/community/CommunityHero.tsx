'use client'

import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function CommunityHero() {
  return (
    <section
      aria-label="Community and Ministries"
      className="relative flex items-center overflow-hidden"
      style={{ paddingTop: '72px', minHeight: '560px' }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <PlaceholderImage fill label="GO Church Community" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,10,0,0.92) 0%, rgba(0,20,0,0.72) 50%, rgba(0,10,0,0.30) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,10,0,0.55) 0%, transparent 60%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-site w-full py-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-label mb-4"
            style={{ color: '#f0c33c' }}
          >
            Ministries
          </motion.p>

          <div className="gold-divider mb-6" />

          <h1 className="mb-6" style={{ lineHeight: 1 }}>
            {[
              { text: 'Real People.', color: '#ffffff', delay: 0.15 },
              { text: 'Real Community.', color: '#ffffff', delay: 0.28 },
              { text: 'Real Purpose.', color: '#209a47', delay: 0.42 },
            ].map(({ text, color, delay }) => (
              <motion.span
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
                className="text-h1 block"
                style={{ color }}
              >
                {text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.58 }}
            className="text-body-lg max-w-lg"
            style={{ color: '#e0dcce' }}
          >
            Join a ministry and discover how you can grow, serve, and make a difference.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="mt-8"
          >
            <a href="#ministries" className="btn btn-primary btn-lg">
              Explore Ministries
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

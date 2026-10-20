'use client'

import { motion } from 'motion/react'
import { useState } from 'react'
import { leadhPillars } from '@/lib/data'

export function LeadhPillars() {
  const [active, setActive] = useState<string | null>(null)

  return (
    <section aria-labelledby="leadh-heading" className="section-dark section-py-lg">
      <div className="container-site">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-label mb-3" style={{ color: '#f0c33c' }}
            >
              Our Foundation
            </motion.p>
            <div className="gold-divider mb-5" />
            <motion.h2
              id="leadh-heading"
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
              className="text-h1" style={{ color: '#ffffff' }}
            >
              The LEADH<br />Pillars
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
            className="text-body-lg lg:text-right" style={{ color: '#e0dcce' }}
          >
            Our pillars are the standard that our leaders and community thrive in. Living by these pillars gives our community the ultimate results in their GO season.
          </motion.p>
        </div>

        {/* Pillars — horizontal strip on desktop, vertical on mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-5 gap-px"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        >
          {leadhPillars.map((pillar) => (
            <motion.button
              key={pillar.letter}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              onClick={() => setActive(active === pillar.letter ? null : pillar.letter)}
              onMouseEnter={() => setActive(pillar.letter)}
              onMouseLeave={() => setActive(null)}
              className="relative text-left p-8 flex flex-col overflow-hidden transition-colors duration-300 cursor-pointer"
              style={{
                background: active === pillar.letter ? '#003c00' : '#001a00',
                border: 'none',
              }}
              aria-expanded={active === pillar.letter}
              aria-label={`${pillar.name}: ${pillar.description}`}
            >
              {/* Large background letter */}
              <span
                className="absolute -bottom-4 -right-2 leading-none pointer-events-none select-none"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(5rem, 10vw, 8rem)',
                  color: active === pillar.letter ? 'rgba(180,135,45,0.15)' : 'rgba(255,255,255,0.04)',
                  transition: 'color 0.3s',
                }}
                aria-hidden="true"
              >
                {pillar.letter}
              </span>

              {/* Foreground letter */}
              <span
                className="leading-none mb-4 transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                  color: active === pillar.letter ? '#f0c33c' : '#b4872d',
                }}
                aria-hidden="true"
              >
                {pillar.letter}
              </span>

              <div className="w-6 h-px mb-4 transition-all duration-300"
                style={{ background: active === pillar.letter ? '#f0c33c' : 'rgba(180,135,45,0.4)' }} />

              <h3 className="font-bold text-base mb-3 transition-colors duration-300"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
                {pillar.name}
              </h3>

              <p className="text-sm leading-relaxed transition-all duration-300"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: active === pillar.letter ? '#e0dcce' : 'rgba(224,220,206,0.55)',
                }}>
                {pillar.description}
              </p>
            </motion.button>
          ))}
        </motion.div>

        {/* Acronym footer */}
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.7 }}
          className="text-label mt-8 text-center"
          style={{ color: 'rgba(240,195,60,0.4)' }}
        >
          Leadership · Empowerment · Application · Deliverance · Hope
        </motion.p>
      </div>
    </section>
  )
}

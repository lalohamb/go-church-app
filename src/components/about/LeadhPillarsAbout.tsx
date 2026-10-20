'use client'

import { motion } from 'motion/react'
import { leadhPillars } from '@/lib/data'

export function LeadhPillarsAbout() {
  return (
    <section aria-labelledby="leadh-about-heading" className="section-dark section-py">
      <div className="container-site">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-label mb-3"
            style={{ color: '#f0c33c' }}
          >
            Our Foundation
          </motion.p>
          <div className="gold-divider-center mb-5" />
          <motion.h2
            id="leadh-about-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-h2 mb-4"
            style={{ color: '#ffffff' }}
          >
            The LEADH Pillars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-body-lg max-w-2xl mx-auto"
            style={{ color: '#e0dcce' }}
          >
            Our pillars are the standard that our leaders and community thrive in. Living by these
            pillars gives our community the ultimate results in their GO season.
          </motion.p>
        </div>

        {/* Desktop: horizontal strip. Mobile: vertical stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          {leadhPillars.map((pillar) => (
            <motion.div
              key={pillar.letter}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
              }}
              className="p-8 flex flex-col"
              style={{ background: '#002800' }}
            >
              {/* Large letter */}
              <span
                className="leading-none mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                  color: '#b4872d',
                }}
                aria-hidden="true"
              >
                {pillar.letter}
              </span>

              {/* Divider */}
              <div className="w-8 h-px mb-4" style={{ background: 'rgba(240,195,60,0.4)' }} />

              <h3
                className="font-bold text-lg mb-3"
                style={{ fontFamily: 'var(--font-heading)', color: '#ffffff' }}
              >
                {pillar.name}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'var(--font-body)', color: '#e0dcce' }}
              >
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* LEADH acronym label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-label" style={{ color: 'rgba(240,195,60,0.6)' }}>
            Leadership · Empowerment · Application · Deliverance · Hope
          </p>
        </motion.div>
      </div>
    </section>
  )
}

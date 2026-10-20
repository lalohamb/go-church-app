'use client'

import { motion } from 'motion/react'
import { pastorTimeline } from '@/lib/data'

export function LeadershipTimeline() {
  return (
    <section aria-labelledby="timeline-heading" className="section-warm section-py">
      <div className="container-content">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-label mb-3"
            style={{ color: '#209a47' }}
          >
            Leadership Journey
          </motion.p>
          <div className="gold-divider-center mb-5" />
          <motion.h2
            id="timeline-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-h2"
            style={{ color: '#0e0e0e' }}
          >
            Milestones
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical line — hidden on mobile, visible lg+ */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: '#e7e7e7' }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12 lg:gap-16">
            {pastorTimeline.map((entry, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={entry.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center"
                >
                  {/* Year badge — always left on mobile, alternates on desktop */}
                  <div className={`flex ${isLeft ? 'lg:justify-end' : 'lg:order-2 lg:justify-start'}`}>
                    <div className="flex items-center gap-4">
                      {/* Dot */}
                      <div
                        className="hidden lg:flex w-4 h-4 rounded-full flex-shrink-0 border-2"
                        style={{ background: '#b4872d', borderColor: '#f8f5ee' }}
                        aria-hidden="true"
                      />
                      <div
                        className="px-5 py-3"
                        style={{ background: '#002800' }}
                      >
                        <span
                          className="text-label"
                          style={{ color: '#f0c33c' }}
                        >
                          {entry.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={isLeft ? 'lg:order-2' : ''}>
                    <h3
                      className="text-h3 mb-3"
                      style={{ color: '#0e0e0e' }}
                    >
                      {entry.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}
                    >
                      {entry.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

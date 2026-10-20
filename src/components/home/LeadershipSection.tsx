'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function LeadershipSection() {
  return (
    <section aria-labelledby="pastor-heading" className="section-ink section-py-lg overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-end">
          <motion.div initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1">
            <div style={{ position: 'relative', aspectRatio: '3/4', maxWidth: '384px', margin: '0 auto' }} className="lg:mx-0">
              <PlaceholderImage fill label="Pastor Matt" />
              <div className="absolute inset-0 pointer-events-none z-10"
                style={{ boxShadow: 'inset 0 0 0 3px #b4872d' }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2 lg:pb-8">
            <p className="text-label mb-3" style={{ color: '#f0c33c' }}>Senior Pastor</p>
            <div className="gold-divider mb-6" />
            <h2 id="pastor-heading" className="text-h1 mb-5" style={{ color: '#ffffff' }}>
              Pastor Matthew<br />Blumenberg
            </h2>
            <p className="text-body-lg mb-5" style={{ color: '#e0dcce' }}>
              A sought-out teacher, preacher, motivational speaker, entrepreneur, and Pastor with 20+ years in ministry.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(224,220,206,0.75)', fontFamily: 'var(--font-body)' }}>
              In 2020, Pastor Matt heard the voice of God and launched The GO Church in Hammond, IN. In January 2023, he launched the second plant in Joliet, IL. 1 Church. 2 Locations.
            </p>
            <div className="flex gap-8 mb-10">
              {[{ value: '20+', label: 'Years in Ministry' }, { value: '2', label: 'Locations' }, { value: '300+', label: 'Coffee & Conversations' }].map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', color: '#f0c33c', lineHeight: 1 }}>{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(224,220,206,0.6)', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
                </div>
              ))}
            </div>
            <Link href="/pastor-matt" className="btn btn-gold btn-lg">Meet Pastor Matt</Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

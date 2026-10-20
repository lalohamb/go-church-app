'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { MapPin, Clock } from 'lucide-react'

export function PrayerFeature() {
  return (
    <section aria-labelledby="prayer-heading" className="section-dark section-py">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-label mb-3" style={{ color: '#f0c33c' }}>
              Prayer
            </p>
            <div className="gold-divider mb-5" />
            <h2 id="prayer-heading" className="text-h2 mb-5" style={{ color: '#ffffff' }}>
              Prayer at The GO
            </h2>
            <p className="text-body-lg mb-5" style={{ color: '#e0dcce' }}>
              Prayer is essential to every believer. Prayer is our lifeline.
            </p>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}
            >
              Join us every 1st Saturday at 8am for Prayer at THE GO. Kick your morning off in the
              presence of God. Confess your faults one to another, and pray one for another, that
              ye may be healed.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-sm" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                <Clock size={16} style={{ color: '#f0c33c', flexShrink: 0 }} />
                <span>Every 1st Saturday · 8:00 AM CT</span>
              </div>
              <div className="flex items-start gap-3 text-sm" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                <MapPin size={16} style={{ color: '#f0c33c', flexShrink: 0, marginTop: '2px' }} />
                <span>6021 Hohman Avenue, Hammond, IN 46320</span>
              </div>
            </div>

            <Link href="/prayer" className="btn btn-gold">
              Request Prayer
            </Link>
          </motion.div>

          {/* Visual block */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="flex items-center justify-center"
          >
            <div
              className="w-full max-w-sm aspect-square flex flex-col items-center justify-center p-10 text-center"
              style={{ border: '1px solid rgba(240,195,60,0.3)', background: 'rgba(0,40,0,0.5)' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(4rem, 10vw, 6rem)',
                  color: '#b4872d',
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                PRAY
              </span>
              <div className="w-12 h-px my-5" style={{ background: 'rgba(240,195,60,0.4)' }} />
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}
              >
                &ldquo;Confess your faults one to another, and pray one for another, that ye may be healed.&rdquo;
              </p>
              <p className="text-xs mt-3" style={{ color: '#9a9a9a', fontFamily: 'var(--font-body)' }}>
                James 5:16
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

export function WelcomeSection() {
  return (
    <section aria-labelledby="welcome-heading" className="section-parchment section-py-lg overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 overflow-hidden" style={{ position: 'relative', aspectRatio: '3/4' }}>
            <PlaceholderImage fill label="The GO Church" />
            <div className="absolute bottom-0 left-0 right-0 h-1.5 z-10" style={{ background: '#b4872d' }} />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:col-start-7 lg:pl-14">
            <p className="text-label mb-3" style={{ color: '#209a47' }}>Our Vision</p>
            <div className="gold-divider mb-6" />
            <h2 id="welcome-heading" className="text-h1 mb-6" style={{ color: '#0e0e0e' }}>
              Welcome to<br />The GO Church
            </h2>
            <blockquote className="text-pull mb-6 pl-5" style={{ color: '#002800', borderLeft: '3px solid #b4872d' }}>
              &ldquo;Restore life and hope, and empower people to experience their GO season through the word of God.&rdquo;
            </blockquote>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
              Whether you&apos;re searching for community, healing, purpose, or a deeper walk with God — The GO Church is a place where every season of your life is met with the power of the Word.
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
              We are a multi-generational church with two locations serving the Chicagoland area and beyond.
            </p>
            <a href="https://forms.gle/LWK7JNtDRKnFyjjC9" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Accept Christ &amp; Become a Member
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

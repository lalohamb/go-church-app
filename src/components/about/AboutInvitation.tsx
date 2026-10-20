'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export function AboutInvitation() {
  return (
    <section aria-labelledby="about-cta-heading" className="section-accent section-py">
      <div className="container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-label mb-3"
          style={{ color: 'rgba(255,255,255,0.75)' }}
        >
          You Belong Here
        </motion.p>
        <div className="gold-divider-center mb-6" />
        <motion.h2
          id="about-cta-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-h2 mb-4"
          style={{ color: '#ffffff' }}
        >
          Ready to Experience Your GO Season?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-body-lg mb-10"
          style={{ color: 'rgba(255,255,255,0.88)' }}
        >
          Explore our community ministries or plan your first visit to The GO Church.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/community" className="btn btn-primary-dark btn-lg">
            Explore Community
          </Link>
          <Link href="/plan-your-visit" className="btn btn-outline-white btn-lg">
            Plan Your Visit
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

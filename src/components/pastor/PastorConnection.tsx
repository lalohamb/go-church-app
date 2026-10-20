'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

export function PastorConnection() {
  return (
    <section aria-labelledby="pastor-cta-heading" className="section-dark section-py">
      <div className="container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-label mb-3"
          style={{ color: '#f0c33c' }}
        >
          The GO Church
        </motion.p>
        <div className="gold-divider-center mb-6" />
        <motion.h2
          id="pastor-cta-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-h2 mb-4"
          style={{ color: '#ffffff' }}
        >
          Explore The GO Church
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-body-lg mb-10"
          style={{ color: '#e0dcce' }}
        >
          Discover our community ministries, life groups, and what it means to be part of The GO Church family.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/community" className="btn btn-gold btn-lg">
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

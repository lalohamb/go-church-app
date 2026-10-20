'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { siteSettings } from '@/lib/data'

export function CommunityConnection() {
  return (
    <section aria-labelledby="community-cta-heading" className="section-warm section-py">
      <div className="container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-label mb-3"
          style={{ color: '#209a47' }}
        >
          Get Connected
        </motion.p>
        <div className="gold-divider-center mb-6" />
        <motion.h2
          id="community-cta-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-h2 mb-4"
          style={{ color: '#0e0e0e' }}
        >
          Find Your Place at The GO
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-body-lg mb-10"
          style={{ color: '#3e3e3e' }}
        >
          Explore a life group, join us for prayer, or contact the church to learn more about
          getting involved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/plan-your-visit" className="btn btn-primary btn-lg">
            Plan Your Visit
          </Link>
          <a
            href={`mailto:${siteSettings.email}`}
            className="btn btn-outline btn-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

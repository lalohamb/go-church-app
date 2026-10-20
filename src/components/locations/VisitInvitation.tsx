'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { siteSettings } from '@/lib/data'

interface VisitInvitationProps {
  city: string
  /** Show online watch CTA — only for Hammond which has verified hybrid format */
  showOnline?: boolean
}

export function VisitInvitation({ city, showOnline = false }: VisitInvitationProps) {
  return (
    <section aria-labelledby={`visit-${city.toLowerCase()}-heading`} className="section-dark section-py">
      <div className="container-narrow text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-label mb-3"
          style={{ color: '#f0c33c' }}
        >
          You&apos;re Invited
        </motion.p>
        <div className="gold-divider-center mb-6" />
        <motion.h2
          id={`visit-${city.toLowerCase()}-heading`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="text-h2 mb-4"
          style={{ color: '#ffffff' }}
        >
          First Time at The GO Church {city}?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-body-lg mb-10"
          style={{ color: '#e0dcce' }}
        >
          We&apos;d love to see you. Plan your visit and let us know you&apos;re coming.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link href="/plan-your-visit" className="btn btn-primary-dark btn-lg">
            Plan Your Visit
          </Link>
          {showOnline && (
            <a
              href={siteSettings.givingUrl.replace('/give/online', '')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-white btn-lg"
            >
              Watch Online
            </a>
          )}
          <a
            href={`mailto:${siteSettings.email}`}
            className="btn btn-outline-white btn-lg"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

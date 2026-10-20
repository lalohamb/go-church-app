'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'

const programs = [
  {
    title: 'GO Closet',
    subtitle: 'Clothing Outreach',
    description: 'Serving our communities through clothing outreach at both our Joliet and Hammond locations.',
    locations: ['Joliet, IL', 'Hammond, IN'],
  },
  {
    title: 'Community Kitchen',
    subtitle: 'Food Outreach',
    description: 'The Community Kitchen Outreach serves our Hammond community with food resources.',
    locations: ['Hammond, IN'],
  },
]

export function OutreachSection() {
  return (
    <section aria-labelledby="outreach-heading" className="section-py-lg overflow-hidden" style={{ background: '#080e08' }}>
      <div className="container-site">
        <div className="mb-14">
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-label mb-3" style={{ color: '#f0c33c' }}>Momentum Care Center</motion.p>
          <div className="gold-divider mb-5" />
          <motion.h2 id="outreach-heading" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="text-h1 max-w-xl" style={{ color: '#ffffff' }}>
            Outreach &amp; Community Impact
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {programs.map((program, i) => (
            <motion.div key={program.title} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden" style={{ position: 'relative', aspectRatio: '4/3' }}>
              <PlaceholderImage fill label={program.title} />
              <div className="overlay-bottom" />
              <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                <p className="text-label mb-2" style={{ color: '#f0c33c' }}>{program.subtitle}</p>
                <h3 className="text-h2 mb-3" style={{ color: '#ffffff' }}>{program.title}</h3>
                <p className="text-sm leading-relaxed mb-4 max-w-sm" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                  {program.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {program.locations.map((loc) => (
                    <span key={loc} className="text-xs font-bold uppercase tracking-wider px-2.5 py-1"
                      style={{ color: '#f0c33c', border: '1px solid rgba(240,195,60,0.4)', fontFamily: 'var(--font-body)' }}>
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center">
          <Link href="/momentum-care-center" className="btn btn-gold btn-lg">
            Learn About Momentum Care Center
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

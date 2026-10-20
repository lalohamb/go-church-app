'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Heart, Users, HandHeart, Flame, DollarSign } from 'lucide-react'
import { siteSettings } from '@/lib/data'

const pathways = [
  {
    icon: Heart,
    title: 'Accept Christ',
    subtitle: 'Become a Member',
    description: 'Take the next step in your faith journey and become part of The GO Church family.',
    href: siteSettings.membershipUrl,
    external: true,
    cta: 'Get Started',
    accent: '#209a47',
  },
  {
    icon: Users,
    title: 'Join a Life Group',
    subtitle: 'Do Life Together',
    description: '"You can\'t do life with everyone, but everyone needs to do life with someone."',
    href: '/community',
    external: false,
    cta: 'Find a Group',
    accent: '#b4872d',
  },
  {
    icon: Flame,
    title: 'Request Prayer',
    subtitle: 'We Believe',
    description: 'Confess your faults one to another, and pray one for another, that ye may be healed.',
    href: '/prayer',
    external: false,
    cta: 'Request Prayer',
    accent: '#209a47',
  },
  {
    icon: HandHeart,
    title: 'Serve',
    subtitle: 'Fill the Gap',
    description: 'Serving at The GO Church is an opportunity to fill the gap and help others in the GO Church community.',
    href: siteSettings.serveUrl,
    external: true,
    cta: 'Sign Up to Serve',
    accent: '#b4872d',
  },
  {
    icon: DollarSign,
    title: 'Give',
    subtitle: 'Support the Vision',
    description: 'Your generosity fuels the mission of The GO Church and our community outreach.',
    href: siteSettings.givingUrl,
    external: true,
    cta: 'Give Online',
    accent: '#209a47',
  },
]

export function ConnectionSection() {
  return (
    <section aria-labelledby="connection-heading" className="section-parchment section-py-lg">
      <div className="container-site">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-label mb-3" style={{ color: '#209a47' }}
          >
            Get Connected
          </motion.p>
          <div className="gold-divider-center mb-5" />
          <motion.h2
            id="connection-heading"
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
            className="text-h2 mb-4" style={{ color: '#0e0e0e' }}
          >
            Your Next Step
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
            className="text-body-lg max-w-xl mx-auto" style={{ color: '#3e3e3e' }}
          >
            However you&apos;re looking to connect, there&apos;s a place for you at The GO Church.
          </motion.p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {pathways.map((p) => {
            const Icon = p.icon
            const inner = (
              <>
                <div className="w-12 h-12 flex items-center justify-center mb-5 transition-colors duration-300"
                  style={{ background: '#002800' }}>
                  <Icon size={22} style={{ color: p.accent }} />
                </div>
                <p className="text-label mb-1" style={{ color: p.accent, fontSize: '0.7rem' }}>{p.subtitle}</p>
                <h3 className="font-bold text-base mb-3" style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed flex-1 mb-5"
                  style={{ fontFamily: 'var(--font-body)', color: '#5a5a5a' }}>
                  {p.description}
                </p>
                <span className="text-label flex items-center gap-1.5" style={{ color: p.accent, fontSize: '0.7rem' }}>
                  {p.cta} →
                </span>
              </>
            )
            const cls = 'flex flex-col h-full p-6 no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'
            const style = { background: '#ffffff', border: '1px solid #e7e7e7' }
            return (
              <motion.div
                key={p.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }}
              >
                {p.external
                  ? <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls} style={style}>{inner}</a>
                  : <Link href={p.href} className={cls} style={style}>{inner}</Link>
                }
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'motion/react'

const paragraphs = [
  'Pastor Matthew Blumenberg is a sought-out teacher, preacher, motivational speaker, entrepreneur, and Pastor who has been in ministry for 20+ years.',
  'He has a passion and drive to impart and develop people into becoming the best version of themselves. This has afforded him the opportunity to pour into a multiplicity of people in every age bracket in the kingdom. Pastor Matt is a corporate man — this side of him has opened doors for him to travel to Palm Springs, Seattle, Long Beach, Dallas, Atlanta, New York, and much more to impart into individuals in corporate America.',
  'Pastor Matt is an advocate for all things Leadership Development. In October of 2015, he started the leadership organization Coffee and Conversations, whose vision is to empower Christian leaders to lead and make impact in their sphere of influence. Held online, Coffee and Conversations monthly sessions serve as a safe place for leaders to connect, release, and experience a spiritual rejuvenation through healthy conversation. This movement draws over 300+ individuals for a time of Empowerment.',
  'In 2020 Pastor Matt heard the voice of God and launched The GO Church — a rapidly growing multi-generational church in Hammond, IN. His electrifying and innovative approach to the word of God, and his passion for community outreach, has made the church a pillar in the community it serves. In January of 2023, he launched The GO Church in Joliet — the second plant serving Illinois and the region. 1 Church. 2 Locations.',
  'Pastor Matt has been credited for having one of the fastest growing churches in the Chicagoland area post-pandemic. He leveraged the hybrid model, and it worked for his congregation.',
  'Pastor Matt believes in spiritual warfare and his deliverance ministry has shown to be effective in these last days. His spirit, his anointing, his charisma, and gift to interpret the word of God in practical methods continues to attract people of all ages and prove the anointing on his life. Pastor Matt embodies the true essence of impactful leadership.',
]

export function PastorBiography() {
  return (
    <section aria-labelledby="bio-heading" className="section-light section-py">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <div className="lg:sticky" style={{ top: '100px' }}>
              <p className="text-label mb-3" style={{ color: '#209a47' }}>
                Biography
              </p>
              <div className="gold-divider mb-5" />
              <h2
                id="bio-heading"
                className="text-h3"
                style={{ color: '#0e0e0e' }}
              >
                Pastor Matthew<br />Blumenberg
              </h2>
              <p
                className="text-sm mt-3 leading-relaxed"
                style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}
              >
                20+ years in ministry
              </p>
            </div>
          </motion.div>

          {/* Body copy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
            }}
            className="lg:col-span-9 flex flex-col gap-6"
          >
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className={i === 0 ? 'text-body-lg' : 'text-sm leading-relaxed'}
                style={{
                  color: i === 0 ? '#272727' : '#3e3e3e',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

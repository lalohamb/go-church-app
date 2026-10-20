'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

const IMAGE =
  'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511201849-FB45ZDZHSFO73V8UPVYE/GC_Empowerment_Wide.jpg'

export function VisionSection() {
  return (
    <section aria-labelledby="vision-heading" className="section-warm section-py overflow-hidden">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p className="text-label mb-3" style={{ color: '#209a47' }}>
              Our Vision
            </p>
            <div className="gold-divider mb-5" />
            <h2 id="vision-heading" className="text-h2 mb-6" style={{ color: '#0e0e0e' }}>
              Restore Life.<br />Restore Hope.
            </h2>
            <p className="text-body-lg mb-5" style={{ color: '#3e3e3e' }}>
              Our vision is to restore life and hope to the places in your life that are stuck, and
              empower you to experience your GO season in abundance through the word of God.
            </p>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
              The GO Church is a multi-generational church with two locations serving the Chicagoland
              area and beyond. Whether you&apos;re searching for community, healing, purpose, or a
              deeper walk with God — there is a place for you here.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
              We are a church that believes in the full power of the Word of God — that it is alive,
              active, and able to transform every area of your life. Our approach is practical,
              electrifying, and rooted in authentic community.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src={IMAGE}
              alt="The GO Church community gathered in worship"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: '#b4872d' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Clock, MapPin, Mail } from 'lucide-react'
import { siteSettings } from '@/lib/data'

export function PrayerContent() {
  return (
    <>
      {/* Main content */}
      <section aria-labelledby="prayer-content-heading" className="section-light section-py-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Main */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7"
            >
              <p className="text-label mb-3" style={{ color: '#209a47' }}>Corporate Prayer</p>
              <div className="gold-divider mb-6" />
              <h2 id="prayer-content-heading" className="text-h2 mb-6" style={{ color: '#0e0e0e' }}>
                Join Us for Prayer
              </h2>

              <p className="text-body-lg mb-5" style={{ color: '#3e3e3e' }}>
                Prayer is essential to every believer. Prayer is our lifeline. Join us every 1st Saturday at 8am for Prayer at THE GO. Kick your morning off in the presence of God.
              </p>

              <blockquote className="text-pull my-8 pl-5" style={{ color: '#002800', borderLeft: '3px solid #b4872d' }}>
                &ldquo;Confess your faults one to another, and pray one for another, that ye may be healed.&rdquo;
                <footer className="text-sm mt-2" style={{ color: '#9a9a9a', fontFamily: 'var(--font-body)', fontStyle: 'normal' }}>
                  — James 5:16
                </footer>
              </blockquote>

              <p className="text-sm leading-relaxed" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                At The GO Church, we believe in the power of corporate prayer. When we come together in agreement, God moves. Whether you are carrying a burden, seeking breakthrough, or simply want to start your Saturday in the presence of God — you are welcome here.
              </p>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="lg:col-span-4 lg:col-start-9"
            >
              {/* Service details card */}
              <div className="p-7 mb-6" style={{ background: '#002800' }}>
                <p className="text-label mb-4" style={{ color: '#f0c33c' }}>Prayer at The GO</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#f0c33c' }} />
                    <div>
                      <p className="font-bold text-sm" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Schedule</p>
                      <p className="text-sm mt-0.5" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>Every 1st Saturday · 8:00 AM CT</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#f0c33c' }} />
                    <div>
                      <p className="font-bold text-sm" style={{ color: '#ffffff', fontFamily: 'var(--font-heading)' }}>Location</p>
                      <p className="text-sm mt-0.5" style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }}>
                        6021 Hohman Avenue<br />Hammond, IN 46320
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href="https://maps.google.com?q=6021+Hohman+Avenue+Hammond+IN+46320"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-sm w-full justify-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Prayer request */}
              <div className="p-6" style={{ background: '#f8f5ee', border: '1px solid #e7e7e7' }}>
                <p className="text-label mb-3" style={{ color: '#209a47' }}>Prayer Request</p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: '#3e3e3e', fontFamily: 'var(--font-body)' }}>
                  Need prayer? Reach out to us and our team will pray with you.
                </p>
                <a
                  href={`mailto:${siteSettings.email}?subject=Prayer Request`}
                  className="btn btn-primary btn-sm w-full justify-center"
                >
                  <Mail size={14} /> Submit Prayer Request
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-accent section-py-sm">
        <div className="container-narrow text-center">
          <p className="text-body-lg mb-6" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Looking for more ways to connect at The GO Church?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/community" className="btn btn-primary-dark">Explore Community</Link>
            <Link href="/plan-your-visit" className="btn btn-outline-white">Plan Your Visit</Link>
          </div>
        </div>
      </section>
    </>
  )
}

'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Calendar, MapPin, Video, ExternalLink } from 'lucide-react'
import { upcomingEvents, locations } from '@/lib/data'

function formatDate(iso: string) {
  const d = new Date(iso)
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: d.getDate(),
    weekday: d.toLocaleDateString('en-US', { weekday: 'long' }),
    full: d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

const categoryLabels: Record<string, string> = {
  'life-groups': 'Life Groups',
  'outreach': 'Outreach',
  'prayer': 'Prayer',
}

export function EventsListing() {
  return (
    <section aria-labelledby="events-list-heading" className="section-light section-py-lg">
      <div className="container-content">
        <h2 id="events-list-heading" className="sr-only">All Upcoming Events</h2>

        <div className="flex flex-col divide-y" style={{ borderColor: '#e7e7e7' }}>
          {upcomingEvents.map((event, i) => {
            const d = formatDate(event.startAt)
            const loc = event.locationId ? locations.find((l) => l.id === event.locationId) : null
            const catLabel = categoryLabels[event.category] ?? event.category

            return (
              <motion.article
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-8 items-start"
                aria-labelledby={`ev-${event.id}`}
              >
                {/* Date block */}
                <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-start gap-4 sm:gap-0">
                  <div className="flex flex-col items-center justify-center w-16 h-16 flex-shrink-0"
                    style={{ background: '#002800' }}>
                    <span className="text-xs font-bold" style={{ color: '#f0c33c', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>{d.month}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: '#ffffff', lineHeight: 1 }}>{d.day}</span>
                  </div>
                  <div className="sm:mt-3">
                    <p className="text-xs font-bold" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {d.weekday}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#9a9a9a', fontFamily: 'var(--font-body)' }}>
                      {d.time} CT
                    </p>
                  </div>
                </div>

                {/* Image */}
                {event.image && (
                  <div className="overflow-hidden" style={{ position: 'relative', aspectRatio: '16/9' }}>
                    <Image src={event.image} alt={event.title} fill
                      className="object-cover" sizes="(max-width: 640px) 100vw, 25vw" />
                  </div>
                )}

                {/* Content */}
                <div className={event.image ? 'sm:col-span-5' : 'sm:col-span-8'}>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-label px-2.5 py-0.5 text-xs"
                      style={{ background: '#f4f4f4', color: '#5a5a5a' }}>
                      {catLabel}
                    </span>
                    <span className="text-label px-2.5 py-0.5 text-xs"
                      style={{ background: event.meetingType === 'virtual' ? '#003c00' : '#002800', color: '#f0c33c' }}>
                      {event.meetingType === 'virtual' ? 'Virtual' : event.meetingType === 'hybrid' ? 'In Person & Online' : 'In Person'}
                    </span>
                  </div>

                  <h3 id={`ev-${event.id}`} className="text-h3 mb-2" style={{ color: '#0e0e0e' }}>
                    {event.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} style={{ color: '#209a47' }} />
                      {d.full} · {d.time} CT
                    </span>
                    {event.meetingType === 'virtual' ? (
                      <span className="flex items-center gap-1.5">
                        <Video size={12} style={{ color: '#209a47' }} /> Virtual / Online
                      </span>
                    ) : loc ? (
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} style={{ color: '#209a47' }} />
                        {loc.address}, {loc.city}, {loc.state}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* CTA */}
                <div className="sm:col-span-2 flex sm:flex-col gap-3 sm:items-end sm:justify-start">
                  {event.registrationUrl ? (
                    <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer"
                      className="btn btn-primary btn-sm">
                      Join <ExternalLink size={12} />
                    </a>
                  ) : (
                    <span className="text-label text-xs" style={{ color: '#9a9a9a' }}>No registration required</span>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 text-center" style={{ borderTop: '1px solid #e7e7e7' }}>
          <p className="text-body-lg mb-6" style={{ color: '#3e3e3e' }}>
            Want to stay connected with everything happening at The GO Church?
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/community" className="btn btn-primary">Explore Ministries</Link>
            <Link href="/plan-your-visit" className="btn btn-outline">Plan Your Visit</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

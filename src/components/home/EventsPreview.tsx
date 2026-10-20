'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { Calendar, MapPin, Video, ExternalLink, ArrowRight } from 'lucide-react'
import { PlaceholderImage } from '@/components/ui/PlaceholderImage'
import { upcomingEvents, locations } from '@/lib/data'

function formatDate(iso: string) {
  const d = new Date(iso)
  return {
    month: d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
    day: d.getDate(),
    weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
    time: d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }),
  }
}

export function EventsPreview() {
  const events = upcomingEvents.slice(0, 4)
  const [featured, ...rest] = events

  return (
    <section aria-labelledby="events-heading" className="section-light section-py-lg">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-label mb-2" style={{ color: '#209a47' }}>What&apos;s Coming Up</motion.p>
            <div className="gold-divider mb-4" />
            <motion.h2 id="events-heading" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
              className="text-h2" style={{ color: '#0e0e0e' }}>Upcoming Events</motion.h2>
          </div>
          <Link href="/events" className="btn btn-outline btn-sm">View All Events</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {featured && (() => {
            const d = formatDate(featured.startAt)
            const loc = featured.locationId ? locations.find((l) => l.id === featured.locationId) : null
            return (
              <motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-5 group overflow-hidden"
                style={{ position: 'relative', minHeight: '380px' }}
                aria-labelledby="featured-event-title">
                <div style={{ position: 'relative', width: '100%', minHeight: '380px' }}>
                  <PlaceholderImage fill label={featured.title} />
                  <div className="overlay-bottom" />
                </div>
                <div className="absolute top-5 left-5 flex flex-col items-center justify-center w-14 h-14 z-10"
                  style={{ background: '#b4872d' }}>
                  <span className="text-xs font-bold" style={{ color: '#fff', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>{d.month}</span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#fff', lineHeight: 1 }}>{d.day}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <p className="text-label mb-2" style={{ color: '#f0c33c', fontSize: '0.7rem' }}>
                    {featured.meetingType === 'virtual' ? 'Virtual' : loc ? `${loc.city}, ${loc.state}` : 'In Person'}
                  </p>
                  <h3 id="featured-event-title" className="text-h3 mb-3" style={{ color: '#ffffff' }}>{featured.title}</h3>
                  {featured.registrationUrl ? (
                    <a href={featured.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary-dark btn-sm">
                      Join <ExternalLink size={12} />
                    </a>
                  ) : (
                    <Link href="/events" className="btn btn-ghost-dark btn-sm">Details <ArrowRight size={12} /></Link>
                  )}
                </div>
              </motion.article>
            )
          })()}

          <div className="lg:col-span-7 flex flex-col divide-y" style={{ borderColor: '#e7e7e7' }}>
            {rest.map((event, i) => {
              const d = formatDate(event.startAt)
              const loc = event.locationId ? locations.find((l) => l.id === event.locationId) : null
              return (
                <motion.article key={event.id} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 py-6 group" aria-labelledby={`event-${event.id}`}>
                  <div className="flex-shrink-0 flex flex-col items-center justify-center w-14 h-14"
                    style={{ background: '#f4f4f4', border: '1px solid #e7e7e7' }}>
                    <span className="text-xs font-bold" style={{ color: '#9a9a9a', fontFamily: 'var(--font-body)', letterSpacing: '0.1em' }}>{d.month}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: '#0e0e0e', lineHeight: 1 }}>{d.day}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 id={`event-${event.id}`} className="font-bold text-base mb-1 leading-snug"
                      style={{ fontFamily: 'var(--font-heading)', color: '#0e0e0e' }}>{event.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                        <Calendar size={11} style={{ color: '#209a47' }} />{d.weekday} · {d.time} CT
                      </span>
                      <span className="flex items-center gap-1.5 text-xs" style={{ color: '#5a5a5a', fontFamily: 'var(--font-body)' }}>
                        {event.meetingType === 'virtual'
                          ? <><Video size={11} style={{ color: '#209a47' }} /> Virtual</>
                          : <><MapPin size={11} style={{ color: '#209a47' }} />{loc ? `${loc.city}, ${loc.state}` : 'In Person'}</>}
                      </span>
                    </div>
                    {event.registrationUrl ? (
                      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                        Join <ExternalLink size={11} />
                      </a>
                    ) : (
                      <Link href="/events" className="btn btn-outline btn-sm">Details</Link>
                    )}
                  </div>
                  <div className="hidden sm:flex relative flex-shrink-0 items-center justify-center overflow-hidden"
                    style={{ width: '80px', height: '80px', background: '#f4f4f4' }}>
                    <PlaceholderImage fill label="" />
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { upcomingEvents, locations } from '@/lib/data'

// Event times are stored as Chicago wall-clock strings without an offset,
// so format them as UTC to print exactly what was entered.
function formatEvent(iso: string) {
  const d = new Date(`${iso}Z`)
  const fmt = (o: Intl.DateTimeFormatOptions) => d.toLocaleString('en-US', { timeZone: 'UTC', ...o })
  return {
    month: fmt({ month: 'short' }).toUpperCase(),
    day: fmt({ day: '2-digit' }),
    when: `${fmt({ weekday: 'long', month: 'short', day: 'numeric' })} · ${fmt({ hour: 'numeric', minute: '2-digit' })}`,
  }
}

export function PastorAndEvents() {
  const events = upcomingEvents
    .filter((e) => e.status === 'confirmed')
    .sort((a, b) => a.startAt.localeCompare(b.startAt))
    .slice(0, 3)

  return (
    <section aria-label="A word from our pastor and upcoming events" className="section-light pb-14 lg:pb-16">
      <div className="container-site grid grid-cols-1 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-8 lg:gap-10 items-stretch">

        {/* Pastor */}
        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-6 lg:gap-8 items-center lg:pr-10 lg:border-r" style={{ borderColor: '#e7e7e7' }}>
          <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden" style={{ background: '#209a47' }}>
            <Image src="/images/home/pastor.jpg" alt="Pastor Matt Blumenberg" fill
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
              className="object-cover" style={{ objectPosition: '50% 18%' }} />
          </div>
          <div>
            <p className="text-tracked mb-2" style={{ color: '#3e3e3e', fontSize: '0.625rem' }}>A Word From Our Pastor</p>
            <h2 className="text-serif-h2 mb-4" style={{ color: '#0e0e0e' }}>A Church on the Move</h2>
            <p className="mb-6" style={{ color: '#3e3e3e' }}>
              At The GO Church, we believe in a faith that moves, a community that cares, and a purpose
              that changes lives. No matter where you are in your journey, there&apos;s a place for you here.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <div>
                <p className="text-2xl italic leading-none" style={{ fontFamily: 'var(--font-serif)', color: '#a5782d' }}>Pastor Matt</p>
                <p className="text-xs mt-1" style={{ color: '#5a5a5a' }}>Senior Pastor</p>
              </div>
              <Link href="/about" className="btn btn-pill btn-green-glow btn-sm">
                Learn More About Our Church <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* Events */}
        <div className="relative overflow-hidden rounded-2xl p-6 lg:p-7"
          style={{ background: 'linear-gradient(160deg, #003c00 0%, #002800 45%, #001400 100%)', border: '1px solid rgba(210,168,50,0.35)' }}>
          <div className="flex items-baseline justify-between gap-4 mb-5">
            <h2 className="text-serif-h3 text-white" style={{ fontSize: 'clamp(1.625rem, 2.2vw, 2rem)' }}>Upcoming Events</h2>
            <Link href="/events" className="inline-flex items-center gap-1.5 text-sm font-bold hover:underline shrink-0" style={{ color: '#2db85a' }}>
              View All Events <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <ul className="flex flex-col gap-3">
            {events.map((event) => {
              const d = formatEvent(event.startAt)
              const loc = event.locationId ? locations.find((l) => l.id === event.locationId) : null
              return (
                <li key={event.id}>
                  <Link href="/events" className="group relative flex items-center gap-4 overflow-hidden rounded-lg p-2.5 pr-4"
                    style={{ background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    {event.image && (
                      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-[45%]">
                        <Image src={event.image} alt="" fill sizes="200px" className="object-cover opacity-50" />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, #031603 0%, rgba(3,22,3,0.4) 60%, rgba(3,22,3,0.2) 100%)' }} />
                      </div>
                    )}
                    <div className="relative flex w-[52px] shrink-0 flex-col items-center rounded-md bg-white py-1.5 leading-none">
                      <span className="text-[0.625rem] font-bold tracking-[0.12em]" style={{ color: '#5a5a5a' }}>{d.month}</span>
                      <span className="text-2xl mt-0.5" style={{ fontFamily: 'var(--font-serif)', color: '#0e0e0e' }}>{d.day}</span>
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <h3 className="font-bold text-white text-[0.9375rem] leading-snug line-clamp-2 sm:truncate">{event.title}</h3>
                      <p className="text-xs mt-0.5 sm:truncate" style={{ color: 'rgba(224,220,206,0.8)' }}>
                        {d.when}{loc ? ` · ${loc.city}` : event.meetingType === 'virtual' ? ' · Online' : ''}
                      </p>
                    </div>
                    <span className="arrow-badge relative text-white group-hover:bg-white group-hover:text-[#002800]">
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, MapPin, Play } from 'lucide-react'
import { locations, siteSettings } from '@/lib/data'

const stateAbbr: Record<string, string> = { Illinois: 'IL', Indiana: 'IN' }

function InfoCard({ icon, label, imagePosition, children }: {
  icon: React.ReactNode
  label: string
  imagePosition: string
  children: React.ReactNode
}) {
  return (
    <div className="card-gold-frame flex items-start gap-5 px-6 py-5 min-h-[124px]">
      <Image src="/images/home/hero-skyline.jpg" alt="" fill sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover opacity-45" style={{ objectPosition: imagePosition }} />
      <div aria-hidden="true" className="absolute inset-0"
        style={{ background: 'linear-gradient(90deg, #041004 0%, rgba(4,16,4,0.92) 45%, rgba(4,16,4,0.35) 100%)' }} />
      <div className="relative shrink-0 mt-1" style={{ color: '#e1b43c' }}>{icon}</div>
      <div className="relative">
        <p className="text-tracked mb-2" style={{ color: '#e0dcce' }}>{label}</p>
        {children}
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden" style={{ background: '#031203' }}>
      {/* Background */}
      <div className="absolute inset-0">
        <Image src="/images/home/hero-hammond-church.jpg" alt="" fill preload sizes="100vw"
          className="object-cover hero-drift" style={{ objectPosition: '62% 30%' }} />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(90deg, rgba(0,10,0,0.92) 0%, rgba(0,10,0,0.7) 32%, rgba(0,10,0,0.15) 62%, rgba(0,10,0,0.35) 100%)' }} />
        <div aria-hidden="true" className="absolute inset-0 lg:hidden" style={{ background: 'rgba(0,10,0,0.55)' }} />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 45%, rgba(3,18,3,0.85) 72%, #031203 100%)' }} />
      </div>

      <div className="relative container-site pt-[120px] lg:pt-[110px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-center gap-8 lg:min-h-[520px]">

          {/* Copy */}
          <div className="rise-in">
            <h1 id="hero-heading" className="text-serif-display">
              <span className="block text-white">Welcome to</span>
              <span className="block text-gold-gradient pb-2">The GO Church</span>
            </h1>
            <p className="text-tracked mt-3 mb-6" style={{ color: '#ffffff', fontSize: '0.8125rem', letterSpacing: '0.42em' }}>
              Faith. Community. Purpose.
            </p>
            <p className="max-w-md mb-9 text-[1.0625rem] leading-relaxed font-medium" style={{ color: '#e7e7e7' }}>
              A church on the move — restoring life and hope, and empowering people to experience
              their GO season through the word of God.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/plan-your-visit" className="btn btn-pill btn-green-glow btn-lg">
                <MapPin size={20} aria-hidden="true" /> Plan a Visit <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href={siteSettings.watchUrl} target="_blank" rel="noopener noreferrer" className="btn btn-pill btn-gold-outline btn-lg">
                <Play size={18} fill="currentColor" aria-hidden="true" /> Watch Online <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Emblem */}
          <div className="relative hidden lg:flex justify-center items-center rise-in">
            <div aria-hidden="true" className="absolute inset-[8%] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, rgba(240,195,60,0.35) 0%, rgba(32,154,71,0.25) 45%, transparent 70%)' }} />
            <Image src="/go-church-emblem.png" alt="" width={1774} height={887} preload
              sizes="(min-width: 1024px) 45vw, 0px" className="relative w-full max-w-[640px] h-auto drop-shadow-[0_12px_40px_rgba(0,0,0,0.6)]" />
          </div>
        </div>

        {/* Info strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 mt-12 lg:mt-6 pb-10">
          <InfoCard icon={<Clock size={38} strokeWidth={1.75} />} label="Service Times" imagePosition="20% 50%">
            {locations.map((loc) => (
              <p key={loc.id} className="font-bold text-white text-[1.0625rem] leading-snug">
                {loc.city} · Sunday {loc.sundayTime}
              </p>
            ))}
          </InfoCard>
          {locations.map((loc, i) => (
            <InfoCard key={loc.id} icon={<MapPin size={34} strokeWidth={1.75} />}
              label={`${loc.city} Location`} imagePosition={i === 0 ? '50% 50%' : '85% 50%'}>
              <address className="not-italic text-white text-[1.0625rem] leading-snug">
                {loc.address}<br />{loc.city}, {stateAbbr[loc.state] ?? loc.state} {loc.zip}
              </address>
              <a href={loc.mapUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1.5 text-sm font-bold hover:underline" style={{ color: '#2db85a' }}>
                Get Directions <ArrowRight size={15} aria-hidden="true" />
              </a>
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  )
}

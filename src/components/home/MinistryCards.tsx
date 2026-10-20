import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const featuredMinistries = [
  {
    title: 'Empowerment Night',
    tagline: 'Tuesdays · Hammond',
    image: '/images/home/ministry-empowerment.jpg',
    imagePosition: '50% 35%',
    href: '/community#ministry-tuesday-night-empowerment',
  },
  {
    title: 'MEN-Ergy',
    tagline: 'Every man needs a brother',
    image: '/images/home/ministry-menergy.jpg',
    imagePosition: '60% 30%',
    href: '/community#ministry-men-ergy',
  },
  {
    title: 'Wholistic Woman',
    tagline: 'Every sister needs a sister',
    image: '/images/home/ministry-wholistic-woman.jpg',
    imagePosition: '50% 30%',
    href: '/community#ministry-wholistic-woman',
  },
  {
    title: 'Outreach',
    tagline: 'A church that serves',
    image: '/images/home/ministry-outreach.jpg',
    imagePosition: '50% 55%',
    href: '/serve',
  },
]

export function MinistryCards() {
  return (
    <section aria-labelledby="ministries-heading" className="section-light py-12 lg:py-14">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-7">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <h2 id="ministries-heading" className="text-serif-h2" style={{ color: '#0e0e0e' }}>Our Ministries</h2>
            <p className="text-tracked" style={{ color: '#5a5a5a' }}>Real People. Real Purpose.</p>
          </div>
          <Link href="/community" className="inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4 hover:no-underline"
            style={{ color: '#176e32' }}>
            View All Ministries <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-5">
          {featuredMinistries.map((m) => (
            <li key={m.title}>
              <Link href={m.href} className="card-gold-frame group flex h-[150px] items-end p-6">
                <div className="absolute inset-y-0 right-0 w-[64%]">
                  <Image src={m.image} alt="" fill sizes="(min-width: 1280px) 16vw, (min-width: 640px) 32vw, 64vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: m.imagePosition }} />
                </div>
                <div aria-hidden="true" className="absolute inset-0"
                  style={{ background: 'linear-gradient(90deg, #041004 0%, #041004 34%, rgba(4,16,4,0.7) 55%, rgba(4,16,4,0.05) 100%)' }} />
                <div className="relative flex w-full items-end justify-between gap-3">
                  <div>
                    <h3 className="text-serif-h3 text-white">{m.title}</h3>
                    <p className="text-tracked mt-1.5" style={{ color: '#e0dcce', fontSize: '0.625rem', letterSpacing: '0.2em' }}>{m.tagline}</p>
                  </div>
                  <span className="arrow-badge group-hover:translate-x-0.5" style={{ color: '#e1b43c', background: 'rgba(4,16,4,0.6)' }}>
                    <ArrowRight size={17} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

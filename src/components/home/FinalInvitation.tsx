import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function FinalInvitation() {
  return (
    <section aria-labelledby="invitation-heading" className="relative overflow-hidden py-12 lg:py-14">
      <div className="absolute inset-0">
        <Image src="/images/home/worship-crowd.jpg" alt="" fill sizes="100vw"
          className="object-cover" style={{ objectPosition: '50% 30%' }} />
        <div aria-hidden="true" className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(0,60,0,0.82) 0%, rgba(0,40,0,0.88) 100%)', mixBlendMode: 'multiply' }} />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: 'rgba(0,30,0,0.45)' }} />
      </div>

      <div className="relative container-site grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 text-center">
        <div className="hidden lg:block" />
        <div>
          <div className="flex items-center justify-center gap-4 mb-2" style={{ color: '#e0dcce' }}>
            <span aria-hidden="true" className="h-px w-14" style={{ background: 'rgba(225,180,60,0.7)' }} />
            <p className="text-tracked">Faith. Community. Purpose.</p>
            <span aria-hidden="true" className="h-px w-14" style={{ background: 'rgba(225,180,60,0.7)' }} />
          </div>
          <h2 id="invitation-heading" className="text-serif-h2 text-white" style={{ fontSize: 'clamp(2rem, 3.6vw, 3rem)' }}>
            Be Part of What God Is Doing.
          </h2>
        </div>
        <div className="flex justify-center lg:justify-end">
          <Link href="/plan-your-visit" className="btn btn-pill btn-gold-fill">
            Plan Your Visit Today <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}

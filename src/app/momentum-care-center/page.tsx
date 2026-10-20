import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PageHero } from '@/components/ui/PageHero'

export const metadata: Metadata = {
  title: 'Momentum Care Center',
  description: 'The GO Church gives back to our communities through the Momentum Care Center — GO Closet, Community Kitchen, and more.',
  openGraph: {
    title: 'Momentum Care Center — The GO Church',
    description: 'Community outreach through GO Closet and Community Kitchen at The GO Church.',
    url: 'https://www.thegochurchchicago.com/momentum-care-center',
  },
  alternates: { canonical: 'https://www.thegochurchchicago.com/momentum-care-center' },
}

const programs = [
  {
    title: 'GO Closet',
    subtitle: 'Clothing Outreach',
    description: 'Serving our communities through clothing outreach at both our Joliet and Hammond locations. The GO Closet provides clothing resources to those in need.',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511118138-9QXER93T3B8JDFXS29FY/GoChurch_Community_Closet_Wide.JPG',
    locations: ['Joliet, IL', 'Hammond, IN'],
  },
  {
    title: 'Community Kitchen',
    subtitle: 'Food Outreach',
    description: 'The Community Kitchen Outreach serves our Hammond community with food resources. We believe in meeting practical needs as an expression of the love of God.',
    image: 'https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511119046-HVIYUDFGY6042PPIDWK4/GoChurch_Community_Food_Wide.JPG',
    locations: ['Hammond, IN'],
  },
]

export default function MomentumCareCenterPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <PageHero
        eyebrow="Outreach"
        heading="Momentum Care Center"
        subheading="The GO Church is excited to give back to our communities through our Momentum Care Center initiatives."
        image="https://images.squarespace-cdn.com/content/v1/5ff0bd9b8500a82fe9d856ca/1763511118138-9QXER93T3B8JDFXS29FY/GoChurch_Community_Closet_Wide.JPG"
        imageAlt="GO Church community outreach"
      />

      <section aria-labelledby="mcc-heading" className="section-light section-py-lg">
        <div className="container-content">
          <div className="text-center mb-14">
            <p className="text-label mb-3" style={{ color: '#209a47' }}>Community Impact</p>
            <div className="gold-divider-center mb-5" />
            <h2 id="mcc-heading" className="text-h2 mb-4" style={{ color: '#0e0e0e' }}>
              Our Outreach Programs
            </h2>
            <p className="text-body-lg max-w-2xl mx-auto" style={{ color: '#3e3e3e' }}>
              We believe in meeting practical needs as an expression of the love of God. The Momentum Care Center serves our communities in Joliet and Hammond.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            {programs.map((program, i) => (
              <div key={program.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''}`}>
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/10' }}>
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: '#b4872d' }} />
                </div>
                <div>
                  <p className="text-label mb-3" style={{ color: '#209a47' }}>{program.subtitle}</p>
                  <div className="gold-divider mb-5" />
                  <h3 className="text-h2 mb-5" style={{ color: '#0e0e0e' }}>{program.title}</h3>
                  <p className="text-body-lg mb-5" style={{ color: '#3e3e3e' }}>{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.locations.map((loc) => (
                      <span key={loc} className="text-label px-3 py-1 text-xs"
                        style={{ background: '#002800', color: '#f0c33c' }}>
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-py">
        <div className="container-narrow text-center">
          <p className="text-label mb-3" style={{ color: '#f0c33c' }}>Get Involved</p>
          <div className="gold-divider-center mb-6" />
          <h2 className="text-h2 mb-4" style={{ color: '#ffffff' }}>Serve Your Community</h2>
          <p className="text-body-lg mb-8" style={{ color: '#e0dcce' }}>
            Want to be part of our outreach efforts? Sign up to serve at The GO Church.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/serve" className="btn btn-gold btn-lg">Sign Up to Serve</Link>
            <Link href="/locations" className="btn btn-outline-white btn-lg">Find a Location</Link>
          </div>
        </div>
      </section>
    </div>
  )
}

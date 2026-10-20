import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFound() {
  return (
    <div
      className="section-darkest flex flex-col items-center justify-center text-center"
      style={{ minHeight: '100svh', paddingTop: '72px' }}
    >
      <div className="container-narrow">
        {/* Large 404 */}
        <p
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(6rem, 20vw, 14rem)',
            color: 'rgba(32,154,71,0.15)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          404
        </p>

        <div className="gold-divider-center mb-6 -mt-4" />

        <p className="text-label mb-4" style={{ color: '#f0c33c' }}>
          Page Not Found
        </p>

        <h1 className="text-h2 mb-5" style={{ color: '#ffffff' }}>
          This page doesn&apos;t exist.
        </h1>

        <p className="text-body-lg mb-10 max-w-md mx-auto" style={{ color: '#e0dcce' }}>
          The page you&apos;re looking for may have moved or no longer exists. Let&apos;s get you back on track.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn btn-primary btn-lg">
            Go Home
          </Link>
          <Link href="/events" className="btn btn-outline-white btn-lg">
            View Events
          </Link>
          <Link href="/plan-your-visit" className="btn btn-ghost-dark btn-lg">
            Plan Your Visit
          </Link>
        </div>
      </div>
    </div>
  )
}

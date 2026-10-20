import Link from 'next/link'

interface StubPageProps {
  title: string
  description: string
  icon?: string
}

export function StubPage({ title, description, icon = '✦' }: StubPageProps) {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero bar */}
      <div className="section-dark section-py-sm">
        <div className="container-site">
          <p className="text-label mb-3" style={{ color: '#f0c33c' }}>The GO Church</p>
          <div className="gold-divider mb-5" />
          <h1 className="text-h1" style={{ color: '#ffffff' }}>{title}</h1>
        </div>
      </div>

      {/* Coming soon body */}
      <div className="section-light section-py">
        <div className="container-narrow text-center">
          <div
            className="w-20 h-20 flex items-center justify-center mx-auto mb-6"
            style={{ background: '#002800' }}
          >
            <span style={{ fontSize: '2rem', color: '#f0c33c' }}>{icon}</span>
          </div>
          <h2 className="text-h2 mb-4" style={{ color: '#0e0e0e' }}>Coming Soon</h2>
          <p className="text-body-lg mb-8" style={{ color: '#3e3e3e' }}>{description}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn btn-primary">Back to Home</Link>
            <Link href="/plan-your-visit" className="btn btn-outline">Plan Your Visit</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

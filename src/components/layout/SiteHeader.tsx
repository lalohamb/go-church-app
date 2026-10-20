'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { headerNav, siteSettings, locations } from '@/lib/data'
import type { NavigationItem } from '@/lib/data'
import { motion, AnimatePresence } from 'motion/react'

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

function isActive(item: NavigationItem, pathname: string) {
  if (item.external) return false
  if (item.href === '/') return pathname === '/'
  if (pathname === item.href || pathname.startsWith(item.href + '/')) return true
  return item.children?.some((c) => !c.external && (pathname === c.href || pathname.startsWith(c.href + '/'))) ?? false
}

function NavLink({ item, active, onNavigate, className, style }: {
  item: NavigationItem
  active?: boolean
  onNavigate?: () => void
  className?: string
  style?: React.CSSProperties
}) {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onNavigate} className={className} style={style}>
        {item.label}
      </a>
    )
  }
  return (
    <Link href={item.href} onClick={onNavigate} aria-current={active ? 'page' : undefined} className={className} style={style}>
      {item.label}
    </Link>
  )
}

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const lastScrollY = useRef(0)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > lastScrollY.current && y > 160)
      lastScrollY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Only the home hero sits under a transparent header; inner pages get the solid bar
  const solid = scrolled || pathname !== '/'
  const headerClass = ['site-header', solid ? 'scrolled' : '', hidden && !mobileOpen ? 'hidden' : ''].filter(Boolean).join(' ')

  return (
    <header className={headerClass} role="banner">
      {!solid && (
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, rgba(0,10,0,0.75), transparent)' }} />
      )}
      <div className="container-site relative">
        <div className="flex items-center justify-between gap-6 h-[84px]">

          {/* Logo */}
          <Link href="/" aria-label="The GO Church — Home" className="flex-shrink-0">
            <Image src="/go-church-emblem.png" alt="The GO Church" width={1774} height={887}
              preload className="h-14 w-auto" sizes="120px" />
          </Link>

          {/* Desktop Nav */}
          <nav ref={navRef} aria-label="Primary navigation" className="hidden xl:flex items-center gap-1">
            {headerNav.map((item) => {
              const active = isActive(item, pathname)
              const linkClass = 'relative px-3.5 py-2 text-[0.875rem] font-bold transition-colors hover:text-[#f0c33c]'
              const underline = active && (
                <span aria-hidden="true" className="absolute left-3.5 right-3.5 -bottom-0.5 h-[2px] rounded-full"
                  style={{ background: '#2db85a' }} />
              )
              if (!item.children) {
                return (
                  <div key={item.label} className="relative">
                    <NavLink item={item} active={active} className={linkClass} style={{ color: '#ffffff', fontFamily: 'var(--font-body)' }} />
                    {underline}
                  </div>
                )
              }
              const open = openMenu === item.label
              return (
                <div key={item.label} className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu((m) => (m === item.label ? null : m))}>
                  <button
                    type="button"
                    onClick={() => setOpenMenu(open ? null : item.label)}
                    onKeyDown={(e) => e.key === 'Escape' && setOpenMenu(null)}
                    aria-expanded={open}
                    aria-haspopup="true"
                    className={`${linkClass} flex items-center gap-1 cursor-pointer`}
                    style={{ color: '#ffffff', background: 'none', border: 'none', fontFamily: 'var(--font-body)' }}
                  >
                    {item.label}
                    <ChevronDown size={13} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {underline}
                  <AnimatePresence>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute top-full left-0 pt-2 w-56 z-50"
                      >
                        <div className="py-2 rounded-lg overflow-hidden" role="menu"
                          style={{ background: '#041004', border: '1px solid rgba(210,168,50,0.4)', boxShadow: '0 12px 32px rgba(0,0,0,0.35)' }}>
                          {item.children.map((child) => (
                            <NavLink key={child.href} item={child} onNavigate={() => setOpenMenu(null)}
                              className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/5 hover:text-[#f0c33c]"
                              style={{ color: '#e0dcce', fontFamily: 'var(--font-body)' }} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden xl:flex items-center gap-2">
            <a href={siteSettings.socialLinks[0].url} target="_blank" rel="noopener noreferrer"
              aria-label="Instagram" className="p-2 text-white transition-colors hover:text-[#f0c33c]">
              <IconInstagram size={17} />
            </a>
            <a href={siteSettings.socialLinks[1].url} target="_blank" rel="noopener noreferrer"
              aria-label="Facebook" className="p-2 text-white transition-colors hover:text-[#f0c33c]">
              <IconFacebook size={17} />
            </a>
            <a href={siteSettings.givingUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-pill btn-green-glow btn-sm ml-2">
              Give Now <ArrowRight size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            className="xl:hidden p-2.5 text-white"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-label="Mobile navigation"
            aria-modal="true"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="xl:hidden fixed inset-0 top-[84px] z-50 overflow-y-auto"
            style={{ background: '#001400' }}
          >
            <nav className="container-site py-8 flex flex-col gap-1" aria-label="Mobile navigation">
              {headerNav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                >
                  <NavLink item={item} active={isActive(item, pathname)} onNavigate={() => setMobileOpen(false)}
                    className="block px-2 py-3 text-2xl border-b"
                    style={{ fontFamily: 'var(--font-serif)', color: isActive(item, pathname) ? '#f0c33c' : '#ffffff', borderColor: 'rgba(255,255,255,0.08)' }} />
                  {item.children && (
                    <div className="flex flex-wrap gap-x-5 gap-y-1 px-2 py-2">
                      {item.children.filter((c) => c.href !== item.href).map((child) => (
                        <NavLink key={child.href} item={child} onNavigate={() => setMobileOpen(false)}
                          className="text-sm font-medium py-1"
                          style={{ color: 'rgba(224,220,206,0.75)', fontFamily: 'var(--font-body)' }} />
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="mt-4 px-2 grid grid-cols-2 gap-3"
              >
                {locations.map((loc) => (
                  <Link key={loc.id} href={`/locations/${loc.slug}`} onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 py-2" style={{ textDecoration: 'none' }}>
                    <div style={{ width: '1px', height: '2rem', background: 'rgba(240,195,60,0.4)' }} />
                    <div>
                      <p className="text-label" style={{ color: '#f0c33c', fontSize: '0.65rem' }}>{loc.city}</p>
                      <p className="text-xs" style={{ color: 'rgba(224,220,206,0.6)', fontFamily: 'var(--font-body)' }}>Sunday {loc.sundayTime}</p>
                    </div>
                  </Link>
                ))}
              </motion.div>

              <div className="mt-8 flex flex-col gap-3">
                <a href={siteSettings.givingUrl} target="_blank" rel="noopener noreferrer"
                  className="btn btn-pill btn-green-glow w-full">Give Now</a>
                <Link href="/plan-your-visit" onClick={() => setMobileOpen(false)}
                  className="btn btn-pill btn-gold-outline w-full">Plan Your Visit</Link>
              </div>
              <div className="mt-6 flex gap-4 px-2">
                <a href={siteSettings.socialLinks[0].url} target="_blank" rel="noopener noreferrer"
                  aria-label="Instagram" style={{ color: '#ffffff' }}>
                  <IconInstagram size={22} />
                </a>
                <a href={siteSettings.socialLinks[1].url} target="_blank" rel="noopener noreferrer"
                  aria-label="Facebook" style={{ color: '#ffffff' }}>
                  <IconFacebook size={22} />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

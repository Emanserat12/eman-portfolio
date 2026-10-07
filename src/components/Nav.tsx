import { useEffect, useState } from 'react'
import { profile } from '../data/site'
import { openInquiry } from './InquiryDialog'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || open

  return (
    <header
      className={`sticky z-40 border-b transition-all duration-500 ease-out ${
        solid ? 'border-line bg-canvas/70 backdrop-blur-xl backdrop-saturate-150' : 'border-transparent'
      }`}
      style={{ top: 'env(safe-area-inset-top, 0px)' }}
    >
      <nav className={`wrap flex items-center justify-between transition-all duration-500 ease-out ${solid ? 'h-16' : 'h-20'}`} aria-label="Main">
        <a href="#top" className="text-[0.9375rem] font-semibold tracking-[-0.01em] text-ink">
          {profile.name}
        </a>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link text-muted transition-colors duration-300 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" onClick={openInquiry} className="btn btn-primary h-10 px-5 text-sm">
            Start a project
          </button>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 7.5h14M3 12.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="wrap pb-8 md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-t border-line">
                <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-2xl font-medium tracking-tight text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => {
              setOpen(false)
              openInquiry()
            }}
            className="btn btn-primary mt-6 w-full"
          >
            Start a project
          </button>
        </div>
      )}
    </header>
  )
}

import { useEffect, useState } from 'react'
import { SITE } from '../constants'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#galeria', label: 'Galería' },
  { href: '#insumos', label: 'Insumos' },
  { href: '#contacto', label: 'Contacto' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__inner">
        <a className="site-header__brand" href="#inicio" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="" width={48} height={48} className="site-header__logo" />
          <span className="site-header__title">{SITE.shortName}</span>
        </a>

        <nav className="site-nav" aria-label="Principal">
          <ul
            id="site-nav-list"
            className={`site-nav__list ${open ? 'site-nav__list--open' : ''}`}
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="site-nav__link" onClick={() => setOpen(false)}>
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                className="site-nav__cta"
                href={SITE.instagramUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav-list"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menú</span>
          <span className={`burger ${open ? 'burger--open' : ''}`} aria-hidden />
        </button>
      </div>
      {open ? <div className="site-nav__backdrop" aria-hidden onClick={() => setOpen(false)} /> : null}
    </header>
  )
}

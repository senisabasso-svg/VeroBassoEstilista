import { SITE } from '../constants'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">{SITE.name}</p>
        <p className="site-footer__note">Peluquería · Masajes · Cosmetología</p>
        <div className="site-footer__links">
          <a href={SITE.phoneTel}>{SITE.phoneDisplay}</a>
          <span aria-hidden>·</span>
          <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p className="site-footer__legal">© {new Date().getFullYear()} {SITE.shortName}. Sitio estático.</p>
      </div>
    </footer>
  )
}

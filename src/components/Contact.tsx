import { SITE } from '../constants'

export function Contact() {
  return (
    <section id="contacto" className="section section--contact">
      <div className="contact-grid">
        <div className="contact-card reveal">
          <h2 className="section__title">Contacto</h2>
          <p className="section__subtitle section__subtitle--tight">
            Coordinamos turnos, tratamientos y pedidos de insumos por el mismo número.
          </p>
          <ul className="contact-list">
            <li>
              <span className="contact-list__label">Teléfono / WhatsApp</span>
              <a className="contact-list__value" href={SITE.phoneTel}>
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <span className="contact-list__label">Instagram</span>
              <a className="contact-list__value" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                @verobasso1
              </a>
            </li>
          </ul>
          <div className="contact-card__actions">
            <a className="btn btn--primary" href={SITE.whatsappTurnoUrl} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
            <a className="btn btn--ghost" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
              Abrir Instagram
            </a>
          </div>
        </div>
        <div className="contact-visual reveal reveal--delay-1">
          <img src="/images/logo.png" alt="Logotipo Vero Basso" loading="lazy" />
        </div>
      </div>
    </section>
  )
}

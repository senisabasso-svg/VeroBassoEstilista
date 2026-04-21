import { SITE } from '../constants'

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__grid">
        <div className="hero__copy reveal">
          <p className="eyebrow">Estilista · Peluquería · Bienestar</p>
          <h1 className="hero__headline">
            <span className="hero__name">{SITE.name}</span>
            <span className="hero__line" aria-hidden />
            <span className="hero__tag">Color, forma y cuidado con mirada profesional.</span>
          </h1>
          <p className="hero__lead">
            Trabajo en salón con enfoque en resultados naturales, productos de calidad y una
            experiencia cálida. También podés escribirme por insumos para tu peluquería.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href={SITE.whatsappTurnoUrl} target="_blank" rel="noreferrer">
              Reservar por WhatsApp
            </a>
            <a className="btn btn--ghost" href={SITE.instagramUrl} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
          <dl className="hero__meta">
            <div>
              <dt>Contacto</dt>
              <dd>
                <a href={SITE.phoneTel}>{SITE.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Redes</dt>
              <dd>
                <a href={SITE.instagramUrl} target="_blank" rel="noreferrer">
                  @verobasso1
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual reveal reveal--delay-1" aria-hidden>
          <div className="hero__frame hero__frame--main">
            <img src="/images/portfolio-perfil.png" alt="Trabajo de color y peinado en salón" loading="eager" />
          </div>
          <div className="hero__frame hero__frame--accent">
            <img src="/images/portfolio-balayage.png" alt="" loading="lazy" />
          </div>
          <div className="hero__orb" />
        </div>
      </div>
    </section>
  )
}

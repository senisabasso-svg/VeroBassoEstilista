import { SITE } from '../constants'

export function Supplies() {
  return (
    <section id="insumos" className="section section--supplies">
      <div className="supplies-panel reveal">
        <div className="supplies-panel__content">
          <p className="eyebrow">Profesionales</p>
          <h2 className="section__title section__title--light">Insumos de peluquería</h2>
          <p className="supplies-panel__text">
            Si necesitás productos o materiales para tu salón, escribime por WhatsApp. Armamos la
            consulta según lo que busques y disponibilidad.
          </p>
          <ul className="supplies-panel__list">
            <li>Asesoría rápida por mensaje</li>
            <li>Enfoque en calidad profesional</li>
            <li>Mismo canal que turnos y consultas</li>
          </ul>
          <a className="btn btn--whatsapp" href={SITE.whatsappInsumosUrl} target="_blank" rel="noreferrer">
            Pedir insumos por WhatsApp
          </a>
        </div>
        <div className="supplies-panel__glow" aria-hidden />
      </div>
    </section>
  )
}

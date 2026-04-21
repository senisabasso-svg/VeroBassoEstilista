export function Gallery() {
  return (
    <section id="galeria" className="section section--gallery">
      <div className="section__intro reveal">
        <h2 className="section__title">Galería</h2>
        <p className="section__subtitle">
          Detalle, brillo y movimiento: resultados pensados para lucir naturales bajo cualquier luz.
        </p>
      </div>
      <div className="bento">
        <figure className="bento__cell bento__cell--hero reveal">
          <img src="/images/portfolio-perfil.png" alt="Perfil con mechas y ondas suaves" loading="lazy" />
          <figcaption>Color y forma</figcaption>
        </figure>
        <figure className="bento__cell bento__cell--top reveal reveal--delay-1">
          <img src="/images/portfolio-balayage.png" alt="Balayage con rizos definidos" loading="lazy" />
          <figcaption>Balayage</figcaption>
        </figure>
        <figure className="bento__cell bento__cell--bottom reveal reveal--delay-2">
          <img src="/images/salon.png" alt="Verónica trabajando en el salón con cliente" loading="lazy" />
          <figcaption>Salón</figcaption>
        </figure>
      </div>
    </section>
  )
}

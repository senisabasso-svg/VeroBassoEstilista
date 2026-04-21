const items = [
  {
    title: 'Peluquería',
    lines: [
      'Tratamientos con ozono.',
      'Tratamientos de recuperación capilar.',
      'Claritos',
      'Mechas',
      'Balayage',
    ],
  },
  {
    title: 'Masajes',
    lines: ['Descontracturantes', 'Relajantes', 'Deportivos', 'Piedras calientes'],
  },
  {
    title: 'Cosmetología',
    lines: [
      'Tratamientos de limpieza, peeling químico y mecánico',
      'Dermapen',
      'Hilos de colágeno',
      'Bblips.',
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="section section--services">
      <div className="section__intro reveal">
        <h2 className="section__title">Servicios</h2>
        <p className="section__subtitle">
          Detalle de lo que ofrecemos en peluquería, masajes y cosmetología. Consultá disponibilidad y
          asesoramiento por WhatsApp o Instagram.
        </p>
      </div>
      <ul className="service-cards">
        {items.map((s, i) => (
          <li key={s.title} className="service-card reveal" style={{ animationDelay: `${80 + i * 70}ms` }}>
            <span className="service-card__index">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="service-card__title">{s.title}</h3>
            <ul className="service-card__list">
              {s.lines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

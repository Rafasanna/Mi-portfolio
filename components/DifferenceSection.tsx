import type { CSSProperties } from "react";

const differences = [
  {
    title: "Asesoramiento desde cero",
    text: "Si no sabés exactamente qué necesitás, te ayudo a ordenar la idea, definir prioridades y pensar una solución posible para tu negocio."
  },
  {
    title: "Diseño con intención",
    text: "Cada sección tiene un objetivo: guiar, informar, vender o facilitar una acción."
  },
  {
    title: "Mirada técnica",
    text: "No pienso solo en lo visual: también considero datos, estructuras, procesos y lógica."
  },
  {
    title: "Soluciones simples",
    text: "Busco que cada proyecto sea fácil de usar, mantener y entender."
  },
  {
    title: "Pensado para negocios reales",
    text: "Trabajo con herramientas prácticas como WhatsApp, Google Sheets, Supabase o paneles simples según lo que necesite cada cliente."
  },
  {
    title: "Acompañamiento inicial",
    text: "Durante el primer mes de uso te acompaño gratis para resolver dudas, ajustar detalles simples y ayudarte a usar la web o herramienta con tranquilidad."
  }
];

export function DifferenceSection() {
  const featuredTitles = ["Asesoramiento desde cero", "Acompañamiento inicial"];
  const featuredItems = differences.filter(item => featuredTitles.includes(item.title));
  const compactItems = differences.filter(item => !featuredTitles.includes(item.title));

  return (
    <section className="difference section-shell" id="diferencial">
      <div className="difference__heading reveal">
        <p className="eyebrow">DIFERENCIAL</p>
        <h2>Por qué trabajar conmigo</h2>
        <p>No solo desarrollo una web: te ayudo a pensarla, ordenarla y convertirla en una herramienta útil.</p>
      </div>

      {/* Grid view for Desktop */}
      <div className="difference__grid difference__grid--desktop">
        {differences.map((item, index) => (
          <article
            className={`difference-card ${
              featuredTitles.includes(item.title)
                ? "difference-card--featured"
                : ""
            } reveal`}
            key={item.title}
            style={{ "--i": index } as CSSProperties}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      {/* View for Mobile */}
      <div className="difference__mobile-view">
        <div className="difference__featured-stack">
          {featuredItems.map((item, index) => (
            <article
              className="difference-card difference-card--featured reveal"
              key={item.title}
              style={{ "--i": index } as CSSProperties}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="difference__compact-list reveal">
          {compactItems.map((item) => (
            <div className="difference__compact-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

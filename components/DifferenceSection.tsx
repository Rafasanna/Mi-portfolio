import type { CSSProperties } from "react";

const differences = [
  {
    title: "Diseño con intención",
    text: "Cada sección tiene un objetivo: guiar, informar, vender o facilitar una acción."
  },
  {
    title: "Mirada técnica",
    text: "No pienso solo en lo visual, también en datos, estructuras, procesos y lógica."
  },
  {
    title: "Asesoramiento desde cero",
    text: "Si no sabés exactamente qué necesitás, te ayudo a ordenar la idea, definir prioridades y pensar una solución posible para tu negocio."
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
  return (
    <section className="difference section-shell">
      <div className="difference__heading reveal">
        <p className="eyebrow">DIFERENCIAL</p>
        <h2>Por qué trabajar conmigo</h2>
        <p>No solo desarrollo una web: te ayudo a pensarla, ordenarla y usarla.</p>
      </div>
      <div className="difference__grid">
        {differences.map((item, index) => (
          <article className="difference-card reveal" key={item.title} style={{ "--i": index } as CSSProperties}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

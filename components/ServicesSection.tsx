import { SectionIntro } from "@/components/SectionIntro";
import { services } from "@/data/services";
import type { CSSProperties } from "react";

export function ServicesSection() {
  return (
    <section className="services section-shell" id="servicios">
      <SectionIntro
        eyebrow="SERVICIOS"
        title="Qué puedo crear para tu negocio"
        text="Sitios claros, funcionales y pensados para usarse de verdad."
      />
      <div className="card-grid">
        {services.map((service, index) => (
          <article className="service-card reveal" key={service.title} style={{ "--i": index } as CSSProperties}>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

import { SectionIntro } from "@/components/SectionIntro";
import { processSteps } from "@/data/skills";
import type { CSSProperties } from "react";

export function ProcessSection() {
  return (
    <section className="process section-shell" id="proceso">
      <SectionIntro
        eyebrow="PROCESO"
        title="Cómo trabajo"
        text="Un proceso simple, claro y pensado para que sepas qué está pasando en cada etapa."
      />

      <div className="timeline">
        {processSteps.map((step, index) => (
          <article className="timeline__item reveal" key={step.title} style={{ "--i": index } as CSSProperties}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

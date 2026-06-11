import { Button } from "@/components/Button";
import { VisualImage } from "@/components/VisualImage";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { CSSProperties } from "react";

const badges = [
  "React",
  "Bases de datos",
  "Integraciones",
  "Next.js",
  "Responsive design",
  "Sistemas",
  "Datos",
  "Supabase"
];

export function Hero() {
  return (
    <section className="hero section-shell" id="sobre-mi">
      <div className="hero__content reveal">
        <p className="eyebrow">DESARROLLO WEB · SISTEMAS · DATOS</p>
        <h1>Rafaela Sanna</h1>
        <p className="hero__subtitle">
          Creo soluciones digitales claras, funcionales y pensadas para negocios reales.
        </p>
        <p className="hero__text">
          Soy estudiante avanzada de Sistemas. Trabajo combinando diseño,
          desarrollo web, bases de datos y lógica funcional para crear páginas,
          catálogos y herramientas simples.
        </p>
        <div className="hero__actions">
          <Button href="#proyectos">
            Ver proyectos
            <ArrowRight aria-hidden="true" size={17} strokeWidth={1.9} />
          </Button>
          <Button href="https://wa.me/549XXXXXXXXXX" variant="secondary" target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" size={17} strokeWidth={1.9} />
            WhatsApp
          </Button>
        </div>
      </div>

      <div className="hero__visual reveal reveal--delay">
        <VisualImage
          alt="Rafaela Sanna"
          label="Foto personal"
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          src="/images/rafaela-sanna.jpg"
        />
        <div className="floating-badges" aria-label="Tecnologías y herramientas">
          {badges.map((badge, index) => (
            <span key={badge} style={{ "--i": index } as CSSProperties}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

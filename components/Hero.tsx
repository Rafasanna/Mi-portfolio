import { VisualImage } from "@/components/VisualImage";

export function Hero() {
  return (
    <section className="hero section-shell" id="sobre-mi">
      <div className="hero__content reveal">
        <p className="eyebrow">ANALISTA DE SISTEMAS · DESARROLLO WEB · DATOS</p>
        <h1>Rafaela Sanna</h1>
        <p className="hero__subtitle">
          Creo soluciones digitales claras, funcionales y pensadas para negocios reales.
        </p>
        <p className="hero__text">
          Soy Analista de Sistemas y estudiante avanzada de Licenciatura en
          Sistemas. Combino desarrollo web, bases de datos, datos y lógica
          funcional para crear soluciones digitales claras.
        </p>
      </div>

      <div className="hero__visual reveal reveal--delay">
        <VisualImage
          alt="Rafaela Sanna"
          label="Foto personal"
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          src="/images/rafaela-sanna.jpg"
        />
      </div>
    </section>
  );
}

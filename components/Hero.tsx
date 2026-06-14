import { VisualImage } from "@/components/VisualImage";

export function Hero() {
  return (
    <section className="hero section-shell" id="sobre-mi">
      <div className="hero__content reveal">
        <p className="eyebrow hero__intro-item hero__intro-item--eyebrow">ANALISTA DE SISTEMAS</p>
        <h1 className="hero__intro-item hero__intro-item--title">Rafaela Sanna</h1>
        <p className="hero__subtitle hero__intro-item hero__intro-item--subtitle">
         Analista de Sistemas y estudiante avanzada de Licenciatura en Sistemas.
        </p>
        <p className="hero__text hero__intro-item hero__intro-item--text">
          Hago webs y sistemas simples para negocios que necesitan algo 
          real, útil y bien pensado.
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

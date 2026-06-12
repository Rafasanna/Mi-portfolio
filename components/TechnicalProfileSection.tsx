import { stack, technicalCards } from "@/data/skills";
import {
  BarChart3,
  Braces,
  Code2,
  Database,
  GitBranch,
  GitPullRequest,
  Image,
  Network,
  Rows3,
  Table2,
  TableProperties,
  Triangle,
  Workflow
} from "lucide-react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

const technicalIcons: Record<string, LucideIcon> = {
  "Analista de Sistemas": Workflow,
  "Bases de datos": Database,
  "Datos y estadística": BarChart3,
  "Desarrollo web": Code2,
  "Sistemas y procesos": GitBranch,
  "NoSQL y herramientas modernas": Rows3
};

const stackIcons: Record<string, LucideIcon> = {
  React: Network,
  "Next.js": Code2,
  TypeScript: Braces,
  SQL: Table2,
  NoSQL: Rows3,
  Supabase: Database,
  "Google Sheets": TableProperties,
  Cloudinary: Image,
  Vercel: Triangle,
  Git: GitBranch,
  GitHub: GitPullRequest,
  APIs: Workflow,
  "Integración con WhatsApp": Braces
};

export function TechnicalProfileSection() {
  return (
    <section className="technical section-shell" id="perfil-tecnico">
      <div className="technical__header reveal">
        <div>
          <p className="eyebrow">PERFIL TÉCNICO</p>
          <span className="profile-badge">Analista de Sistemas</span>
          <h2>Analista de Sistemas con mirada integral</h2>
        </div>
        <p>
          Mi perfil combina desarrollo web, bases de datos, análisis de
          información y pensamiento lógico para entender problemas, ordenar
          procesos y construir soluciones digitales.
        </p>
      </div>

      <p className="technical__lead reveal">
        Además de crear páginas y herramientas para negocios, mi formación como
        Analista de Sistemas me permite participar en proyectos desde una mirada
        más amplia: comprender requerimientos, modelar datos, analizar procesos,
        pensar estructuras y conectar lo visual con lo funcional.
      </p>

      <div className="technical__grid">
        {technicalCards.map((card, index) => {
          const Icon = technicalIcons[card.title] ?? Code2;
          const variantClass =
            index === 0
              ? "technical-card--feature"
              : index <= 3
                ? "technical-card--area"
                : "technical-card--compact";

          return (
            <article
              className={`technical-card ${variantClass} reveal`}
              key={card.title}
              style={{ "--i": index } as CSSProperties}
            >
              <div className="technical-card__top">
                <h3>{card.title}</h3>
                <Icon aria-hidden="true" size={24} strokeWidth={1.7} />
              </div>
              <p>{card.text}</p>
            </article>
          );
        })}
      </div>

      <div className="stack-panel reveal">
        <p className="eyebrow">STACK Y HERRAMIENTAS</p>
        <div className="tags tags--large">
          {stack.map((item) => {
            const Icon = stackIcons[item] ?? Code2;

            return (
              <span className="stack-chip" key={item}>
                <Icon aria-hidden="true" size={14} strokeWidth={1.8} />
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

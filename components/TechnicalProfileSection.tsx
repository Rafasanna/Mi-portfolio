import { SectionIntro } from "@/components/SectionIntro";
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
  ServerCog,
  Table2,
  TableProperties,
  Triangle,
  Workflow
} from "lucide-react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

const technicalIcons: Record<string, LucideIcon> = {
  "Bases de datos relacionales": Database,
  "Bases de datos avanzadas": ServerCog,
  NoSQL: Rows3,
  "Probabilidad y estadística": BarChart3,
  "Pensamiento de sistemas": Workflow,
  "Desarrollo web": Code2
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
      <SectionIntro
        eyebrow="PERFIL TÉCNICO"
        title="Más que diseño: lógica, datos y sistemas"
        text="Mi formación en Sistemas me permite pensar cada proyecto más allá de lo visual."
      />

      <p className="technical__lead reveal">
        No solo me interesa que una página se vea bien. Me importa que tenga una
        estructura clara, datos ordenados, procesos simples y una lógica que
        realmente acompañe el funcionamiento del negocio.
      </p>

      <div className="technical__grid">
        {technicalCards.map((card, index) => {
          const Icon = technicalIcons[card.title] ?? Code2;

          return (
            <article className="technical-card reveal" key={card.title} style={{ "--i": index } as CSSProperties}>
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

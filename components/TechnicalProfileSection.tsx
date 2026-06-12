"use client";

import { useState } from "react";
import { stack, technicalCards } from "@/data/skills";
import {
  BarChart3,
  Braces,
  ChevronDown,
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
  "Análisis y lógica funcional": Workflow,
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <section className="technical section-shell" id="perfil-tecnico">
      <div className="technical__header reveal">
        <div>
          <p className="eyebrow">PERFIL TÉCNICO</p>
          <h2>Perfil técnico integral</h2>
        </div>
        <p>
          Mi formación en Sistemas me permite pensar cada proyecto más allá de la interfaz: datos, procesos, lógica y funcionamiento real.
        </p>
      </div>

      <p className="technical__lead reveal">
        Además de crear páginas y herramientas para negocios, puedo aportar en proyectos que requieran análisis, modelado de información, bases de datos, desarrollo web y comprensión de requerimientos.
      </p>

      {/* Grid view for Desktop */}
      <div className="technical__grid technical__grid--desktop">
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

      {/* Compact/Featured view for Mobile */}
      <div className="technical__mobile-view">
        <div className="technical__compact-list reveal">
          {technicalCards.map((card, index) => {
            const Icon = technicalIcons[card.title] ?? Code2;
            const isOpen = openIndex === index;
            return (
              <div className="technical__compact-item" key={card.title}>
                <button
                  className="technical__compact-item-header"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <div className="technical__compact-item-title-wrap">
                    <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
                    <h4>{card.title}</h4>
                  </div>
                  <ChevronDown
                    className={`technical__compact-item-chevron ${
                      isOpen ? "technical__compact-item-chevron--open" : ""
                    }`}
                    size={18}
                    strokeWidth={1.8}
                  />
                </button>
                <div
                  className={`technical__compact-item-content ${
                    isOpen ? "technical__compact-item-content--open" : ""
                  }`}
                >
                  <p>{card.text}</p>
                </div>
              </div>
            );
          })}
        </div>
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

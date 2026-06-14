"use client";

import { useState } from "react";
import {
  ChevronDown,
  Code2,
  Database,
  GitBranch,
  Plug,
  Server,
  Workflow
} from "lucide-react";
import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
  icon: LucideIcon;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Construyo interfaces claras, responsivas y pensadas para que el usuario pueda navegar sin complicarse.",
    skills: ["React", "Vite", "JavaScript", "HTML", "CSS", "Responsive Design", "UI web"],
    icon: Code2
  },
  {
    title: "Backend y lógica",
    description:
      "Trabajo la lógica detrás de cada proyecto, conectando datos, formularios, APIs e integraciones necesarias.",
    skills: ["Node.js", "Express", "APIs REST", "Integración con servicios externos"],
    icon: Server
  },
  {
    title: "Bases de datos y administración",
    description:
      "Uso herramientas simples y prácticas para que cada cliente pueda gestionar información sin depender del código.",
    skills: ["Supabase", "MongoDB", "Google Sheets como panel simple de administración"],
    icon: Database
  },
  {
    title: "Herramientas",
    description:
      "Manejo herramientas de desarrollo, deploy y control de versiones para llevar los proyectos de forma ordenada.",
    skills: ["Git", "GitHub", "Vercel", "Cloudinary", "Postman", "VS Code"],
    icon: GitBranch
  },
  {
    title: "Integraciones",
    description:
      "Conecto la web con herramientas reales de trabajo, como WhatsApp, Sheets, pagos o sistemas de reserva.",
    skills: ["WhatsApp", "Google Sheets", "Mercado Pago", "Formularios", "Sistemas de turnos", "Catálogos digitales"],
    icon: Plug
  },
  {
    title: "Perfil técnico",
    description:
      "Mi formación en Sistemas me permite analizar requerimientos, ordenar ideas y convertirlas en soluciones funcionales.",
    skills: ["Análisis de requerimientos", "Diseño de soluciones", "Documentación", "Lógica de negocio", "Testing básico", "Mejora de procesos"],
    icon: Workflow
  }
];

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
          <h2>No solo diseño páginas: pienso cómo tienen que funcionar.</h2>
        </div>
        <p>
          Combino desarrollo web, herramientas prácticas e integración de procesos para crear soluciones claras, usables y fáciles de sostener.
        </p>
      </div>

      <p className="technical__lead reveal">
        Organizo cada proyecto desde lo visual y desde la lógica: qué información necesita, cómo se administra, qué acciones debe facilitar y qué herramientas conviene conectar.
      </p>

      <div className="skills-grid skills-grid--desktop">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <article
              className="skill-card reveal"
              key={category.title}
              style={{ "--i": index } as CSSProperties}
            >
              <div className="skill-card__top">
                <div className="skill-card__icon">
                  <Icon aria-hidden="true" size={21} strokeWidth={1.8} />
                </div>
                <h3>{category.title}</h3>
              </div>
              <p>{category.description}</p>
              <div className="skill-card__chips">
                {category.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      <div className="skills-mobile">
        <div className="skills-accordion reveal">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isOpen = openIndex === index;
            return (
              <div className="skills-accordion__item" key={category.title}>
                <button
                  className="skills-accordion__header"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <div className="skills-accordion__title">
                    <Icon aria-hidden="true" size={18} strokeWidth={1.7} />
                    <h4>{category.title}</h4>
                  </div>
                  <ChevronDown
                    className={`skills-accordion__chevron ${
                      isOpen ? "skills-accordion__chevron--open" : ""
                    }`}
                    size={18}
                    strokeWidth={1.8}
                  />
                </button>
                <div
                  className={`skills-accordion__content ${
                    isOpen ? "skills-accordion__content--open" : ""
                  }`}
                >
                  <p>{category.description}</p>
                  <div className="skill-card__chips">
                    {category.skills.map((skill) => (
                      <span className="skill-chip" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type ProjectDetailsToggleProps = {
  problem: string;
  solution: string;
  technologies?: string[];
};

export function ProjectDetailsToggle({ problem, solution, technologies = [] }: ProjectDetailsToggleProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`project-details-wrap ${isOpen ? "project-details-wrap--open" : ""}`}>
      <button
        className="project-details-toggle"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        {isOpen ? "Ocultar detalles" : "Ver detalles"}
        {isOpen ? (
          <ChevronUp aria-hidden="true" size={16} strokeWidth={1.9} />
        ) : (
          <ChevronDown aria-hidden="true" size={16} strokeWidth={1.9} />
        )}
      </button>

      <div className="project-details" aria-hidden={!isOpen}>
        <div>
          <span>Problema</span>
          <p>{problem}</p>
        </div>
        <div>
          <span>Qué hice</span>
          <p>{solution}</p>
        </div>
        {technologies && technologies.length > 0 && (
          <div>
            <span>Tecnologías</span>
            <div className="tags">
              {technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

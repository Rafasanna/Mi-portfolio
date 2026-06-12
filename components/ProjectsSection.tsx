import { Button } from "@/components/Button";
import { ProjectDetailsToggle } from "@/components/ProjectDetailsToggle";
import { SectionIntro } from "@/components/SectionIntro";
import { VisualImage } from "@/components/VisualImage";
import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section className="projects section-shell" id="proyectos">
      <SectionIntro
        eyebrow="PROYECTOS"
        title="Proyectos destacados"
        text="Algunos trabajos donde combiné diseño, desarrollo y lógica de sistemas para resolver necesidades reales."
      />

      <div className="projects__list">
        {projects.map((project, index) => {
          const projectImage = (
            <VisualImage
              alt={project.title === "Azul Sanna" ? "Sitio web Azul Sanna" : project.title}
              className="project-visual"
              label={project.title}
              sizes="(max-width: 768px) 100vw, 38vw"
              src={project.image}
            />
          );

          return (
            <article className="project-card reveal" key={project.title}>
              <div className="project-card__media">
                {project.liveUrl ? (
                  <a
                    aria-label={`Ver sitio de ${project.title}`}
                    className="project-image-link"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectImage}
                    <span>Ver sitio</span>
                  </a>
                ) : (
                  projectImage
                )}
              </div>
              <div className="project-card__content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                {project.collaboration ? (
                  <p className="project-collaboration">
                    En colaboración con{" "}
                    <a href={project.collaboration.url} target="_blank" rel="noopener noreferrer">
                      {project.collaboration.name}
                      <ExternalLink aria-hidden="true" size={13} strokeWidth={1.8} />
                    </a>
                  </p>
                ) : null}
                <p>{project.description}</p>

                <ProjectDetailsToggle problem={project.problem} solution={project.solution} />

                <div className="tags">
                  {project.technologies.map((tech, tagIndex) => (
                    <span key={tech} className={tagIndex >= 5 ? "tag--mobile-hidden" : undefined}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.liveUrl ? (
                    <Button
                      href={project.liveUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      variant={index % 2 === 0 ? "primary" : "secondary"}
                    >
                      Ver sitio
                      <ExternalLink aria-hidden="true" size={15} strokeWidth={1.8} />
                    </Button>
                  ) : (
                    <span className="button button--secondary button--disabled">Próximamente</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

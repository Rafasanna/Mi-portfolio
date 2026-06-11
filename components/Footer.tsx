import Link from "next/link";
import { AtSign, ExternalLink, Mail } from "lucide-react";

const links = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" }
];

const contactLinks = [
  { label: "GitHub", href: "https://github.com/Rafasanna", icon: ExternalLink, external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rafaela-sanna-23a329371/",
    icon: ExternalLink,
    external: true
  },
  { label: "Instagram", href: "https://www.instagram.com/rafaelasanna_/", icon: AtSign, external: true },
  { label: "Mail", href: "mailto:rafaelasanna1511@gmail.com", icon: Mail }
];

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <Link className="brand" href="#sobre-mi">
          Rafaela Sanna
        </Link>
        <p>Desarrollo web · Sistemas · Datos</p>
      </div>
      <nav aria-label="Links rápidos">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="footer__meta">
        <a href="mailto:rafaelasanna1511@gmail.com">
          Contacto: rafaelasanna1511@gmail.com
        </a>
        <div className="footer__socials" aria-label="Links de contacto">
          {contactLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              href={href}
              key={label}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" size={14} strokeWidth={1.8} />
              {label}
            </a>
          ))}
        </div>
        <p>{new Date().getFullYear()} · Diseñado y desarrollado por Rafaela Sanna.</p>
      </div>
    </footer>
  );
}

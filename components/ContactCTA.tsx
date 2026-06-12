import { AtSign, ExternalLink, Mail, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const contact = {
  whatsapp: "https://wa.me/549XXXXXXXXXX",
  email: "mailto:rafaelasanna1511@gmail.com",
  linkedin: "https://www.linkedin.com/in/rafaela-sanna-23a329371/",
  instagram: "https://www.instagram.com/rafaelasanna_/",
  github: "https://github.com/Rafasanna"
};

const contactActions: Array<{
  label: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}> = [
  {
    label: "Mail",
    href: contact.email,
    icon: Mail
  },
  {
    label: "LinkedIn",
    href: contact.linkedin,
    icon: ExternalLink,
    external: true
  },
  {
    label: "Instagram",
    href: contact.instagram,
    icon: AtSign,
    external: true
  },
  {
    label: "GitHub",
    href: contact.github,
    icon: ExternalLink,
    external: true
  }
];

export function ContactCTA() {
  return (
    <section className="contact section-shell" id="contacto">
      <div className="contact__inner reveal">
        <p className="eyebrow">CONTACTO</p>
        <h2>¿Tenés una idea o querés llevar tu negocio a una web más profesional?</h2>
        <p>
          Podemos pensar una solución simple, clara y funcional para mostrar tus
          productos, recibir pedidos, organizar turnos o presentar tu trabajo de
          una forma más profesional. Escribime y lo vemos.
        </p>
        <div className="contact__actions">
          <a className="contact__primary" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" size={18} strokeWidth={1.8} />
            Escribirme por WhatsApp
          </a>

          <div className="contact__social-grid" aria-label="Links de contacto">
            {contactActions.map(({ label, href, icon: Icon, external }) => (
              <a
                className="contact__social-card"
                href={href}
                key={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

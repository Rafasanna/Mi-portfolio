"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Servicios", href: "#servicios" },
  { label: "Perfil técnico", href: "#perfil-tecnico" },
  { label: "Contacto", href: "#contacto" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <Link className="brand" href="#sobre-mi" onClick={() => setOpen(false)}>
        Rafaela Sanna
      </Link>

      <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Navegación principal">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
        <Link className="nav-cta" href="#contacto" onClick={() => setOpen(false)}>
          Consultar
        </Link>
      </nav>

      <button
        className={`menu-button ${open ? "menu-button--open" : ""}`}
        type="button"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

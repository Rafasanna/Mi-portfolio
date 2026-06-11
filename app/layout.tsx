import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rafaela Sanna | Desarrollo web, sistemas y datos",
  description:
    "Portfolio de Rafaela Sanna, estudiante avanzada de Sistemas y desarrolladora de soluciones digitales para negocios.",
  keywords: [
    "Rafaela Sanna",
    "desarrollo web",
    "portfolio",
    "sistemas",
    "bases de datos",
    "Next.js",
    "React",
    "soluciones digitales"
  ],
  openGraph: {
    title: "Rafaela Sanna | Soluciones digitales con mirada de sistemas",
    description:
      "Diseño y desarrollo páginas web, catálogos, menús digitales, turnos y herramientas simples para negocios.",
    type: "website",
    locale: "es_AR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

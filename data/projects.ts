export type Project = {
  title: string;
  type: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  caseUrl?: string;
  collaboration?: {
    name: string;
    url: string;
  };
};

export const projects: Project[] = [
  {
    title: "Flor de Postre",
    type: "Catálogo web + pedidos por WhatsApp",
    description:
      "Sitio web para una pastelería local, pensado para mostrar productos, menú diario y postres por encargo, permitiendo armar pedidos y enviarlos directamente por WhatsApp.",
    problem:
      "Centralizar productos, fotos, información y pedidos en un solo lugar.",
    solution:
      "Desarrollo frontend, diseño responsive, carrito, integración con WhatsApp, estructura de productos administrable y conexión con herramientas simples de gestión.",
    technologies: [
      "React",
      "Vite",
      "Google Sheets",
      "Cloudinary",
      "Vercel",
      "WhatsApp"
    ],
    image: "/images/projects/flor-de-postre.png",
    liveUrl: "https://flordepostre.com.ar/"
  },
  {
    title: "Xeneize Regalería",
    type: "E-commerce",
    description:
      "E-commerce desarrollado para vender productos a todo el país, con catálogo administrable, variantes de producto, carrito de compra y pagos integrados con Mercado Pago.",
    problem:
      "Crear una tienda online que permita mostrar productos con variantes, gestionar disponibilidad y facilitar compras desde cualquier punto del país.",
    solution:
      "Participé en el desarrollo de la lógica de productos, variantes, stock, carrito, flujo de compra e integración de pagos con Mercado Pago, cuidando que la experiencia sea clara y responsive.",
    technologies: [
      "React",
      "Supabase",
      "Base de datos",
      "Variantes",
      "Carrito",
      "Mercado Pago",
      "E-commerce",
      "Administración"
    ],
    image: "/images/projects/xeneize-regaleria.png",
    collaboration: {
      name: "Luca Saboredo",
      url: "https://www.linkedin.com/in/luca-saboredo-066b242a8/"
    }
  },
  {
    title: "Azul Sanna",
    type: "Sitio profesional",
    description:
      "Sitio web profesional para una Licenciada en Terapia Ocupacional, pensado para presentar su perfil, explicar qué es la Terapia Ocupacional, mostrar áreas de abordaje y facilitar el contacto y la solicitud de turnos por WhatsApp.",
    problem:
      "Centralizar la información profesional, explicar servicios de forma clara y generar un canal simple de contacto y reserva de turnos para pacientes y familias.",
    solution:
      "Diseño y desarrollo de una web clara, cálida y responsive, con secciones informativas, navegación simple, contenido profesional, accesos directos de contacto y solicitud de turnos por WhatsApp.",
    technologies: [
      "React",
      "Diseño responsive",
      "Vercel",
      "WhatsApp",
      "Reserva de turnos",
      "Terapia Ocupacional",
      "Web profesional",
      "Contacto directo",
      "Salud"
    ],
    image: "/images/projects/azul-sanna.png",
    liveUrl: "https://licmazulsanna.com/"
  }
];

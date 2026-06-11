import {
  Atom,
  BarChart3,
  Braces,
  CalendarCheck,
  Code2,
  Database,
  FileCode,
  GitBranch,
  GitPullRequest,
  Image,
  Laptop,
  LayoutGrid,
  ListChecks,
  MessageCircle,
  Rows3,
  Smartphone,
  Table2,
  TableProperties,
  Triangle
} from "lucide-react";

const marqueeItems = [
  { label: "Desarrollo web", icon: Laptop },
  { label: "React", icon: Atom },
  { label: "Next.js", icon: Code2 },
  { label: "TypeScript", icon: FileCode },
  { label: "Bases de datos", icon: Database },
  { label: "SQL", icon: Table2 },
  { label: "NoSQL", icon: Rows3 },
  { label: "Supabase", icon: Database },
  { label: "Google Sheets", icon: TableProperties },
  { label: "Cloudinary", icon: Image },
  { label: "Vercel", icon: Triangle },
  { label: "Git", icon: GitBranch },
  { label: "GitHub", icon: GitPullRequest },
  { label: "APIs", icon: Braces },
  { label: "Integración con WhatsApp", icon: MessageCircle },
  { label: "Catálogos digitales", icon: LayoutGrid },
  { label: "Sistemas de turnos", icon: CalendarCheck },
  { label: "Menús digitales", icon: ListChecks },
  { label: "Datos", icon: BarChart3 },
  { label: "Diseño responsive", icon: Smartphone }
];

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="marquee" aria-label="Herramientas, servicios y tecnologías">
      <div className="marquee__track">
        {items.map(({ label, icon: Icon }, index) => (
          <span className="marquee__item" key={`${label}-${index}`}>
            <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

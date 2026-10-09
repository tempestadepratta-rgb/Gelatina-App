import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CalendarDays, Compass, Gift } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

const COLORS = {
  red: "#C90016",
  black: "#17191C",
  white: "#FFFFFF",
  gray: "#F6F7F9",
  green: "#78CE5A",
};

// Cada cartão está preparado para receber navegação futura; por enquanto,
// são renderizados sem link para não apontar a rotas inexistentes.
const CARDS = [
  {
    icon: Compass,
    title: "Mi Guía Personalizada",
    description: "Contenido a tu medida para avanzar paso a paso en tu bienestar.",
  },
  {
    icon: CalendarDays,
    title: "Programa de 21 Días",
    description: "Un plan guiado de tres semanas para crear hábitos sostenibles.",
  },
  {
    icon: Gift,
    title: "Bonos Exclusivos",
    description: "Recursos y ventajas especiales solo para miembros de la app.",
  },
  {
    icon: BookOpen,
    title: "Mi Biblioteca",
    description: "Guarda y consulta todo el material que vayas desbloqueando.",
  },
] as const;

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.gray }}>
      <header
        className="w-full px-4 py-5 sm:px-8"
        style={{ backgroundColor: COLORS.red }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <span
            className="text-lg font-bold tracking-wide sm:text-xl"
            style={{ color: COLORS.white }}
          >
            GELATINA APP
          </span>
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ backgroundColor: COLORS.green }}
            aria-hidden="true"
          />
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-14">
        <section className="text-center">
          <h1
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: COLORS.black }}
          >
            Bienvenido a Gelatina App
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg"
            style={{ color: COLORS.black, opacity: 0.7 }}
          >
            Tu espacio privado de bienestar masculino.
          </p>
        </section>

        <section
          className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Secciones principales"
        >
          {CARDS.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="h-full border-0 shadow-sm transition-shadow hover:shadow-md"
              style={{ backgroundColor: COLORS.white }}
            >
              <CardHeader className="space-y-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full"
                  style={{ backgroundColor: COLORS.gray }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: COLORS.red }} />
                </span>
                <CardTitle className="text-lg" style={{ color: COLORS.black }}>
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: COLORS.black, opacity: 0.7 }}>
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}

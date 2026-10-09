import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CalendarDays, Compass, Gift, Lock, ShieldCheck } from "lucide-react";

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
  bg: "#0F0F12",
  graphite: "#17191C",
  red: "#C90016",
  redDark: "#7A0010",
  gold: "#C8A96B",
  white: "#FFFFFF",
  textSecondary: "#B7BCC3",
};

// Cada cartão está preparado para receber navegação futura; por enquanto,
// são renderizados sem link para não apontar a rotas inexistentes.
const CARDS = [
  {
    icon: Compass,
    title: "Mi Protocolo Personal",
    description:
      "Accede a una guía estructurada para fortalecer tu bienestar masculino paso a paso.",
  },
  {
    icon: CalendarDays,
    title: "Programa de 21 Días",
    description:
      "Una ruta práctica para recuperar consistencia, energía y control en tu rutina.",
  },
  {
    icon: Gift,
    title: "Bonos Exclusivos",
    description:
      "Explora materiales privados sobre intimidad, deseo, confianza y conexión.",
  },
  {
    icon: BookOpen,
    title: "Biblioteca Privada",
    description:
      "Consulta contenidos reservados para profundizar en tu evolución personal.",
  },
] as const;

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: COLORS.bg }}>
      <header
        className="w-full"
        style={{
          backgroundColor: COLORS.redDark,
          borderBottom: `1px solid ${COLORS.red}`,
        }}
      >
        <div className="h-1 w-full" style={{ backgroundColor: COLORS.red }} aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-8">
          <div className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-md"
              style={{ backgroundColor: COLORS.red }}
              aria-hidden="true"
            >
              <ShieldCheck className="h-5 w-5" style={{ color: COLORS.gold }} />
            </span>
            <span
              className="text-lg font-bold tracking-[0.2em] sm:text-xl"
              style={{ color: COLORS.white }}
            >
              GELATINA APP
            </span>
          </div>
          <span
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-widest sm:flex"
            style={{ color: COLORS.gold }}
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Acceso privado
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-8 sm:py-16">
        <section className="text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
            style={{
              backgroundColor: COLORS.graphite,
              color: COLORS.gold,
              border: `1px solid ${COLORS.gold}`,
            }}
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            Acceso privado
          </span>
          <h1
            className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{ color: COLORS.white }}
          >
            Bienvenido a Gelatina App
          </h1>
          <p
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg"
            style={{ color: COLORS.textSecondary }}
          >
            Tu acceso privado a un protocolo masculino diseñado para reforzar
            confianza, energía e intimidad.
          </p>
          <p
            className="mx-auto mt-3 max-w-2xl text-sm sm:text-base"
            style={{ color: COLORS.textSecondary, opacity: 0.85 }}
          >
            Contenido exclusivo para hombres adultos que desean mejorar su rutina,
            su seguridad personal y su bienestar íntimo.
          </p>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md px-8 py-3.5 text-sm font-semibold uppercase tracking-wider transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{
                backgroundColor: COLORS.red,
                color: COLORS.white,
                boxShadow: `0 10px 30px -10px ${COLORS.red}`,
              }}
            >
              Comenzar ahora
            </button>
          </div>
        </section>

        <section
          className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4"
          aria-label="Secciones principales"
        >
          {CARDS.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="h-full rounded-xl transition-shadow"
              style={{
                backgroundColor: COLORS.graphite,
                border: `1px solid rgba(200, 169, 107, 0.25)`,
                boxShadow: "0 12px 30px -18px rgba(0,0,0,0.9)",
              }}
            >
              <CardHeader className="space-y-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: "rgba(201, 0, 22, 0.12)",
                    border: `1px solid ${COLORS.red}`,
                  }}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" style={{ color: COLORS.gold }} />
                </span>
                <CardTitle
                  className="text-lg font-semibold tracking-tight"
                  style={{ color: COLORS.white }}
                >
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ color: COLORS.textSecondary }}>
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>

      <footer
        className="w-full px-4 py-6 text-center sm:px-8"
        style={{ backgroundColor: COLORS.graphite }}
      >
        <p className="text-xs uppercase tracking-widest" style={{ color: COLORS.textSecondary }}>
          Contenido exclusivo para adultos
        </p>
      </footer>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BookOpen, CalendarDays, Compass, Gift, Flame, Heart, Lock } from "lucide-react";

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
//
// CAPAS PROVISÓRIAS: cada módulo exibe hoje um gradiente CSS como capa
// temporária (sem URL de imagem inexistente). Quando os arquivos reais
// (/public/covers/*.jpg) forem fornecidos, basta preencher o campo `cover`.
const CARDS = [
  {
    icon: Compass,
    title: "Mi Protocolo Personal",
    description:
      "Accede a una guía estructurada para fortalecer tu bienestar masculino paso a paso.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #17191C 0%, #3A0510 55%, #C90016 100%)",
  },
  {
    icon: CalendarDays,
    title: "Programa de 21 Días",
    description:
      "Una ruta práctica para recuperar consistencia, energía y control en tu rutina.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #0F0F12 0%, #2A0A12 50%, #C8A96B 100%)",
  },
  {
    icon: Gift,
    title: "Bonos Exclusivos",
    description:
      "Explora materiales privados sobre intimidad, deseo, confianza y conexión.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #17191C 0%, #7A0010 60%, #C8A96B 100%)",
  },
  {
    icon: BookOpen,
    title: "Biblioteca Privada",
    description:
      "Consulta contenidos reservados para profundizar en tu evolución personal.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #0F0F12 0%, #1E1F24 55%, #C90016 100%)",
  },
  {
    icon: Heart,
    title: "Placer Femenino",
    description:
      "Aprende a comprender el deseo y la conexión desde una mirada adulta y respetuosa.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #17191C 0%, #4A0A1A 60%, #C8A96B 100%)",
  },
  {
    icon: Flame,
    title: "Vitalidad Masculina",
    description:
      "Enfoca hábitos de energía, disciplina y presencia para tu mejor versión.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #0F0F12 0%, #2B0B10 55%, #C90016 100%)",
  },
  {
    icon: Lock,
    title: "Imán Sexual",
    description:
      "Desarrolla seguridad, magnetismo y una comunicación íntima más clara.",
    cover: null as string | null,
    gradient: "linear-gradient(135deg, #17191C 0%, #7A0010 55%, #C8A96B 100%)",
  },
] as const;

function LogoMark({ variant = "md" }: { variant?: "sm" | "md" }) {
  const [failed, setFailed] = useState(false);
  const size = variant === "sm" ? 36 : 56;

  if (failed) {
    return (
      <span
        className="font-bold tracking-[0.2em]"
        style={{
          color: COLORS.white,
          fontSize: variant === "sm" ? "1rem" : "1.25rem",
        }}
      >
        GELATINA APP
      </span>
    );
  }

  return (
    <img
      src="/gelatina-logo.png"
      alt="Gelatina App"
      width={size}
      height={size}
      onError={() => setFailed(true)}
      className="rounded-md object-contain"
      style={{ width: size, height: size }}
    />
  );
}

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
            <LogoMark variant="sm" />
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
          <div className="mb-6 flex justify-center">
            <LogoMark variant="md" />
          </div>
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
          {CARDS.map(({ icon: Icon, title, description, cover, gradient }) => (
            <Card
              key={title}
              className="h-full overflow-hidden rounded-xl transition-shadow"
              style={{
                backgroundColor: COLORS.graphite,
                border: `1px solid rgba(200, 169, 107, 0.25)`,
                boxShadow: "0 12px 30px -18px rgba(0,0,0,0.9)",
              }}
            >
              {/* Capa provisória: gradiente CSS enquanto o arquivo de imagem
                  real do módulo não estiver disponível em /public. */}
              <div
                className="relative h-32 w-full"
                style={{ backgroundImage: gradient }}
              >
                {cover ? (
                  <img
                    src={cover}
                    alt={`Capa de ${title}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : null}
                <span
                  className="absolute bottom-2 right-2 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: "rgba(15, 15, 18, 0.75)",
                    color: COLORS.gold,
                  }}
                >
                  Capa provisoria
                </span>
              </div>
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

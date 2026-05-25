import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Activity, ArrowRight, Mail, Lock } from "lucide-react";
import heroImage from "@/assets/login-hero.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar — PhysioSim" },
      { name: "description", content: "Acesse sua conta PhysioSim para iniciar simulações clínicas de fisioterapia." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com Lovable Cloud (Supabase auth) futuramente.
    navigate({ to: "/dashboard" });
  };

  return (
    <main className="grid min-h-screen grid-cols-1 lg:grid-cols-2 bg-background">
      {/* Form side */}
      <div className="flex items-center justify-center px-6 py-12 lg:px-16">
        <div className="w-full max-w-sm space-y-10">
          <div className="flex items-center gap-2">
            <div className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Activity className="size-5" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-bold italic tracking-tight text-primary">PhysioSim</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Bem-vindo de volta</h1>
            <p className="text-sm text-muted-foreground">
              Entre na sua conta para iniciar atendimentos simulados.
            </p>
          </div>

          <form className="space-y-5" onSubmit={onSubmit}>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                E-mail profissional
              </label>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@clinica.com.br"
                  className="w-full rounded-lg border border-input bg-card py-3 pl-10 pr-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Senha
              </label>
              <div className="relative">
                <Lock className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-lg border border-input bg-card py-3 pl-10 pr-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Entrar no Sistema
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              type="button"
              className="w-full rounded-lg border border-input bg-card py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              Criar Conta
            </button>
          </form>

          <p className="text-center text-xs text-muted-foreground">
            Ao continuar, você concorda com os termos clínicos da plataforma.
          </p>
        </div>
      </div>

      {/* Visual side */}
      <div className="relative hidden overflow-hidden lg:block">
        <img
          src={heroImage}
          alt="Sala de fisioterapia moderna"
          width={1024}
          height={1280}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/70 via-primary/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-12 text-primary-foreground">
          <p className="max-w-md text-2xl font-semibold leading-tight tracking-tight">
            “Pratique decisões clínicas em um ambiente seguro, com pacientes virtuais e protocolos baseados em evidências.”
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] opacity-80">PhysioSim · Plataforma Clínica</p>
        </div>
      </div>
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { AppTopbar } from "@/components/AppTopbar";
import {
  Plus, TrendingUp, Users, Clock, Target, Activity, Heart, Zap,
} from "lucide-react";

export const Route = createFileRoute("/_app/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — PhysioSim" },
      { name: "description", content: "Visão geral dos atendimentos simulados, pacientes e protocolos clínicos." },
    ],
  }),
  component: DashboardPage,
});

const stats = [
  { label: "Simulações Hoje", value: "12", hint: "+20% vs ontem", hintClass: "text-success", icon: Activity },
  { label: "Pacientes Virtuais", value: "148", hint: "Base de dados completa", hintClass: "text-muted-foreground italic", icon: Users },
  { label: "Tempo Médio Sim.", value: "24m", hint: "Protocolo padrão", hintClass: "text-muted-foreground", icon: Clock },
];

export default function DashboardPage() {
  return (
    <>
      <AppTopbar title="Dashboard de Atendimento" badge="Clínica Ativa" />

      <div className="flex-1 overflow-y-auto p-6 lg:p-8">
        <div className="space-y-8">
          {/* Stats */}
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-muted-foreground">{s.label}</p>
                  <s.icon className="size-4 text-muted-foreground" />
                </div>
                <h3 className="mt-3 text-3xl font-bold tracking-tight">{s.value}</h3>
                <p className={`mt-1 text-xs font-medium ${s.hintClass}`}>{s.hint}</p>
              </div>
            ))}
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary/80 p-6 text-primary-foreground shadow-lg shadow-primary/20">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium opacity-80">Pontuação de Precisão</p>
                <Target className="size-4 opacity-80" />
              </div>
              <h3 className="mt-3 text-3xl font-bold tracking-tight">98.4%</h3>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/20">
                <div className="h-full w-[98%] rounded-full bg-secondary" />
              </div>
            </div>
          </section>

          {/* Workspace */}
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="flex items-center justify-between border-b border-border bg-muted/30 p-5">
                  <h2 className="font-semibold">Simulação em Tempo Real</h2>
                  <button className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110">
                    <Plus className="size-4" /> Novo Atendimento
                  </button>
                </div>
                <div className="flex min-h-[360px] flex-col items-center justify-center border-b border-border p-8">
                  <div className="mb-6 grid aspect-video w-full max-w-2xl place-items-center rounded-xl border border-dashed border-border bg-gradient-to-br from-muted/60 to-muted/20">
                    <div className="text-center">
                      <div className="mx-auto mb-3 grid size-12 place-items-center rounded-full bg-card shadow-sm">
                        <Activity className="size-5 text-primary" />
                      </div>
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        Visualização do Paciente Virtual
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground/70">
                        Inicie uma simulação para carregar o modelo
                      </p>
                    </div>
                  </div>
                  <div className="grid w-full max-w-2xl grid-cols-3 gap-4">
                    <InfoCell label="Recurso" value="TENS / FES" />
                    <InfoCell label="Exercício" value="Isometria Quadríceps" />
                    <InfoCell label="Duração" value="15:00 min" />
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-6 p-4 text-xs font-medium text-muted-foreground">
                  <Indicator color="bg-success" pulse>Monitorando batimentos</Indicator>
                  <Indicator color="bg-secondary">Amplitude: 115°</Indicator>
                  <Indicator color="bg-amber-500">Nível de dor: 3/10</Indicator>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Patient */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid size-14 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-primary-foreground">
                    RA
                  </div>
                  <div>
                    <h3 className="font-bold">Roberto Alencar</h3>
                    <p className="text-xs text-muted-foreground">Pós-Operatório LCA</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Evolução Clínica
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="text-sm">Recuperação Funcional</span>
                      <span className="text-sm font-bold">62%</span>
                    </div>
                    <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full w-[62%] rounded-full bg-secondary" />
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Prescrição Atual
                    </p>
                    <ul className="space-y-2 text-sm">
                      {["Crioterapia (20 min)", "Mobilização Passiva", "Fortalecimento Grau 3"].map((p) => (
                        <li key={p} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-primary" /> {p}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full rounded-xl bg-foreground py-2.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90">
                    Ver Prontuário Completo
                  </button>
                </div>
              </div>

              {/* Protocols */}
              <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6">
                <div className="mb-4 flex items-center gap-2">
                  <Zap className="size-4 text-primary" />
                  <h4 className="text-sm font-bold text-primary">Sugestões de Tratamento</h4>
                </div>
                <div className="space-y-3">
                  {[
                    { title: "Protocolo Mackenzie", note: "Baseado em sintomas atuais" },
                    { title: "Eletroanalgesia Burst", note: "Para controle de dor aguda" },
                  ].map((p) => (
                    <div key={p.title} className="rounded-lg border border-primary/10 bg-card p-3 shadow-sm transition-shadow hover:shadow-md">
                      <p className="text-xs font-bold">{p.title}</p>
                      <p className="mt-1 text-[10px] text-muted-foreground">{p.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-muted/30 p-4">
      <p className="mb-1 text-[10px] font-bold uppercase text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold">{value}</p>
    </div>
  );
}

function Indicator({ color, pulse, children }: { color: string; pulse?: boolean; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`size-2 rounded-full ${color} ${pulse ? "animate-pulse" : ""}`} />
      {children}
    </div>
  );
}

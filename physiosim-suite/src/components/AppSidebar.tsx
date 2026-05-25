import { Link, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard, Users, PlayCircle, Stethoscope, Dumbbell,
  TrendingUp, ClipboardList, FileBarChart, Settings, Activity,
} from "lucide-react";

const mainNav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/pacientes", label: "Pacientes", icon: Users },
  { to: "/simulacoes", label: "Simulações", icon: PlayCircle },
  { to: "/equipamentos", label: "Equipamentos", icon: Stethoscope },
  { to: "/exercicios", label: "Exercícios", icon: Dumbbell },
] as const;

const reportsNav = [
  { to: "/evolucoes", label: "Evoluções", icon: TrendingUp },
  { to: "/protocolos", label: "Protocolos", icon: ClipboardList },
  { to: "/relatorios", label: "Relatórios", icon: FileBarChart },
] as const;

export function AppSidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const renderItem = (item: { to: string; label: string; icon: typeof LayoutDashboard }) => {
    const active = pathname === item.to;
    const Icon = item.icon;
    return (
      <Link
        key={item.to}
        to={item.to}
        className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          active
            ? "bg-primary/5 text-primary"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
        }`}
      >
        <Icon className={`size-4 ${active ? "text-primary" : ""}`} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <div className="border-b border-sidebar-border p-6">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="size-4" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold italic tracking-tight text-primary">PhysioSim</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-4">
        {mainNav.map(renderItem)}

        <div className="px-3 pb-2 pt-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Relatórios
        </div>
        {reportsNav.map(renderItem)}

        <div className="px-3 pb-2 pt-4 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
          Sistema
        </div>
        {renderItem({ to: "/configuracoes", label: "Configurações", icon: Settings })}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="rounded-xl bg-muted p-4">
          <p className="mb-2 text-xs font-medium text-muted-foreground">Plano Profissional</p>
          <div className="h-1 w-full overflow-hidden rounded-full bg-border">
            <div className="h-full w-3/4 bg-secondary" />
          </div>
          <p className="mt-2 text-[10px] text-muted-foreground">75% da capacidade de simulação</p>
        </div>
      </div>
    </aside>
  );
}

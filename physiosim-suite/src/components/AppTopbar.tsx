import { Link } from "@tanstack/react-router";
import { Search, Bell } from "lucide-react";

interface Props {
  title: string;
  badge?: string;
}

export function AppTopbar({ title, badge }: Props) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border bg-card px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold tracking-tight">{title}</h1>
        {badge && (
          <span className="rounded-full bg-success/15 px-2.5 py-0.5 text-xs font-medium text-success">
            {badge}
          </span>
        )}
      </div>
      <div className="flex items-center gap-3">
        <div className="relative hidden md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar paciente ou protocolo..."
            className="h-9 w-72 rounded-lg border border-input bg-muted/40 pl-9 pr-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </div>
        <button className="grid size-9 place-items-center rounded-lg border border-input bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Bell className="size-4" />
        </button>
        <Link to="/login" className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-primary to-secondary text-xs font-bold text-primary-foreground ring-2 ring-card">
          DR
        </Link>
      </div>
    </header>
  );
}

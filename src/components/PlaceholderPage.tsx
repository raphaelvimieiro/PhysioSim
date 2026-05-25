import { AppTopbar } from "@/components/AppTopbar";
import { Construction } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: Props) {
  return (
    <>
      <AppTopbar title={title} />
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="max-w-md rounded-2xl border border-dashed border-border bg-card p-12 text-center shadow-sm">
          <div className="mx-auto mb-4 grid size-12 place-items-center rounded-full bg-primary/10 text-primary">
            <Construction className="size-5" />
          </div>
          <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground/70">Em breve</p>
        </div>
      </div>
    </>
  );
}

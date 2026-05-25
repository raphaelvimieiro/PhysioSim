import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/equipamentos")({
  head: () => ({ meta: [{ title: "Equipamentos — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Equipamentos" description="Catálogo de recursos terapêuticos físicos disponíveis na simulação." />,
});

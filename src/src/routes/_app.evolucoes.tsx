import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/evolucoes")({
  head: () => ({ meta: [{ title: "Evoluções — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Evoluções" description="Registre a evolução clínica dos pacientes ao longo das sessões." />,
});

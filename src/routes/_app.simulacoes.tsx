import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/simulacoes")({
  head: () => ({ meta: [{ title: "Simulações — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Simulações" description="Inicie e acompanhe simulações de atendimento fisioterapêutico." />,
});

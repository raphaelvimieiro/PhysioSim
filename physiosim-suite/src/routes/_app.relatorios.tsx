import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/relatorios")({
  head: () => ({ meta: [{ title: "Relatórios — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Relatórios" description="Análises e métricas das simulações realizadas." />,
});

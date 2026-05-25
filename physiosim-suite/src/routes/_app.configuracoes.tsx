import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/configuracoes")({
  head: () => ({ meta: [{ title: "Configurações — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Configurações" description="Preferências da conta e da plataforma." />,
});

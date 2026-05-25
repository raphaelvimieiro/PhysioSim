import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/protocolos")({
  head: () => ({ meta: [{ title: "Protocolos — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Protocolos" description="Protocolos clínicos baseados em evidências para diferentes condições." />,
});

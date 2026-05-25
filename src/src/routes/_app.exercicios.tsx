import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/exercicios")({
  head: () => ({ meta: [{ title: "Exercícios — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Exercícios" description="Biblioteca de exercícios terapêuticos para prescrição clínica." />,
});

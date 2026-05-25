import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/PlaceholderPage";

export const Route = createFileRoute("/_app/pacientes")({
  head: () => ({ meta: [{ title: "Pacientes — PhysioSim" }] }),
  component: () => <PlaceholderPage title="Pacientes" description="Gerencie a base de pacientes virtuais e seus históricos clínicos." />,
});

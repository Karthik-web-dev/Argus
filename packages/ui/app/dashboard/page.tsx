import { Workspace } from "@/components/dashboard/Workspace";
import "./dashboard.css";
import "./dashboard-overrides.css";

export const metadata = {
  title: "Argus Console — QA Runs",
  description: "Review browser runs, findings, evidence, and coverage in the Argus UI demo.",
};

export default function DashboardPage() {
  return <Workspace />;
}

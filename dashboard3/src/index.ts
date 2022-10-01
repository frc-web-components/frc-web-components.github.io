import addPlugins from "@frc-web-components/plugins";
import createDashboard from "@frc-web-components/frc-web-components";

window.addEventListener("DOMContentLoaded", () => {
  const dashboard = createDashboard(document.body);
  addPlugins(dashboard);
  (window as any).dasboard = dashboard;
});
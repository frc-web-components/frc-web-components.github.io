import createDashboard from "@frc-web-components/frc-web-components";

window.addEventListener("DOMContentLoaded", () => {
  const dashboard = createDashboard(document.body);
  (window as any).dasboard = dashboard;
});
import { PAGES } from "~/constants/pages";
import { DashboardPage } from "~/pages/Dashboard";

export const dashboardRouter = [
  {
    path: PAGES.dashboard,
    element: (<DashboardPage />),
  },
];

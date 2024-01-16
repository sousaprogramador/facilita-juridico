import { createBrowserRouter } from "react-router-dom";

import { loginRouter } from "./login.router";
import { dashboardRouter } from "./dashboard.router";
import { registerRouters } from "./registers.router";

export const router = createBrowserRouter([
  ...loginRouter,
  ...dashboardRouter,
  ...registerRouters,
]);

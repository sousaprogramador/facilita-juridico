import { PAGES } from "~/constants/pages";
import { LoginPage } from "~/pages/Login";

export const loginRouter = [
  {
    path: PAGES.login,
    element: <LoginPage />,
  },
];

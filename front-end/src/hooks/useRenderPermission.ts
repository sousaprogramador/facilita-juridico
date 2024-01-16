import { UserPermission } from "~/providers/user-logged-in-provider";
import { useUserLoggedIn } from "./useUserLoggedIn";
import { useNavigate } from "react-router-dom";
import { PAGES } from "~/constants/pages";
import { logout } from "~/utils/logout.util";

export const useRenderPagePermission = (page: keyof UserPermission) => {
  const { hasReadPermission } = useUserLoggedIn();
  const navigate = useNavigate();
  const hasPermission = hasReadPermission(page);

  if (!hasPermission) {
    logout();
    return navigate(page === "dashboard" ? PAGES.login : PAGES.dashboard);
  }
};

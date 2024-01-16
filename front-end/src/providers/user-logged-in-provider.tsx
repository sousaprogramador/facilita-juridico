import { Spinner } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { createContext } from "react";
import { Navigate } from "react-router-dom";
import { PAGES } from "~/constants/pages";
import { loadUserLoggedInQuery, queryKeys } from "~/queries/me";
import { logout } from "~/utils/logout.util";
import { toast } from "~/utils/toast";

export type UserLoggedIn = {
  name: string;
  email: string;
  permissions?: UserPermission;
  authenticationFailure: boolean;
};

export type UserPermission = {
  dashboard: string[];
  process: string[];
  users: string[];
  tasks: string[];
  schedule: string[];
  reports: string[];
  processSituation: string[];
  processFinancialSituation: string[];
  processNature: string[];
  people: string[];
  typeOfPeople: string[];
  keywords: string[];
  judicialDistrict: string[];
  objectExpert: string[];
  statusImpeachment: string[];
  history: string[];
  financial: string[];
  documents: string[];
};

type UserLoggedInProviderType = {
  user?: UserLoggedIn;
  hasReadPermission: (page: keyof UserPermission) => boolean;
  hasWritePermission: (page: keyof UserPermission) => boolean;
};

export const UserLoggedInContext = createContext(
  {} as UserLoggedInProviderType
);

export const UserLoggedInProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const userLoggedIn = useQuery({
    queryFn: loadUserLoggedInQuery,
    queryKey: [queryKeys.list],
  });

  const isLoading = userLoggedIn.isLoading || userLoggedIn.isPending;

  if (!isLoading && userLoggedIn.data?.authenticationFailure) {
    toast("Sua sessão expirou. Faça login novamente", { type: "error" });
    logout();
    return <Navigate to={PAGES.login} replace />;
  }

  if (!isLoading && userLoggedIn.data && !userLoggedIn.data?.permissions) {
    logout();
    toast(
      "Você não possui nenhuma permissão. Contate o administrador e solicite suas permissões",
      { type: "error" }
    );
    logout();
    return <Navigate to={PAGES.login} replace />;
  }

  const hasReadPermission = (page: keyof UserPermission) => {
    if (!userLoggedIn.data || !userLoggedIn.data.permissions) return false;
    return (
      !!userLoggedIn.data.permissions[page] &&
      userLoggedIn.data.permissions[page].some(
        (perm) => perm === "READ" || perm === "READ_WRITE"
      )
    );
  };

  const hasWritePermission = (page: keyof UserPermission) => {
    if (!userLoggedIn.data || !userLoggedIn.data.permissions) return false;
    return (
      !!userLoggedIn.data.permissions[page] &&
      userLoggedIn.data.permissions[page].some((perm) => perm === "READ_WRITE")
    );
  };

  return (
    <UserLoggedInContext.Provider
      value={{
        user: userLoggedIn.data,
        hasReadPermission,
        hasWritePermission,
      }}
    >
      {isLoading ? (
        <div className="w-full px-8 py-32 flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      ) : (
        children
      )}
    </UserLoggedInContext.Provider>
  );
};
